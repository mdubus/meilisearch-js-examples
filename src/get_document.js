const { MeiliSearch } = require("meilisearch");
const config = require("../config.json")[process.env.MS_ENV];

const client = new MeiliSearch({
  host: config.host,
  apiKey: config.apiKey,
});

const get_document = async () => {
  const uid = config.indexName;
  const documentId = 1

  const index = await client.getIndex(uid);
  const res = await index.getDocument(documentId);
  console.log(res);
};

get_document();
