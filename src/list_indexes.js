const { MeiliSearch } = require("meilisearch");
const config = require("../config.json")[process.env.MS_ENV];

const client = new MeiliSearch({
  host: config.host,
  apiKey: config.apiKey,
});

const list_indexes = async () => {
  const res = await client.listIndexes();
  console.log(res);
};

list_indexes();
