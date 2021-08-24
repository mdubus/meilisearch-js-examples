const { MeiliSearch } = require("meilisearch");
const config = require("../config.json")[process.env.MS_ENV];

const client = new MeiliSearch({
  host: config.host,
  apiKey: config.apiKey,
});

const get_update_status = async () => {
  const uid = config.indexName;

  const index = await client.getIndex(uid);
  const res = await index.getUpdateStatus(config.updateStatus);
  console.log(res);
};

get_update_status();
