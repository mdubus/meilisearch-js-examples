const { MeiliSearch } = require("meilisearch");
const config = require("../config.json")[process.env.MS_ENV];

const client = new MeiliSearch({
  host: config.host,
  apiKey: config.apiKey,
});

const get_raw_info = async () => {
  const uid = config.indexName;

  const index = await client.getIndex(uid);
  const res = await index.getRawInfo();
  console.log(res);
};

get_raw_info();
