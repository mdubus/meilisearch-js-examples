const { MeiliSearch } = require("meilisearch");
const config = require("../config.json")[process.env.MS_ENV];

const client = new MeiliSearch({
  host: config.host,
  apiKey: config.apiKey,
});

const delete_document = async () => {
  const uid = config.indexName;
  const documentId = 1

  const index = await client.getIndex(uid);
  const res = await index.deleteDocument(documentId);
  console.log(res);
};

delete_document();
