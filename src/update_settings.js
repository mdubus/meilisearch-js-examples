const { MeiliSearch } = require("meilisearch");
const config = require("../config.json")[process.env.MS_ENV];

const client = new MeiliSearch({
  host: config.host,
  apiKey: config.apiKey,
});

const update_settings = async () => {
  const uid = config.indexName;
  const settings = {
    rankingRules: [
      "typo",
      "words",
      "proximity",
      "attribute",
      "exactness",
      "desc(release_date)",
      "desc(rank)",
    ],
    distinctAttribute: "movie_id",
    searchableAttributes: ["title", "description", "genre"],
    displayedAttributes: ["title", "description", "genre", "release_date"],
    stopWords: ["the", "a", "an"],
    synonyms: {
      wolverine: ["xmen", "logan"],
      logan: ["wolverine"],
    },
  };

  const index = await client.getIndex(uid);
  const { updateId } = await index.updateSettings(settings);
  const res = await index.getUpdateStatus(updateId);

  console.log(res);
};

update_settings();
