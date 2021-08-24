const { MeiliSearch } = require("meilisearch");
const config = require("../config.json")[process.env.MS_ENV];

const client = new MeiliSearch({
  host: config.host,
  apiKey: config.apiKey,
});

const reset_synonyms = async () => {
  const uid = config.indexName;
  const synonyms = {
    joker: ["batman"],
  };

  const index = await client.getIndex(uid);
  const res = await index.resetSynonyms(synonyms);
  console.log(res);
};

reset_synonyms();
