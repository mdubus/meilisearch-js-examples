const { MeiliSearch } = require("meilisearch");
const config = require("../config.json")[process.env.MS_ENV];
const documents = require(config.documents);

const client = new MeiliSearch({
  host: config.host,
  apiKey: config.apiKey,
});

const add_documents = async () => {
  const uid = config.indexName;

  const index = await client.getIndex(uid);
  const res = await index.addDocuments(documents);
  console.log({res});
  const update = await index.waitForPendingUpdate(res.updateId)
  console.log({update});
};

add_documents();
