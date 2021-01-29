const gplay = require("google-play-scraper");
const ObjectsToCsv = require("objects-to-csv");
const IDS = require('./APP-ID');

console.log(`=================================================`);
console.log(`Beginning to crawl`);
console.log(`=================================================`);

const idPromise = IDS.map((appId) => gplay.app({ appId }));

Promise.all(idPromise).then((values) => {
    const csv = new ObjectsToCsv(values);
    csv.toDisk("./crawled-data.csv").then(() => console.log(`File written`));
});
