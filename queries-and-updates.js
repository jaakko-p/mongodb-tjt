//#region Aikaisempaan skeemaan perustuvat kyselyt


// Q1: YKSITTÄISEN ASIAKKAAN KAIKKI TIEDOT
db.owners.find({fname: "Asiakkaan etunimi", sname: "Asiakkaan sukunimi"})


// Q2: Hae tiedot korjausasemasta ja sen työntekijöistä & rooleista
db.shops.find({city: "Kaupunki"}); 
// Jos samaan kaupunkiin tulee useampi paja, voidaan käyttää osoitetta tunnistavana attribuuttina
// Saadaan tieto aktiivisessa työsuhteessa olevista työntekijöistä. Jos halutaan tietää työsuhteen lopettaneesta työntekijästä tieto, voidaan tämä noutaa employees-kokoelmasta (esimerkiksi _id:llä tai etunimi-sukunimi-haulla).

// Q3: Hae tieto kaikista autolle tehdyistä korjauksista/katsastuksista (all_checks), auton omistajista sekä autolle tehtyjen korjausten kokonaismäärä
// Katsastutiedot voidaan saada hakemalla katsastuksista rekisterinumerolla
db.vehicles.find({reg_no: "REKISTERINUMERO"}) // Saadaan tieto auto
// Haku _Id:n avulla, jos esimerkiksi auton rekisterinumero vaihtunut (rajatapaus?):
let query = db.vehicles.findOne({reg_no: "REKISTERINUMERO"}).all_checks
db.checkups.find({_id: {$in: query}})

// Q4: Hae tieto työntekijöiden määrästä korjaamolla
db.shops.find({}, {address: true, city: true, total_employees: true});

// Q5: Hae yksittäisen auton korjaus-/katsastustiedot ja tieto siitä millä pajalla ja kenen toimesta
db.checkups.find({"vehicles.reg_no": "REKISTERINUMERO"}) 
db.employees.find({_id: db.checkups.findOne({"vehicles.reg_no": "REKISTERINUMERO"}).employee_id._id})

// Tai kaikki näin
db.checkups.find({"vehicles.reg_no": "REKISTERINUMERO"}).forEach(check => {
db.employees.find({_id: check.employee_id._id}) // Voidaan print-metodilla tuoda käyttöliittymään
print(db.employees.find({_id: check.employee_id._id}))
})


// Q6: Hae tieto 10 uusimmasta työntekijästä
db.new_hires.find();
//#endregion

//#region Päivitys- ja muokkaus

//Auton omistaja vaihtuu, muokataan tämä auton omistaja (owner) kenttään ja lisätään uusi omistaja 
db.owners.insertOne({fname: "James", sname: "Bond", email: "james.bong@supersecretagents.com",phone: "007"});
db.vehicles.updateOne({reg_no: "MUOKATTAVAN REKISTERINUMERO"}, {$set: {"owner.fname": "James", "owner.sname": "Bond", "owner.phone": "007"}});
//Halutessamme voimme tietenkin poistaa myös aikaisemman omistajan tietokannasta kokonaan:
db.owners.deleteOne({fname: "Entinen", sname: "Omistaja"})


// Valitaan nyt se työntekijä, jonka työsuhteen luonnetta muokataan. Korjaamon kaupungin asettaminen voi auttaa tarkentaamaan (jos esim. saman nimisiä työntekijöitä muualla)
// Työsuhde päättyy
db.employees.updateOne({fname: "Etunimi", sname: "Sukunimi", "shops.city": "Kaupunki"}, {$set: {end_date: ISODate()}})
// Työsuhde muuttuu, vaikkapa osa-aikaiseksi
db.employees.updateOne({fname: "Etunimi", sname: "Sukunimi", "shops.city": "Kaupunki"}, {$set: {employment_type: "Part-time"}})


// Äskeinen päivitti työntekijää employees-kokoelmassa. Mites tehdään, kun halutaan päivittää työntekijälistaa korjaamon kokoelmassa
// Uusi työntekijä aloittaa
db.shops.updateOne(
  {city: "Kaupunki"},
  {$addToSet: {employees: {fname: "James", sname: "Bond", role: "Super Secret Agent"}}} 
  // Oletetaan, että yhdessä kaupungissa ei ole saman nimisiä ja samassa roolissa työskenteleviä ihmisiä (voitasiin käyttää myös $push-operaattoria identtisille)
)

// Jos työsuhde päättyy, käytetään $pull-operaattoria, jotta työntekijälistassa säilyy vain aktiivisessa työsuhteessa olevat
db.shops.updateOne(
  {city: "Kaupunki"},
  {$pull: {employees: {fname: "Etunimi", sname: "Sukunimi"}}}
)
// Ja päivitetään vielä työntekijöiden kokonaismäärä pajalla
db.shops.updateOne({city: "Kaupunki"}, {$set: {total_employees: db.employees.find({$and: [{"shops.city": "Kaupunki"}, {end_date: {$exists: false}}]}).count()}})

// Ja sitten päivitetään uusien työntekijöiden lista. Limit-metodissa käytetään arvona lisättävien uusien työntekijöidne määrää - tässä instassissa se voisi 1
db.employees.find({}, {_id: 1}).sort({start_date: -1}).limit(1).forEach(emp => {
    db.new_hires.insertOne(emp) 
});
 
db.employees.aggregate([
    {$project: {fname: 1, sname: 1, role: 1, start_date: 1}},
    {$merge: {into: "new_hires", on: "_id", whenMatched: "merge"}}
])
//#endregion
