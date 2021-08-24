const { MeiliSearch } = require("meilisearch");
const config = require("../config.json")[process.env.MS_ENV];

const client = new MeiliSearch({
  host: config.host,
  apiKey: config.apiKey,
});

const delete_index = async () => {
  const res = await client.deleteIndex(config.indexName);
  console.log(res);
};

delete_index();
