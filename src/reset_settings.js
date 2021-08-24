const { MeiliSearch } = require("meilisearch");
const config = require("../config.json")[process.env.MS_ENV];

const client = new MeiliSearch({
  host: config.host,
  apiKey: config.apiKey,
});

const reset_settings = async () => {
  const uid = config.indexName;

  const index = await client.getIndex(uid);
  const { updateId } = await index.resetSettings();
  const res = await index.getUpdateStatus(updateId);

  console.log(res);
};

reset_settings();
