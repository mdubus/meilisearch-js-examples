const { MeiliSearch } = require("meilisearch");
const config = require("../config.json")[process.env.MS_ENV];

const client = new MeiliSearch({
  host: config.host,
  apiKey: config.apiKey,
});

const update_stop_words = async () => {
  const uid = config.indexName;
  const stopWords = ["and", "or"]

  const index = await client.getIndex(uid);
  const res = await index.updateStopWords(stopWords);
  console.log(res);
};

update_stop_words();
