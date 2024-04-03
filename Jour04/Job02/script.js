function jsonValueKey(jsonString, key) {
    try {
      let parsedJson = JSON.parse(jsonString);
      return parsedJson[key];
    } catch (e) {
      console.error("Erreur de parsing JSON :", e);
      
      return undefined;
    }
  }
  
 
  let jsonString = `{
    "name": "La Plateforme_",
    "address": "8 rue d'hozier",
    "city": "Marseille",
    "nb_staff": "11",
    "creation": "2019"
  }`;
  
  
  console.log(jsonValueKey(jsonString, "city")); 