import axios from "axios";

import dotenv from "dotenv";

dotenv.config();

const options = {
  headers: {
    "app_id": process.env.APP_ID,
    "app_key": process.env.APP_KEY,
  },
};

const response = await axios.get(
  "https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/" +
    process.argv[2],
  options
);

// console.log(
//   response.data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0]
// );

response.data.results[0].lexicalEntries[0].entries[0].senses.forEach(
  (item, i) => console.log(i + 1, ":", item.definitions[0])
);

console.log(response.data.metadata.provider);
