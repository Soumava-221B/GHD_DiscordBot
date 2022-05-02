// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let scheduleData = await lib.crawler.query['@0.0.3'].selectors({
  url: `https://globalhackweek.mlh.io/schedule`,
  headers: {
    'Accept': `*/*`,
    'User-Agent': `stdlib/crawler/query`,
    'Accept-Language': `en-US`
  },
  includeMetadata: false,
  selectorQueries: [
    {
      'selector': `.schedule-side-div`,
      'resolver': `text`
    }
  ]
});


let schedule = ""
for (let i = 0; i < scheduleData.queryResults[0].length; i++) {
  console.log(scheduleData.queryResults[0][i].text)
  schedule += `\n\n${scheduleData.queryResults[0][i].text}`
}

await lib.discord.channels['@0.3.0'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
  "tts": false,
  "embeds": [
    {
      "type": "rich",
      "title": `Schedule of Global Hack Week`,
      "description": schedule.substring(0, 4000),
      "color": 0x00FFFF
    }
  ]
});
