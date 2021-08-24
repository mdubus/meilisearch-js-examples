const { MeiliSearch } = require("meilisearch");
const config = require("../config.json")[process.env.MS_ENV];

const client = new MeiliSearch({
  host: config.host,
  apiKey: config.apiKey,
});

const update_documents = async () => {
  const uid = config.indexName;
  const documents = [
    {
      id: 2,
      title: 'Ariel',
      overview: "Updated overview",
    }
  ]

  const index = await client.getIndex(uid);
  const res = await index.updateDocuments(documents);
  console.log(res);
};

update_documents();
