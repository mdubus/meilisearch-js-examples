const { MeiliSearch } = require("meilisearch");

const config = require("../config.json")[process.env.MS_ENV];
const folder = config.folder;

const fs = require("fs");

const client = new MeiliSearch({
  host: config.host,
  apiKey: config.apiKey,
});

const add_documents = async () => {
  try {
    const uid = config.indexName;
    const index = await client.getIndex(uid);
    fs.readdir(folder, async (err, files) => {
      await files.forEach(async (file) => {
          const documents = fs.readFileSync(`${folder}${file}`);
          const res = await index.addDocuments(JSON.parse(documents));
          console.log({ res });
      });
    });
  } catch (e) {
    console.log(e);
  }
};

add_documents();
