const { MeiliSearch } = require("meilisearch");
const config = require("../config.json")[process.env.MS_ENV];

const client = new MeiliSearch({
  host: config.host,
  apiKey: config.apiKey,
});

const delete_all_documents = async () => {
  const uid = config.indexName;

  const index = await client.getIndex(uid);
  const res = await index.deleteAllDocuments();
  console.log(res);
};

delete_all_documents();
