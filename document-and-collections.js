// No niin starttaillaanpa täältä projektia!
// Yleisen tason ajatukset ja tietokannan skeema löytyy "Mongo skeema & yleinen selostus tiedostosta". 
// Tässä siis tietokannan ja datan luonti. Koodin laatu ei välttämättä erityisen korkea, mutta mennään näillä
// JSON-tiedostoissa pelkkä data ja täällä sitten nämä tuontilauseet ja muut vastaavat. Regionien olen pyrkinyt parantamaan luettavuutta.
// Huomautuksena tässä vielä, että JSON-tiedostojen data ei välttämättä ole lopullinen totuus -- kaikki mahdolliset muutokset tehty tässä tiedostossa.


// #region Asiakkaat/Omistajat
db.owners.insertMany([{
    "fname": "Maddie",
    "sname": "Beran",
    "email": "mberan0@flavors.me",
    "phone": "9318286008"
  }, {
    "fname": "Derwin",
    "sname": "Stoyle",
    "email": "dstoyle1@hud.gov",
    "phone": "2173749998"
  }, {
    "fname": "Fidelity",
    "sname": "Harewood",
    "email": "fharewood2@xinhuanet.com",
    "phone": "3011230578"
  }, {
    "fname": "Laverna",
    "sname": "Grocutt",
    "email": "lgrocutt3@latimes.com",
    "phone": "6817263282"
  }, {
    "fname": "Nathanael",
    "sname": "Sollitt",
    "email": "nsollitt4@1688.com",
    "phone": "1095439264"
  }, {
    "fname": "Birgitta",
    "sname": "Pemberton",
    "email": "bpemberton5@theatlantic.com",
    "phone": "6745446665"
  }, {
    "fname": "Rozelle",
    "sname": "Whitcher",
    "email": "rwhitcher6@photobucket.com",
    "phone": "9834981471"
  }, {
    "fname": "Keith",
    "sname": "Daughtrey",
    "email": "kdaughtrey7@digg.com",
    "phone": "8453444599"
  }, {
    "fname": "Natalina",
    "sname": "Hadleigh",
    "email": "nhadleigh8@smugmug.com",
    "phone": "6226934086"
  }, {
    "fname": "Arly",
    "sname": "Hartill",
    "email": "ahartill9@chicagotribune.com",
    "phone": "6246961044"
  }, {
    "fname": "Jessika",
    "sname": "Hercules",
    "email": "jherculesa@weibo.com",
    "phone": "9573898491"
  }, {
    "fname": "Stavro",
    "sname": "Uzielli",
    "email": "suziellib@unc.edu",
    "phone": "2612370436"
  }, {
    "fname": "Faydra",
    "sname": "Upham",
    "email": "fuphamc@multiply.com",
    "phone": "7377900907"
  }, {
    "fname": "Maggee",
    "sname": "Lavington",
    "email": "mlavingtond@wikia.com",
    "phone": "2765542275"
  }, {
    "fname": "Abra",
    "sname": "Hallybone",
    "email": "ahallybonee@51.la",
    "phone": "3212363044"
  }, {
    "fname": "Forrester",
    "sname": "Camplejohn",
    "email": "fcamplejohnf@wikispaces.com",
    "phone": "5505491851"
  }, {
    "fname": "Roselle",
    "sname": "Kleinfeld",
    "email": "rkleinfeldg@skype.com",
    "phone": "2647759701"
  }, {
    "fname": "Patty",
    "sname": "Connal",
    "email": "pconnalh@elegantthemes.com",
    "phone": "2945834907"
  }, {
    "fname": "Sutherlan",
    "sname": "Noir",
    "email": "snoiri@economist.com",
    "phone": "9968839554"
  }, {
    "fname": "Murdoch",
    "sname": "Radish",
    "email": "mradishj@thetimes.co.uk",
    "phone": "5195416615"
  }, {
    "fname": "Dillie",
    "sname": "Durber",
    "email": "ddurberk@foxnews.com",
    "phone": "7141356942"
  }, {
    "fname": "Rene",
    "sname": "Sedcole",
    "email": "rsedcolel@sohu.com",
    "phone": "9175014267"
  }, {
    "fname": "Angelita",
    "sname": "Ganiclef",
    "email": "aganiclefm@spotify.com",
    "phone": "4969509871"
  }, {
    "fname": "Barbaraanne",
    "sname": "Rugieri",
    "email": "brugierin@upenn.edu",
    "phone": "7718375409"
  }, {
    "fname": "Munroe",
    "sname": "Fortoun",
    "email": "mfortouno@ovh.net",
    "phone": "7321643198"
  }, {
    "fname": "Kane",
    "sname": "Kelinge",
    "email": "kkelingep@uol.com.br",
    "phone": "2836917419"
  }, {
    "fname": "Bertie",
    "sname": "Feacham",
    "email": "bfeachamq@yandex.ru",
    "phone": "3962717123"
  }, {
    "fname": "Thibaud",
    "sname": "Treherne",
    "email": "ttreherner@nyu.edu",
    "phone": "5958460551"
  }, {
    "fname": "Loleta",
    "sname": "Scottrell",
    "email": "lscottrells@lulu.com",
    "phone": "9411277289"
  }, {
    "fname": "Charla",
    "sname": "Wiley",
    "email": "cwileyt@pbs.org",
    "phone": "7737755109"
  }, {
    "fname": "Daniel",
    "sname": "Greenroad",
    "email": "dgreenroadu@abc.net.au",
    "phone": "1305710297"
  }, {
    "fname": "Allen",
    "sname": "Ireland",
    "email": "airelandv@tumblr.com",
    "phone": "9993380172"
  }, {
    "fname": "Chrissy",
    "sname": "Ledamun",
    "email": "cledamunw@samsung.com",
    "phone": "4268633418"
  }, {
    "fname": "Leupold",
    "sname": "Cumber",
    "email": "lcumberx@rediff.com",
    "phone": "4955032730"
  }, {
    "fname": "Sibyl",
    "sname": "Hinks",
    "email": "shinksy@dell.com",
    "phone": "5421733298"
  }]
)
// #endregion

// #region Ajoneuvot
db.vehicles.insertMany( [{
    "make": "Chevrolet",
    "model": "Cobalt",
    "year": 2010,
    "type": "Convertible",
    "reg_no": "PAC-963",

    "owner" : {
    "fname": "Maddie",
    "sname": "Beran",
    "phone": "9318286008"
    }
  }, {
    "make": "Mazda",
    "model": "RX-8",
    "year": 2008,
    "type": "Sedan",
    "reg_no": "SSC-448",
    
    "owner" : { "fname": "Derwin",
    "sname": "Stoyle",
    "phone": "2173749998"}
  }, {
    "make": "Honda",
    "model": "Ridgeline",
    "year": 2007,
    "type": "Crossover",
    "reg_no": "SKB-446",
    
    "owner" : { "fname": "Fidelity",
    "sname": "Harewood",
    "phone": "3011230578"}
  }, {
    "make": "Ford",
    "model": "E250",
    "year": 2010,
    "type": "Convertible",
    "reg_no": "SBT-832", 

    "owner" : { "fname": "Laverna",
    "sname": "Grocutt",
    "phone": "6817263282"}
  }, {
    "make": "Kia",
    "model": "Rio",
    "year": 2012,
    "type": "Coupe",
    "reg_no": "SSV-902",

    "owner" : { "fname": "Nathanael",
    "sname": "Sollitt",
    "phone": "1095439264"}
  }, {
      "make": "Mazda",
      "model": "RX-8",
      "year": 2008,
      "type": "SUV",
      "reg_no": "LDS-117",

      "owner" : { "fname": "Birgitta",
      "sname": "Pemberton",
      "phone": "6745446665"}
  }, {
      "make": "Subaru",
      "model": "Impreza",
      "year": 2003,
      "type": "Hatchback",
      "reg_no": "CYA-495",

      "owner" : { "fname": "Rozelle",
      "sname": "Whitcher",
      "phone": "9834981471"}
  }, {
      "make": "Suzuki",
      "model": "Sidekick",
      "year": 1996,
      "type": "Sedan",
      "reg_no": "HSH-544",

      "owner" : { "fname": "Keith",
      "sname": "Daughtrey",
      "phone": "8453444599"}
  }, {
      "make": "Porsche",
      "model": "928",
      "year": 1993,
      "type": "Coupe",
      "reg_no": "KRH-885",

      "owner" : { "fname": "Natalina",
      "sname": "Hadleigh",
      "phone": "6226934086"}
      }, {
      "make": "Dodge",
      "model": "Ram 2500 Club",
      "year": 1995,
      "type": "Coupe",
      "reg_no": "KSC-416",

      "owner" : { "fname": "Arly",
      "sname": "Hartill",
      "phone": "6246961044"}
      }, {
      "make": "Chevrolet",
      "model": "Express 2500",
      "year": 2000,
      "type": "Hatchback",
      "reg_no": "KRN-461",

      "owner" : { "fname": "Jessika",
      "sname": "Hercules",
      "phone": "9573898491"}
      }, {
      "make": "GMC",
      "model": "Vandura 1500",
      "year": 1994,
      "type": "Hatchback",
      "reg_no": "CGG-221",

      "owner" : { "fname": "Stavro",
      "sname": "Uzielli",
      "phone": "2612370436"}
      }, {
      "make": "Ford",
      "model": "Galaxie",
      "year": 1966,
      "type": "Convertible",
      "reg_no": "SAW-762",

      "owner" : { "fname": "Faydra",
      "sname": "Upham",
      "phone": "7377900907"}
      }, {
      "make": "Lincoln",
      "model": "Mark VIII",
      "year": 1997,
      "type": "Sedan",
      "reg_no": "TVS-102",

      "owner" : { "fname": "Maggee",
      "sname": "Lavington",
      "phone": "2765542275"}
      }, {
      "make": "Mercedes-Benz",
      "model": "SLK-Class",
      "year": 1998,
      "type": "Convertible",
      "reg_no": "PWA-609",

      "owner" : { "fname": "Abra",
      "sname": "Hallybone",
      "phone": "3212363044"}
      }, {
      "make": "Ford",
      "model": "ZX2",
      "year": 2002,
      "type": "SUV",
      "reg_no": "WPD-176",

      "owner" : { "fname": "Forrester",
      "sname": "Camplejohn",
      "phone": "5505491851"}
      }, {
      "make": "Audi",
      "model": "Cabriolet",
      "year": 1997,
      "type": "Sedan",
      "reg_no": "KFS-928",

      "owner" : { "fname": "Roselle",
      "sname": "Kleinfeld",
      "phone": "2647759701"}
      }, {
      "make": "Toyota",
      "model": "Xtra",
      "year": 1993,
      "type": "SUV",
      "reg_no": "YOU-455",

      "owner" : { "fname": "Patty",
      "sname": "Connal",
      "phone": "2945834907"}
      }, {
      "make": "Oldsmobile",
      "model": "88",
      "year": 1996,
      "type": "Sedan",
      "reg_no": "WBG-844",

      "owner" : { "fname": "Sutherlan",
      "sname": "Noir",
      "phone": "9968839554"}
      }, {
      "make": "Ford",
      "model": "Aspire",
      "year": 1995,
      "type": "Hatchback",
      "reg_no": "YKP-84",

      "owner" : { "fname": "Murdoch",
      "sname": "Radish",
      "phone": "5195416615"}
   }, {
      "make": "Ford",
      "model": "Festiva",
      "year": 1992,
      "type": "SUV",
      "reg_no": "SAV-495",

      "owner" : { "fname": "Dillie",
      "sname": "Durber",
      "phone": "7141356942"}
      }, {
      "make": "Infiniti",
      "model": "IPL G",
      "year": 2011,
      "type": "Coupe",
      "reg_no": "KAY-219",

      "owner" : { "fname": "Rene",
      "sname": "Sedcole",
      "phone": "9175014267"}
      }, {
      "make": "Ford",
      "model": "Econoline E150",
      "year": 2000,
      "type": "SUV",
      "reg_no": "KCO-510",

      "owner" : { "fname": "Angelita",
      "sname": "Ganiclef",
      "phone": "4969509871"}
      }, {
      "make": "Chevrolet",
      "model": "Sportvan G20",
      "year": 1994,
      "type": "SUV",
      "reg_no": "YHA-448",

      "owner" : { "fname": "Barbaraanne",
      "sname": "Rugieri",
      "phone": "7718375409"}
      }, {
        "make": "Lincoln",
        "model": "MKZ",
        "year": 2007,
        "type": "Coupe",
        "reg_no": "KRK-689",
        "owner" : { "fname": "Munroe",
        "sname": "Fortoun",
        "phone": "7321643198"}
  }, {
      "make": "Audi",
      "model": "R8",
      "year": 2008,
      "type": "Hatchback",
      "reg_no": "KOX-780",
      "owner" : { "fname": "Kane",
      "sname": "Kelinge",
      "phone": "2836917419"}
  }, {
      "make": "Toyota",
      "model": "Paseo",
      "year": 1997,
      "type": "SUV",
      "reg_no": "OSA-484",
      "owner" : { "fname": "Bertie",
      "sname": "Feacham",
      "phone": "3962717123"}
  }, {
      "make": "Dodge",
      "model": "Omni",
      "year": 1978,
      "type": "Convertible",
      "reg_no": "ZLJ-796",
      "owner" : { "fname": "Thibaud",
      "sname": "Treherne",
      "phone": "5958460551"}
  }, {
      "make": "Lamborghini",
      "model": "Gallardo",
      "year": 2003,
      "type": "Hatchback",
      "reg_no": "SBG-127",
      "owner" : { "fname": "Loleta",
      "sname": "Scottrell",
      "phone": "9411277289"}
  }, {
      "make": "Volvo",
      "model": "S80",
      "year": 2010,
      "type": "Hatchback",
      "reg_no": "CAE-597",
      "owner" : { "fname": "Charla",
      "sname": "Wiley",
      "phone": "7737755109"}
  }, {
      "make": "Volkswagen",
      "model": "Passat",
      "year": 1996,
      "type": "Crossover",
      "reg_no": "KOM-818",
      "owner" : { "fname": "Daniel",
      "sname": "Greenroad",
      "phone": "1305710297"}
  }, {
      "make": "Oldsmobile",
      "model": "Intrigue",
      "year": 2001,
      "type": "Crossover",
      "reg_no": "AYB-320",
      "owner" : { "fname": "Allen",
      "sname": "Ireland",
      "phone": "9993380172"}
  }, {
      "make": "Hyundai",
      "model": "Genesis Coupe",
      "year": 2013,
      "type": "Sedan",
      "reg_no": "CYD-604",
      
      "owner" : { "fname": "Chrissy",
      "sname": "Ledamun",
      "phone": "4268633418"}
  }, {
      "make": "Acura",
      "model": "TL",
      "year": 2011,
      "type": "Convertible",
      "reg_no": "YCU-376",

      "owner" : { "fname": "Leupold",
      "sname": "Cumber",
      "phone": "4955032730"}
  }, {
    "make": "Lexus",
    "model": "ES",
    "year": 1991,
    "type": "SUV",
    "reg_no": "SVP-366",

    "owner" : { "fname": "Sibyl",
    "sname": "Hinks",
    "phone": "5421733298"}
  }, 
  

  {
    "make": "Holden",
    "model": "VS Commodore",
    "year": 1996,
    "type": "Sedan",
    "reg_no": "VTU-66", 

    "owner" : { "fname": "Thibaud",
    "sname": "Treherne",
    "phone": "5958460551"}
  }, {
    "make": "Saab",
    "model": "9-5",
    "year": 2005,
    "type": "SUV",
    "reg_no": "KG-171",

    "owner" : { "fname": "Bertie",
    "sname": "Feacham",
    "phone": "3962717123"}
  }, {
      "make": "Mazda",
      "model": "B-Series",
      "year": 1999,
      "type": "SUV",
      "reg_no": "LIC-76" ,

      "owner" : { "fname": "Charla",
      "sname": "Wiley",
      "phone": "7737755109"}
    }, {
      "make": "Dodge",
      "model": "Viper",
      "year": 1992,
      "type": "Sedan",
      "reg_no": "AYN-618",
      
      "owner" : { "fname": "Leupold",
      "sname": "Cumber",
      "phone": "4955032730"}
  }, {
      "make": "GMC",
      "model": "Yukon",
      "year": 1998,
      "type": "Crossover",
      "reg_no": "NTG-978",
      
      "owner" : { "fname": "Sibyl",
      "sname": "Hinks",
      "phone": "5421733298"}
  }]
)


// Tässä laskemme ajoneuvolle tehtyjen korjausten/katsastusten määrän
// ISO HUOMIO!! all_checks ja total_checkups ei vielä toimi, koska checkups-kokoelma tehdään myöhemmin tässä JS-tiedostossa,
// joten jos ajat kaikki suoraan täältä eivät näiden tiedot vielä näy. Tämä vain rakenteen seuraamisen helpottamisen kannalta tehty päätös
db.vehicles.find().forEach(vehicle => {
  db.vehicles.updateOne({reg_no: vehicle.reg_no}, {$set: {total_checkups: db.checkups.find({"vehicles.reg_no": vehicle.reg_no}).count()}})
});

// Alustetaan all_checks-dokumentti
db.vehicles.updateMany({}, {$set: {all_checks: []}})

// Tässä lisätään katsastuksen/korjauksen _id, ajoneuvon all_checks-dokumenttiin.
db.checkups.find().forEach(check => {

  db.vehicles.updateOne({reg_no : check.vehicles.reg_no}, {$addToSet: {all_checks: check._id}})
})
// #endregion

//#region Työntekijät
let employees = [{
    
  "shops": {
      "address": "Koivupurontie 10",
      "city": "Jyväskylä"
  },
  
  "fname": "Joséphine",
  "sname": "Fores",
  "start_date": {"$date":"2020-09-01T22:39:06.000Z"},
  "end_date": {"$date":"2021-05-17T11:25:27.000Z"},
  "role": "Mechanic",
  "employment_type": "Part-time",
  "specialty": "Toyota"
}, {
  
  "shops": {
      "address": "Koivupurontie 10",
      "city": "Jyväskylä"
  },
  
  "fname": "Tán",
  "sname": "Revans",
  "start_date": {"$date":"2022-10-20T06:21:32.000Z"},
  "role": "Mechanic",
  "employment_type": "Fulltime",
  "specialty": "Plymouth"
}, {
  
  "shops": {
      "address": "Koivupurontie 10",
      "city": "Jyväskylä"
  },
  
  "fname": "Tú",
  "sname": "Peasgood",
  "start_date": {"$date":"2020-12-12T00:40:08.000Z"},
  "end_date": {"$date":"2022-01-10T13:55:19.000Z"},
  "role": "Mechanic",
  "employment_type": "Part-time"
}, {
  
  "shops": {
      "address": "Koivupurontie 10",
      "city": "Jyväskylä"
  },
  
  "fname": "Géraldine",
  "sname": "Sayburn",
  "start_date": {"$date":"2020-07-19T21:17:30.000Z"},
  "role": "Mechanic",
  "employment_type": "Fulltime",
  "specialty": "Honda"
}, {
  
  "shops": {
      "address": "Koivupurontie 10",
      "city": "Jyväskylä"
  },
  
  "fname": "Maëlys",
  "sname": "Ector",
  "start_date": {"$date":"2020-09-29T03:15:12.000Z"},
  "end_date": {"$date":"2022-12-29T11:42:20.000Z"},
  "role": "Customer Service",
  "employment_type": "Fulltime",
  "specialty": "Oldsmobile"
}, {
  
  "shops": {
      "address": "Koivupurontie 10",
      "city": "Jyväskylä"
  },
  
  "fname": "Örjan",
  "sname": "Hughf",
  "start_date": {"$date":"2022-05-13T07:21:21.000Z"},
  "end_date": {"$date":"2022-08-02T06:05:01.000Z"},
  "role": "Mechanic",
  "employment_type": "Fulltime",
  "specialty": "Mazda"
}, {
  
  "shops": {
      "address": "Koivupurontie 10",
      "city": "Jyväskylä"
  },
  
  "fname": "Eliès",
  "sname": "Wippermann",
  "start_date": {"$date":"2021-07-07T19:42:44.000Z"},
  "role": "Customer Service",
  "employment_type": "Fulltime",
  "specialty": "Infiniti"
}, {
  
  "shops": {
      "address": "Koivupurontie 10",
      "city": "Jyväskylä"
  },
  
  "fname": "Crééz",
  "sname": "Casterot",
  "start_date": {"$date":"2020-04-13T20:56:12.000Z"},
  "role": "Accounting",
  "employment_type": "Fulltime",
  "specialty": "Audi"
}, {
  
  "shops": {
      "address": "Koivupurontie 10",
      "city": "Jyväskylä"
  },
  
  "fname": "Yénora",
  "sname": "Bautiste",
  "start_date": {"$date":"2022-01-01T05:26:15.000Z"},
  "role": "Mechanic",
  "employment_type": "Fulltime",
  "specialty": "Mercedes-Benz"
}, {
  
  "shops": {
      "address": "Koivupurontie 10",
      "city": "Jyväskylä"
  },
  
  "fname": "Marie-thérèse",
  "sname": "Monck",
  "start_date": {"$date":"2022-09-18T20:10:14.000Z"},
  "role": "Mechanic",
  "employment_type": "Trainee",
  "specialty": "Maserati"
}, {
  
  "shops": {
      "address": "Koivupurontie 10",
      "city": "Jyväskylä"
  },
  
  "fname": "Åke",
  "sname": "Lakin",
  "start_date": {"$date":"2021-08-02T06:46:46.000Z"},
  "role": "Mechanic",
  "employment_type": "Fulltime",
  "specialty": "Volkswagen"
}, {
  
  "shops": {
      "address": "Koivupurontie 10",
      "city": "Jyväskylä"
  },
  
  "fname": "Réjane",
  "sname": "Gumly",
  "start_date": {"$date":"2021-12-02T00:05:25.000Z"},
  "end_date": {"$date":"2022-06-10T07:09:54.000Z"},
  "role": "HR",
  "employment_type": "Part-time"
}, {
  
  "shops": {
      "address": "Koivupurontie 10",
      "city": "Jyväskylä"
  },
  
  "fname": "Thérèse",
  "sname": "Bygrave",
  "start_date": {"$date":"2021-04-30T00:11:38.000Z"},
  "role": "Mechanic",
  "employment_type": "Fulltime",
  "specialty": "Honda"
}, {
  
  "shops": {
      "address": "Koivupurontie 10",
      "city": "Jyväskylä"
  },
  
  "fname": "Daphnée",
  "sname": "McNellis",
  "start_date": {"$date":"2021-05-15T19:45:46.000Z"},
  "role": "HR",
  "employment_type": "Trainee"
}, {
  
  "shops": {
      "address": "Koivupurontie 10",
      "city": "Jyväskylä"
  },
  
  "fname": "Dà",
  "sname": "Waples",
  "start_date": {"$date":"2020-11-17T15:26:49.000Z"},
  "role": "Accounting",
  "employment_type": "Part-time",
  "specialty": "Volvo"
}, {
  
  "shops": {
      "address": "Koivupurontie 10",
      "city": "Jyväskylä"
  },
  
  "fname": "Adélaïde",
  "sname": "Giacobelli",
  "start_date": {"$date":"2021-02-01T19:11:33.000Z"},
  "end_date": {"$date":"2021-11-17T01:36:55.000Z"},
  "role": "Marketing",
  "employment_type": "Part-time"
}, {
  
  "shops": {
      "address": "Koivupurontie 10",
      "city": "Jyväskylä"
  },
  
  "fname": "Göran",
  "sname": "Grabbam",
  "start_date": {"$date":"2022-01-14T18:55:10.000Z"},
  "end_date": {"$date":"2023-01-25T22:07:16.000Z"},
  "role": "Accounting",
  "employment_type": "Fulltime",
  "specialty": "Chevrolet"
}, {
  
  "shops": {
      "address": "Juuttaanmäentie 19",
      "city": "Tohmajärvi"
  },
  
  "fname": "Maëly",
  "sname": "Fawson",
  "start_date": {"$date":"2022-05-29T16:15:13.000Z"},
  "end_date": {"$date":"2022-09-23T16:18:59.000Z"},
  "role": "Mechanic",
  "employment_type": "Part-time"
}, {
  
  "shops": {
      "address": "Juuttaanmäentie 19",
      "city": "Tohmajärvi"
  },
  
  "fname": "Esbjörn",
  "sname": "Pagett",
  "start_date": {"$date":"2020-07-22T07:41:51.000Z"},
  "end_date": {"$date":"2022-02-07T22:18:21.000Z"},
  "role": "Accounting",
  "employment_type": "Fulltime"
}, {
  
  "shops": {
      "address": "Juuttaanmäentie 19",
      "city": "Tohmajärvi"
  },
  
  "fname": "Dorothée",
  "sname": "Humfrey",
  "start_date": {"$date":"2021-12-21T13:20:49.000Z"},
  "end_date": {"$date":"2022-11-15T05:00:26.000Z"},
  "role": "Marketing",
  "employment_type": "Part-time",
  "specialty": "Honda"
}, {
  
  "shops": {
      "address": "Juuttaanmäentie 19",
      "city": "Tohmajärvi"
  },
  
  "fname": "Gwenaëlle",
  "sname": "Baber",
  "start_date": {"$date":"2020-12-02T19:53:22.000Z"},
  "role": "HR",
  "employment_type": "Fulltime",
  "specialty": "Maserati"
}, {
  
  "shops": {
      "address": "Juuttaanmäentie 19",
      "city": "Tohmajärvi"
  },
  
  "fname": "Léone",
  "sname": "Carriage",
  "start_date": {"$date":"2020-02-21T00:16:26.000Z"},
  "end_date": {"$date":"2023-01-11T13:18:47.000Z"},
  "role": "Customer Service",
  "employment_type": "Trainee",
  "specialty": "Porsche"
}, {
  
  "shops": {
      "address": "Juuttaanmäentie 19",
      "city": "Tohmajärvi"
  },
  
  "fname": "Thérèse",
  "sname": "Goodnow",
  "start_date": {"$date":"2020-07-23T16:07:12.000Z"},
  "role": "Mechanic",
  "employment_type": "Fulltime",
  "specialty": "Saab"
}, {
  
  "shops": {
      "address": "Juuttaanmäentie 19",
      "city": "Tohmajärvi"
  },
  
  "fname": "Desirée",
  "sname": "Filipowicz",
  "start_date": {"$date":"2021-08-09T02:40:40.000Z"},
  "role": "Customer Service",
  "employment_type": "Fulltime"
}, {
  
  "shops": {
      "address": "Juuttaanmäentie 19",
      "city": "Tohmajärvi"
  },
  
  "fname": "Célestine",
  "sname": "Sancroft",
  "start_date": {"$date":"2021-05-31T08:53:16.000Z"},
  "role": "Mechanic",
  "employment_type": "Fulltime"
}, {
  
  "shops": {
      "address": "Juuttaanmäentie 19",
      "city": "Tohmajärvi"
  },
  
  "fname": "Uò",
  "sname": "Penni",
  "start_date": {"$date":"2022-11-14T21:33:35.000Z"},
  "role": "Mechanic",
  "employment_type": "Fulltime",
  "specialty": "Ford"
}, {
  
  "shops": {
      "address": "Juuttaanmäentie 19",
      "city": "Tohmajärvi"
  },
  
  "fname": "Anaëlle",
  "sname": "Bennough",
  "start_date": {"$date":"2022-09-06T06:33:02.000Z"},
  "end_date": {"$date":"2023-03-08T03:54:25.000Z"},
  "role": "Mechanic",
  "employment_type": "Trainee",
  "specialty": "Pontiac"
}, {
  
  "shops": {
      "address": "Juuttaanmäentie 19",
      "city": "Tohmajärvi"
  },
  
  "fname": "Lauréna",
  "sname": "Cobson",
  "start_date": {"$date":"2020-02-24T10:07:00.000Z"},
  "end_date": {"$date":"2022-06-05T13:20:44.000Z"},
  "role": "Mechanic",
  "employment_type": "Fulltime"
}, {
  
  "shops": {
      "address": "Lehtikorva 22",
      "city": "Turku"
  },
  
  "fname": "Béatrice",
  "sname": "Bratley",
  "start_date": {"$date":"2021-11-12T08:43:20.000Z"},
  "end_date": {"$date":"2022-08-04T10:10:14.000Z"},
  "role": "Mechanic",
  "employment_type": "Part-time",
  "specialty": "Mitsubishi"
}, {
  
  "shops": {
      "address": "Lehtikorva 22",
      "city": "Turku"
  },
  
  "fname": "Eliès",
  "sname": "Lacroux",
  "start_date": {"$date":"2020-07-26T01:45:55.000Z"},
  "end_date": {"$date":"2021-03-12T09:11:05.000Z"},
  "role": "HR",
  "employment_type": "Trainee"
}, {
  
  "shops": {
      "address": "Lehtikorva 22",
      "city": "Turku"
  },
  
  "fname": "Mégane",
  "sname": "Sandells",
  "start_date": {"$date":"2022-01-10T00:59:02.000Z"},
  "role": "Customer Service",
  "employment_type": "Part-time",
  "specialty": "Kia"
}, {
  
  "shops": {
      "address": "Lehtikorva 22",
      "city": "Turku"
  },
  
  "fname": "Edmée",
  "sname": "Klaves",
  "start_date": {"$date":"2021-01-06T15:49:20.000Z"},
  "role": "Accounting",
  "employment_type": "Fulltime",
  "specialty": "Mercedes-Benz"
}, {
  
  "shops": {
      "address": "Lehtikorva 22",
      "city": "Turku"
  },
  
  "fname": "Edmée",
  "sname": "Korpal",
  "start_date": {"$date":"2020-06-04T14:06:10.000Z"},
  "role": "Customer Service",
  "employment_type": "Fulltime"
}, {
  
  "shops": {
      "address": "Lehtikorva 22",
      "city": "Turku"
  },
  
  "fname": "Pénélope",
  "sname": "Masters",
  "start_date": {"$date":"2020-03-21T23:15:49.000Z"},
  "role": "Mechanic",
  "employment_type": "Fulltime"
}, {
  
  "shops": {
      "address": "Lehtikorva 22",
      "city": "Turku"
  },
  
  "fname": "Cécilia",
  "sname": "Scarfe",
  "start_date": {"$date":"2021-05-21T14:27:07.000Z"},
  "role": "Marketing",
  "employment_type": "Fulltime"
}, {
  
  "shops": {
      "address": "Lehtikorva 22",
      "city": "Turku"
  },
  
  "fname": "Märta",
  "sname": "Ellingham",
  "start_date": {"$date":"2021-08-07T17:56:23.000Z"},
  "role": "Accounting",
  "employment_type": "Fulltime"
}, {
  
  "shops": {
      "address": "Lehtikorva 22",
      "city": "Turku"
  },
  
  "fname": "Miléna",
  "sname": "Chucks",
  "start_date": {"$date":"2022-01-09T22:50:59.000Z"},
  "end_date": {"$date":"2022-08-15T04:01:40.000Z"},
  "role": "Mechanic",
  "employment_type": "Fulltime",
  "specialty": "Ford"
}, {
  
  "shops": {
      "address": "Lehtikorva 22",
      "city": "Turku"
  },
  
  "fname": "Angèle",
  "sname": "Sanja",
  "start_date": {"$date":"2021-01-12T03:07:11.000Z"},
  "end_date": {"$date":"2021-07-22T14:47:09.000Z"},
  "role": "Mechanic",
  "employment_type": "Part-time",
  "specialty": "Volkswagen"
}, {
  
  "shops": {
      "address": "Lehtikorva 22",
      "city": "Turku"
  },
  
  "fname": "Adèle",
  "sname": "Karpfen",
  "start_date": {"$date":"2021-09-21T16:13:20.000Z"},
  "role": "Accounting",
  "employment_type": "Trainee",
  "specialty": "Buick"
}, {
  
  "shops": {
      "address": "Lehtikorva 22",
      "city": "Turku"
  },
  
  "fname": "Félicie",
  "sname": "Enoch",
  "start_date": {"$date":"2022-10-22T05:44:06.000Z"},
  "end_date": {"$date":"2022-11-06T01:21:33.000Z"},
  "role": "Mechanic",
  "employment_type": "Trainee"
}, {
  
  "shops": {
      "address": "Koivupurontie 10",
      "city": "Jyväskylä"
  },
  
  "fname": "Léana",
  "sname": "Caffin",
  "start_date": {"$date":"2022-12-31T03:54:07.000Z"},
  "role": "Marketing",
  "employment_type": "Fulltime",
  "specialty": "Buick"
}, {
  
  "shops": {
      "address": "Juuttaanmäentie 19",
      "city": "Tohmajärvi"
  },
  
  "fname": "Uò",
  "sname": "Chell",
  "start_date": {"$date":"2020-08-22T21:40:15.000Z"},
  "end_date": {"$date":"2022-03-13T06:54:50.000Z"},
  "role": "Customer Service",
  "employment_type": "Fulltime"
}, {
  
  "shops": {
      "address": "Juuttaanmäentie 19",
      "city": "Tohmajärvi"
  },
  
  "fname": "Gérald",
  "sname": "Kegan",
  "start_date": {"$date":"2020-09-29T14:00:50.000Z"},
  "role": "Mechanic",
  "employment_type": "Trainee"
}, {
  
  "shops": {
      "address": "Lehtikorva 22",
      "city": "Turku"
  },
  
  "fname": "Méghane",
  "sname": "Loudon",
  "start_date": {"$date":"2021-05-27T13:20:37.000Z"},
  "end_date": {"$date":"2023-02-05T10:49:04.000Z"},
  "role": "Mechanic",
  "employment_type": "Part-time",
  "specialty": "Volkswagen"
}, {
  
  "shops": {
      "address": "Lehtikorva 22",
      "city": "Turku"
  },
  
  "fname": "Adèle",
  "sname": "Lufkin",
  "start_date": {"$date":"2022-10-06T20:38:26.000Z"},
  "end_date": {"$date":"2021-05-04T22:31:18.000Z"},
  "role": "Mechanic",
  "employment_type": "Part-time",
  "specialty": "Subaru"
}, {
  
  "shops": {
      "address": "Lehtikorva 22",
      "city": "Turku"
  },
  
  "fname": "Intéressant",
  "sname": "Sanderson",
  "start_date": {"$date":"2022-09-17T23:07:52.000Z"},
  "role": "Mechanic",
  "employment_type": "Fulltime",
  "specialty": "Kia"
}, {
  
  "shops": {
      "address": "Lehtikorva 22",
      "city": "Turku"
  },
  
  "fname": "Céline",
  "sname": "Peaple",
  "start_date": {"$date":"2020-04-19T06:57:15.000Z"},
  "role": "Accounting",
  "employment_type": "Fulltime",
  "specialty": "Volkswagen"
}, {
  
  "shops": {
      "address": "Koivupurontie 10",
      "city": "Jyväskylä"
  },
  
  "fname": "Marlène",
  "sname": "Alven",
  "start_date": {"$date":"2020-01-24T14:58:21.000Z"},
  "role": "Customer Service",
  "employment_type": "Trainee",
  "specialty": "GMC"
}, {
  
  "shops": {
      "address": "Koivupurontie 10",
      "city": "Jyväskylä"
  },
  
  "fname": "Andréanne",
  "sname": "Beeken",
  "start_date": {"$date":"2021-04-19T18:32:27.000Z"},
  "end_date": {"$date":"2021-06-24T14:59:23.000Z"},
  "role": "Mechanic",
  "employment_type": "Fulltime",
  "specialty": "Hyundai"
}, {
  
  "shops": {
      "address": "Juuttaanmäentie 19",
      "city": "Tohmajärvi"
  },
  
  "fname": "Mahélie",
  "sname": "Keaveney",
  "start_date": {"$date":"2021-05-02T07:21:51.000Z"},
  "role": "Mechanic",
  "employment_type": "Part-time",
  "specialty": "Acura"
}]


employees.forEach(employee => {
  
  // Tarkastetaan onko kyseessä mekaanikko, jos ei poistetaan erikoisosaaminen
  if(employee.role != "Mechanic"){
      delete employee.specialty
  }

  // Tarkastetaan onko työsuhde päättynyt
  if(employee.end_date != undefined){

    // Jos lopettanut ennen kuin ehtinyt aloittaakaan, otetaan näistä työntekijöistä tieto 
    // PS. En ollut tarpeeksi JS-guru, että olisin osannut järkevästi tehdä datan muokkausta automaattisesti niin muokkasin manuaalisesti -- saatoin jonkun rajatapauksenkin sinne jättää :)
    if(employee.end_date.$date < employee.start_date.$date) {
      console.log(employee.fname, employee.start_date, employee.end_date)
    }
  }

})

// Täällä insertoidaan data taas tietokantaan
for(let k = 0; k < employees.length; k++){
  db.employees.insertOne(employees[k])
}

//#endregion

//#region Korjaamot
let shops = [
  {
      "address" : "Juuttaanmäentie 19",
      "city" : "Tohmajärvi",
      "phone" : "0401229765",
      "email" : "tohmajärvi@supmechanics.fi",

          "employees": [{
          }]
  },
  {
      "address" : "Lehtikorva 22",
      "city" : "Turku",
      "phone" : "0407889566",
      "email" : "turku@supmechanics.fi" ,

          "employees": [{
          }]
  },
  {
      "address" : "Koivupurontie 10",
      "city" : "Jyväskylä",
      "phone" : "0458996723",
      "email" : "jyvaskyla@supmechanics.fi",

          "employees": [{
          }]
  }
]

//Lisätään korjaamot tietokantaan
shops.forEach (shop =>{

db.shops.insertOne(shop)
})


  let tohma = [];
  let jkl = [];
  let turku = [];


  employees.forEach (employee =>{

// Kiinnostaa vain aktiiviset työsuhteet
    if(employee.end_date == undefined) {

      if (employee.shops.city == "Turku") turku.push(employee)

      if (employee.shops.city == "Jyväskylä") jkl.push(employee)

      if (employee.shops.city == "Tohmajärvi") tohma.push(employee)
    }

    //Tässä kohtaa poistetaan ns. tarpeettomat tiedot
        delete employee.specialty
        delete employee.employment_type
        delete employee.shops
        delete employee.start_date

  })

  tohma.forEach (emp => {
    db.shops.updateOne({city: "Tohmajärvi"}, {$push: {employees: emp}})
  })

  jkl.forEach(emp => {
    db.shops.updateOne({city: "Jyväskylä"}, {$push: {employees: emp}})
  })

  turku.forEach(emp => {
    db.shops.updateOne({city: "Turku"}, {$push: {employees: emp}})
  })

  // Tässä lasketaan jokaisen pajan aktiivisten työntekijöiden määrä
let cities = ["Tohmajärvi", "Jyväskylä", "Turku"];
cities.forEach(city => {
  db.shops.updateOne({"city": city}, {$set: {total_employees: db.employees.find({$and: [{"shops.city": city}, {end_date: {$exists: false}}]}).count()}})
  })

//#endregion

//#region Katsastus/korjaus

//#region Katsastus-/korjaustapahtumat
let checkups = [{
  "inspection": true,
  "repair": true,
  "cost": 3973.5,
  "inspection_result": "Pass",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": false,
  "repair": false,
  "cost": 16601.7,
  "inspection_result": "Fail",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": null,
  "repair": true,
  "cost": 14543.8,
  "inspection_result": "Fail",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": true,
  "repair": true,
  "cost": 32934.5,
  "inspection_result": "Pass",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": null,
  "repair": true,
  "cost": 18402.1,
  "inspection_result": "Pass",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": false,
  "repair": false,
  "cost": 46138.9,
  "inspection_result": "Fail",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": true,
  "repair": null,
  "cost": 967.9,
  "inspection_result": "Fail",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": true,
  "repair": false,
  "cost": 2461.5,
  "inspection_result": "Pass",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": true,
  "repair": null,
  "cost": 13949.5,
  "inspection_result": "Fail",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": true,
  "repair": false,
  "cost": 15928.0,
  "inspection_result": "Fail",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": false,
  "repair": false,
  "cost": 11554.2,
  "inspection_result": "Fail",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": null,
  "repair": null,
  "cost": 35299.2,
  "inspection_result": "Pass",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": true,
  "repair": false,
  "cost": 26045.3,
  "inspection_result": "Pass",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": false,
  "repair": false,
  "cost": 29523.4,
  "inspection_result": "Fail",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": null,
  "repair": true,
  "cost": 22816.2,
  "inspection_result": "Pass",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": true,
  "repair": true,
  "cost": 34758.2,
  "inspection_result": "Pass",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": null,
  "repair": false,
  "cost": 35417.9,
  "inspection_result": "Fail",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": null,
  "repair": false,
  "cost": 34840.4,
  "inspection_result": "Fail",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": false,
  "repair": true,
  "cost": 3296.0,
  "inspection_result": "Pass",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": true,
  "repair": false,
  "cost": 48259.8,
  "inspection_result": "Pass",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": true,
  "repair": true,
  "cost": 26214.2,
  "inspection_result": "Pass",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": null,
  "repair": false,
  "cost": 27351.5,
  "inspection_result": "Fail",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": true,
  "repair": true,
  "cost": 8732.3,
  "inspection_result": "Fail",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": true,
  "repair": false,
  "cost": 19781.3,
  "inspection_result": "Fail",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": true,
  "repair": true,
  "cost": 10950.8,
  "inspection_result": "Pass",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": false,
  "repair": null,
  "cost": 42339.1,
  "inspection_result": "Fail",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": null,
  "repair": null,
  "cost": 15807.3,
  "inspection_result": "Pass",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": true,
  "repair": null,
  "cost": 4541.2,
  "inspection_result": "Pass",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": false,
  "repair": true,
  "cost": 29994.6,
  "inspection_result": "Pass",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": false,
  "repair": null,
  "cost": 5488.8,
  "inspection_result": "Pass",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": true,
  "repair": false,
  "cost": 1228.3,
  "inspection_result": "Pass",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": false,
  "repair": null,
  "cost": 30682.1,
  "inspection_result": "Pass",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": true,
  "repair": false,
  "cost": 45124.8,
  "inspection_result": "Fail",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": false,
  "repair": true,
  "cost": 19576.8,
  "inspection_result": "Fail",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": false,
  "repair": null,
  "cost": 19916.7,
  "inspection_result": "Pass",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": null,
  "repair": true,
  "cost": 6887.7,
  "inspection_result": "Pass",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": null,
  "repair": true,
  "cost": 18753.5,
  "inspection_result": "Fail",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": null,
  "repair": null,
  "cost": 12056.2,
  "inspection_result": "Fail",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": null,
  "repair": null,
  "cost": 40458.6,
  "inspection_result": "Fail",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": true,
  "repair": false,
  "cost": 4231.8,
  "inspection_result": "Fail",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": false,
  "repair": null,
  "cost": 363.8,
  "inspection_result": "Pass",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": true,
  "repair": null,
  "cost": 47390.3,
  "inspection_result": "Fail",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": null,
  "repair": false,
  "cost": 14324.3,
  "inspection_result": "Fail",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": null,
  "repair": false,
  "cost": 37083.6,
  "inspection_result": "Fail",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": false,
  "repair": false,
  "cost": 15366.2,
  "inspection_result": "Fail",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": false,
  "repair": null,
  "cost": 38767.2,
  "inspection_result": "Pass",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": false,
  "repair": true,
  "cost": 27790.9,
  "inspection_result": "Fail",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": null,
  "repair": null,
  "cost": 48359.3,
  "inspection_result": "Fail",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": false,
  "repair": null,
  "cost": 15766.6,
  "inspection_result": "Fail",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": null,
  "repair": null,
  "cost": 40139.8,
  "inspection_result": "Fail",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": null,
  "repair": true,
  "cost": 39761.9,
  "inspection_result": "Fail",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": null,
  "repair": false,
  "cost": 3250.4,
  "inspection_result": "Pass",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": false,
  "repair": false,
  "cost": 36742.3,
  "inspection_result": "Pass",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": true,
  "repair": false,
  "cost": 16179.0,
  "inspection_result": "Pass",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": true,
  "repair": true,
  "cost": 29746.4,
  "inspection_result": "Pass",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": true,
  "repair": null,
  "cost": 46529.5,
  "inspection_result": "Fail",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": null,
  "repair": true,
  "cost": 31366.7,
  "inspection_result": "Fail",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": null,
  "repair": false,
  "cost": 7680.2,
  "inspection_result": "Fail",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": true,
  "repair": null,
  "cost": 35653.8,
  "inspection_result": "Fail",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}, {
  "inspection": null,
  "repair": false,
  "cost": 6262.6,
  "inspection_result": "Pass",
  "details": "TÄNNE",
      
  
      "shops": {
          "address": "",
          "city": ""
      },

      "vehicles": {
          "reg_no": "",
          "make": "",
          "model": ""
      }
}]


//  #endregion

//#region ajoneuvot

//Ymmärtämisen vuoksi tehty semanttinen valinta pitää vehicle-muuttuja yksikkömuodossa
const vehicle = [{
  "make": "Chevrolet",
  "model": "Cobalt",
  "year": 2010,
  "type": "Convertible",
  "reg_no": "PAC-963",

  "owner" : {
  "fname": "Maddie",
  "sname": "Beran",
  "phone": "9318286008"
  }
}, {
  "make": "Mazda",
  "model": "RX-8",
  "year": 2008,
  "type": "Sedan",
  "reg_no": "SSC-448",
  
  "owner" : { "fname": "Derwin",
  "sname": "Stoyle",
  "phone": "2173749998"}
}, {
  "make": "Honda",
  "model": "Ridgeline",
  "year": 2007,
  "type": "Crossover",
  "reg_no": "SKB-446",
  
  "owner" : { "fname": "Fidelity",
  "sname": "Harewood",
  "phone": "3011230578"}
}, {
  "make": "Ford",
  "model": "E250",
  "year": 2010,
  "type": "Convertible",
  "reg_no": "SBT-832", 

  "owner" : { "fname": "Laverna",
  "sname": "Grocutt",
  "phone": "6817263282"}
}, {
  "make": "Kia",
  "model": "Rio",
  "year": 2012,
  "type": "Coupe",
  "reg_no": "SSV-902",

  "owner" : { "fname": "Nathanael",
  "sname": "Sollitt",
  "phone": "1095439264"}
}, {
    "make": "Mazda",
    "model": "RX-8",
    "year": 2008,
    "type": "SUV",
    "reg_no": "LDS-117",

    "owner" : { "fname": "Birgitta",
    "sname": "Pemberton",
    "phone": "6745446665"}
}, {
    "make": "Subaru",
    "model": "Impreza",
    "year": 2003,
    "type": "Hatchback",
    "reg_no": "CYA-495",

    "owner" : { "fname": "Rozelle",
    "sname": "Whitcher",
    "phone": "9834981471"}
}, {
    "make": "Suzuki",
    "model": "Sidekick",
    "year": 1996,
    "type": "Sedan",
    "reg_no": "HSH-544",

    "owner" : { "fname": "Keith",
    "sname": "Daughtrey",
    "phone": "8453444599"}
}, {
    "make": "Porsche",
    "model": "928",
    "year": 1993,
    "type": "Coupe",
    "reg_no": "KRH-885",

    "owner" : { "fname": "Natalina",
    "sname": "Hadleigh",
    "phone": "6226934086"}
    }, {
    "make": "Dodge",
    "model": "Ram 2500 Club",
    "year": 1995,
    "type": "Coupe",
    "reg_no": "KSC-416",

    "owner" : { "fname": "Arly",
    "sname": "Hartill",
    "phone": "6246961044"}
    }, {
    "make": "Chevrolet",
    "model": "Express 2500",
    "year": 2000,
    "type": "Hatchback",
    "reg_no": "KRN-461",

    "owner" : { "fname": "Jessika",
    "sname": "Hercules",
    "phone": "9573898491"}
    }, {
    "make": "GMC",
    "model": "Vandura 1500",
    "year": 1994,
    "type": "Hatchback",
    "reg_no": "CGG-221",

    "owner" : { "fname": "Stavro",
    "sname": "Uzielli",
    "phone": "2612370436"}
    }, {
    "make": "Ford",
    "model": "Galaxie",
    "year": 1966,
    "type": "Convertible",
    "reg_no": "SAW-762",

    "owner" : { "fname": "Faydra",
    "sname": "Upham",
    "phone": "7377900907"}
    }, {
    "make": "Lincoln",
    "model": "Mark VIII",
    "year": 1997,
    "type": "Sedan",
    "reg_no": "TVS-102",

    "owner" : { "fname": "Maggee",
    "sname": "Lavington",
    "phone": "2765542275"}
    }, {
    "make": "Mercedes-Benz",
    "model": "SLK-Class",
    "year": 1998,
    "type": "Convertible",
    "reg_no": "PWA-609",

    "owner" : { "fname": "Abra",
    "sname": "Hallybone",
    "phone": "3212363044"}
    }, {
    "make": "Ford",
    "model": "ZX2",
    "year": 2002,
    "type": "SUV",
    "reg_no": "WPD-176",

    "owner" : { "fname": "Forrester",
    "sname": "Camplejohn",
    "phone": "5505491851"}
    }, {
    "make": "Audi",
    "model": "Cabriolet",
    "year": 1997,
    "type": "Sedan",
    "reg_no": "KFS-928",

    "owner" : { "fname": "Roselle",
    "sname": "Kleinfeld",
    "phone": "2647759701"}
    }, {
    "make": "Toyota",
    "model": "Xtra",
    "year": 1993,
    "type": "SUV",
    "reg_no": "YOU-455",

    "owner" : { "fname": "Patty",
    "sname": "Connal",
    "phone": "2945834907"}
    }, {
    "make": "Oldsmobile",
    "model": "88",
    "year": 1996,
    "type": "Sedan",
    "reg_no": "WBG-844",

    "owner" : { "fname": "Sutherlan",
    "sname": "Noir",
    "phone": "9968839554"}
    }, {
    "make": "Ford",
    "model": "Aspire",
    "year": 1995,
    "type": "Hatchback",
    "reg_no": "YKP-84",

    "owner" : { "fname": "Murdoch",
    "sname": "Radish",
    "phone": "5195416615"}
 }, {
    "make": "Ford",
    "model": "Festiva",
    "year": 1992,
    "type": "SUV",
    "reg_no": "SAV-495",

    "owner" : { "fname": "Dillie",
    "sname": "Durber",
    "phone": "7141356942"}
    }, {
    "make": "Infiniti",
    "model": "IPL G",
    "year": 2011,
    "type": "Coupe",
    "reg_no": "KAY-219",

    "owner" : { "fname": "Rene",
    "sname": "Sedcole",
    "phone": "9175014267"}
    }, {
    "make": "Ford",
    "model": "Econoline E150",
    "year": 2000,
    "type": "SUV",
    "reg_no": "KCO-510",

    "owner" : { "fname": "Angelita",
    "sname": "Ganiclef",
    "phone": "4969509871"}
    }, {
    "make": "Chevrolet",
    "model": "Sportvan G20",
    "year": 1994,
    "type": "SUV",
    "reg_no": "YHA-448",

    "owner" : { "fname": "Barbaraanne",
    "sname": "Rugieri",
    "phone": "7718375409"}
    }, {
      "make": "Lincoln",
      "model": "MKZ",
      "year": 2007,
      "type": "Coupe",
      "reg_no": "KRK-689",
      "owner" : { "fname": "Munroe",
      "sname": "Fortoun",
      "phone": "7321643198"}
}, {
    "make": "Audi",
    "model": "R8",
    "year": 2008,
    "type": "Hatchback",
    "reg_no": "KOX-780",
    "owner" : { "fname": "Kane",
    "sname": "Kelinge",
    "phone": "2836917419"}
}, {
    "make": "Toyota",
    "model": "Paseo",
    "year": 1997,
    "type": "SUV",
    "reg_no": "OSA-484",
    "owner" : { "fname": "Bertie",
    "sname": "Feacham",
    "phone": "3962717123"}
}, {
    "make": "Dodge",
    "model": "Omni",
    "year": 1978,
    "type": "Convertible",
    "reg_no": "ZLJ-796",
    "owner" : { "fname": "Thibaud",
    "sname": "Treherne",
    "phone": "5958460551"}
}, {
    "make": "Lamborghini",
    "model": "Gallardo",
    "year": 2003,
    "type": "Hatchback",
    "reg_no": "SBG-127",
    "owner" : { "fname": "Loleta",
    "sname": "Scottrell",
    "phone": "9411277289"}
}, {
    "make": "Volvo",
    "model": "S80",
    "year": 2010,
    "type": "Hatchback",
    "reg_no": "CAE-597",
    "owner" : { "fname": "Charla",
    "sname": "Wiley",
    "phone": "7737755109"}
}, {
    "make": "Volkswagen",
    "model": "Passat",
    "year": 1996,
    "type": "Crossover",
    "reg_no": "KOM-818",
    "owner" : { "fname": "Daniel",
    "sname": "Greenroad",
    "phone": "1305710297"}
}, {
    "make": "Oldsmobile",
    "model": "Intrigue",
    "year": 2001,
    "type": "Crossover",
    "reg_no": "AYB-320",
    "owner" : { "fname": "Allen",
    "sname": "Ireland",
    "phone": "9993380172"}
}, {
    "make": "Hyundai",
    "model": "Genesis Coupe",
    "year": 2013,
    "type": "Sedan",
    "reg_no": "CYD-604",
    
    "owner" : { "fname": "Chrissy",
    "sname": "Ledamun",
    "phone": "4268633418"}
}, {
    "make": "Acura",
    "model": "TL",
    "year": 2011,
    "type": "Convertible",
    "reg_no": "YCU-376",

    "owner" : { "fname": "Leupold",
    "sname": "Cumber",
    "phone": "4955032730"}
}, {
  "make": "Lexus",
  "model": "ES",
  "year": 1991,
  "type": "SUV",
  "reg_no": "SVP-366",

  "owner" : { "fname": "Sibyl",
  "sname": "Hinks",
  "phone": "5421733298"}
}, 


{
  "make": "Holden",
  "model": "VS Commodore",
  "year": 1996,
  "type": "Sedan",
  "reg_no": "VTU-66", 

  "owner" : { "fname": "Thibaud",
  "sname": "Treherne",
  "phone": "5958460551"}
}, {
  "make": "Saab",
  "model": "9-5",
  "year": 2005,
  "type": "SUV",
  "reg_no": "KG-171",

  "owner" : { "fname": "Bertie",
  "sname": "Feacham",
  "phone": "3962717123"}
}, {
    "make": "Mazda",
    "model": "B-Series",
    "year": 1999,
    "type": "SUV",
    "reg_no": "LIC-76" ,

    "owner" : { "fname": "Charla",
    "sname": "Wiley",
    "phone": "7737755109"}
  }, {
    "make": "Dodge",
    "model": "Viper",
    "year": 1992,
    "type": "Sedan",
    "reg_no": "AYN-618",
    
    "owner" : { "fname": "Leupold",
    "sname": "Cumber",
    "phone": "4955032730"}
}, {
    "make": "GMC",
    "model": "Yukon",
    "year": 1998,
    "type": "Crossover",
    "reg_no": "NTG-978",
    
    "owner" : { "fname": "Sibyl",
    "sname": "Hinks",
    "phone": "5421733298"}
}]

//#endregion

// #region Hylkäysperusteet ja korjauskehotukset
// Näissä muuttujissa pohjustettu hylkäysperusteita ja mahdollisia korjauskehotuksia, ei tietenkään sisällä kaikkia mahdollisia, mutta ihan riittävästi
const failingReasons = ["Hylätty: Muut laitteet ja varusteet, Voimansiirto, (6.1.7) Kardiaaniakselin nivel, Välyksellinen, Edessä.",
"Hylätty: Akselistot, pyörät ja jousitus, Etuakselisto, (5.1.3) Etupyörän laakerointi, Epämääräinen tai asiaankuulumaton ääni, Vasemmalla.",
"Hylätty: Alusta ja kori, Alustan kotelot ja pohjalevy, (6.1.1) Pyörän kotelo, Ruostevaurioitunut, Vasemmalla edessä, Iskarin iskarin vierestä ja joustintuen torni ylhäällä, ulkoreuna.",
"Hylätty: Alusta ja kori, Alustan kotelot ja pohjalevy, (6.1.1) Helmakotelo, Ruostevaurioitunut, Vasemmalla ja oikealla.",
"Hylätty: Alusta ja kori, Alustan kotelot ja pohjalevy, (6.1.1) Alustan poikittaiskotelo, Ruostevaurioitunut, Vasemmalla ja oikealla.",
"Hylätty: Akselistot, pyörät ja jousitus, Etuakselisto, (5.1.3) Etupyörän laakerointi, Välyksellinen, Vasemmalla.",
"Hylätty: Jarrujärjestelmät, Käyttöjarrun dynamometritesti, (1.2) Takajarru, Laahaa, tarkasta myös seisontajarru, Takana vas. ja oik.",
"Hylätty: Akselistot, pyörät ja jousitus, Etuakselisto, (5.3), Alatukivarren pallonivel, Välyksellinen, Edessä.",
"Hylätty: Ohjauslaitteet, Ohjausnivelet ja -tangot, (2.1.3) Rengas, Kudosvaurio, rikkoutumisvaara, Oikealla takana.",
"Hylätty: Ohjauslaitteet, Ohjausnivelet ja -tangot, (4.1.1) Ajovaloumpio, Samentunut, Vasemmalla ja oikealla.",
"Hylätty: Alusta ja kori, Runko, (6.1.1) Poikittainen runkopalkki, Ruostevaurioitunut, vasemmalla.",
"Hylätty: Ympäristöhaitat, pakokaasupäästöt, CO-pitoisuus yli 6%.",
"Hylätty: Ympäristöhaitat, Moottorio ja apuolaitteet, (15.2) Jatkuva runsas savutus.",
"Hylätty: Ympäristöhaitat, Melu (15.3) Liian voimakas äänitaso.",
"Hylätty: Ympäristöhaitat, Öljy- ja nestevuodot (15.5) Öljypohja, öljyinen.",
"Hylätty: Alusta ja ohjaus, Pakoputkisto (6.1.2), Vaadittava katalysaattori puuttuu."]


const suggestions = [
"Korjauskehotus: Koeajo ja näkyvyys, Näkökenttä, Riipuke poistettava näkökentästä, Edessä. ",
"Korjauskehotus: Koeajo ja näkyvyys, Korin sisustus, Verhoilu epäsiisti, Takana, koirankarvaa. ",
"Korjauskehotus: Valaisimet ja sähkölaitteet, Lähivalo, Lähivalon kuvio, Valokuvio epäselvä, Vasemmalla edessä. ",
"Korjauskehotus: Valaisimet ja sähkölaitteet, Lähivalo, Lähivalon lasi, Vaurioitunut, Vasemmalla, Samentunut lasi. ",
"Korjauskehotus: Alusta ja kori, Pakoputkisto, Pakoputkiston liitos, Vuotaa, Takana, Lemmarin panta poikki. ",
"Korjauskehotus: Valaisimet ja sähkölaitteet, Jarruvalo, Jarruvalo, Ei toimi, Oikealla takana. ",
"Korjauskehotus: Akselistot, pyörät ja jousitus, Etuakselisto, Kallistuksen vakaajan kiinnitys, Välyksellinen, Edessä oikealla, Kumihelat vaurioitunut. ",
"Korjauskehotus: Koeajo ja näkyvyys, Korin sisustus, Sisätila epäsiisti, kissoja takapenkillä. ",
];
// #endregion

// Muutama muuttuuja tässä, joita käytetään myöhemmin mm. indeksin määrittämiseen ja korjauspajan määrittämiseen (satunnaisesti)
let i = 0;
const addresses = ["Koivupurontie 10", "Lehtikorva 22", "Juuttaanmäentie 19"]


checkups.forEach(item => {

  // Muutamat muuttujat tähän alkuun satunnaistamista varten
    let fail = Math.floor(Math.random() * failingReasons.length)
    let pass = Math.floor(Math.random() * suggestions.length)
    let iterations = Math.floor(Math.random() * 4)
    let addressRandomizer = Math.floor(Math.random() * addresses.length)
    
    //Tässä vaan oikeastaan tarkistetaan mihin kaupunkiin paja kuuluu - saadaan aika helposti em. listan avulla
    item.shops.address = addresses[addressRandomizer];
    if(addressRandomizer == 0) item.shops.city = "Jyväskylä";
    if(addressRandomizer == 1) item.shops.city = "Turku";
    if(addressRandomizer == 2) item.shops.city = "Tohmajärvi";
    
    //Jos katsastus on tosi tai null ja korjaus on epätosi tai null, niin otetaan automaattisesti katasastukseksi
    if(item.inspection == true || item.inspection == null && item.repair == false || item.repair == null){
        item.cost = 100.0
        item.inspection = true
        item.repair = false
    }

    //jos katsastus ja korjaus ovat epätosia tai null-arvoisia ja tapahtuman hinta kuitenkin yli 100 euroa, on oltava kyseessä korjaus
    if (item.inspection == false || item.inspection == null && item.repair == false || item.repair == null && item.cost > 100 ){
        item.repair = true
        delete item.inspection_result
        delete item.details
        item.inspection = false
    }

    // Jos tultu vain korjaukseen poistellaan kenttiä
    if(item.repair == true && item.inspection == false || item.inspection == null){
      delete item.inspection_result
      delete item.details
      item.inspection = false
    }

    // Jos Katsastuksen tulos on hylätty, kerrotaan syyt hylkäykselle (joskus näitä voi olla enemmän kuin yksi, siksi vielä silmukka)
    if (item.inspection == true && item.inspection_result == "Fail"){
        item.details = ""
        for(let i =0; i <= iterations; i++) {
        fail = Math.floor(Math.random() * failingReasons.length)
        item.details += failingReasons[fail] + " "
        }
    }

    // Käytännössä sama ideologia, kuin ylemässä, mutta nyt annetaan korjauskehotus (joita näitäkin voi olla useampi.)
    if(item.inspection == true && item.inspection_result == "Pass"){
        for(let i = 0; i <= iterations; i++){
          pass = Math.floor(Math.random() * suggestions.length)
        item.details = suggestions[pass]
        }
    }
    // Tässä vielä tarkastetaan, että ei mennä yli tietokannassa olevien ajoneuvojen lukumäärästä
    // samalla saadaan realistisempaa dataa, kun autoilla voi olla useampiakin katsastuksia/korjauksia 
    if (vehicle.length - i == 0){
      i = 0
    }

    // Tässä vielä yhdistetään autot tähän JS-objektiin
    item.vehicles.reg_no = vehicle[i].reg_no
    item.vehicles.make = vehicle[i].make
    item.vehicles.model = vehicle[i].model
    i++;
})


// Jaa täällä siis vaan enää näiden tietojen lisääminen tietokantaan
for(let ins = 0; ins < checkups.length; ins++){
  db.checkups.insertOne(checkups[ins])
}

// Tässä asetetaan jokaiseen katsastus-/korjaustapahtumaan sen suorittaneen mekaanikon _id.
let empArray = db.employees.find({role: "Mechanic"}, {_id: true}).toArray();
let iteration = 0;
db.checkups.find().forEach(check => {
if(empArray.length - iteration == 0){iteration = 0}
db.checkups.updateOne({_id: check._id}, {$set: {employee_id: empArray[iteration]}})
iteration++;
})

//#endregion

// #region uudet-työntekijät

// Luodaan kokoelma uusille työntekijöille
db.createCollection("new_hires", {capped:true, size: 10000, max: 10})

//Etsitään viimeisimmäksi aloittaneet (huomioidaan myös mahdollisesti lopettaneet työntekijät)
let newbies = db.employees.find({}, {_id: 1}).sort({start_date: -1}).limit(10)

//Huom tässä viedään vaan uusien työntekijöijöiden _id-tunnisteet
newbies.forEach(newbie => {
    db.new_hires.insertOne(newbie) 
});

// Koska täällä lisäämme $merge- ja $project-operaattorien avulla halutun datan tietokantaan 
db.employees.aggregate([
    {$project: {fname: 1, sname: 1, role: 1, start_date: 1}},
    {$merge: {into: "new_hires", on: "_id", whenMatched: "merge"}}
])
//#endregion

