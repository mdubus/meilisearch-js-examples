const { MeiliSearch } = require("meilisearch");
const config = require("../config.json")[process.env.MS_ENV];

const client = new MeiliSearch({
  host: config.host,
  apiKey: config.apiKey,
});

const get_or_create_index = async () => {
  const uid = config.indexName;
  const options = {};

  const res = await client.getOrCreateIndex(uid, options);
  console.log(res);
};

get_or_create_index();
