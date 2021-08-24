const { MeiliSearch } = require("meilisearch");
const config = require("../config.json")[process.env.MS_ENV];

const client = new MeiliSearch({
  host: config.host,
  apiKey: config.apiKey,
});

const fetch_primary_key = async () => {
  const uid = config.indexName;

  const index = await client.getIndex(uid);
  const res = await index.fetchPrimaryKey();
  console.log(res);
};

fetch_primary_key();
