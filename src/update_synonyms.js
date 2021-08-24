const { MeiliSearch } = require("meilisearch");
const config = require("../config.json")[process.env.MS_ENV];

const client = new MeiliSearch({
  host: config.host,
  apiKey: config.apiKey,
});

const update_synonyms = async () => {
  const uid = config.indexName;
  const synonyms = {
    joker: ["batman"],
    batman: ["joker"],
  };

  const index = await client.getIndex(uid);
  const res = await index.updateSynonyms(synonyms);
  console.log(res);
};

update_synonyms();
