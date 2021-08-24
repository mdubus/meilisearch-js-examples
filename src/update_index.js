const { MeiliSearch } = require("meilisearch");
const config = require("../config.json")[process.env.MS_ENV];

const client = new MeiliSearch({
  host: config.host,
  apiKey: config.apiKey,
});

const update_index = async () => {
  const uid = config.indexName;
  const options = {
    primaryKey: "id",
  };

  const index = await client.getIndex(uid);
  const res = await index.update(options);
  console.log(res);
};

update_index();
