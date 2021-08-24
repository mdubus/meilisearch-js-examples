const { MeiliSearch } = require("meilisearch");
const config = require("../config.json")[process.env.MS_ENV];

const client = new MeiliSearch({
  host: config.host,
  apiKey: config.apiKey,
});

const create_index = async () => {
  const uid = config.indexName;
  const options = {};

  const res = await client.createIndex(uid, options);
  console.log(res);
};

create_index();
