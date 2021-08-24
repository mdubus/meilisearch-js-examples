const { MeiliSearch } = require("meilisearch");
const config = require("../config.json")[process.env.MS_ENV];

const client = new MeiliSearch({
  host: config.host,
  apiKey: config.apiKey,
});

const get_documents = async () => {
  const uid = config.indexName;
  const params = {
    offset: 0,
    limit: 21,
    attributesToRetrieve: '*'
  }

  const index = await client.getIndex(uid);
  const res = await index.getDocuments(params);
  console.log(res);
};

get_documents();
