// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let challengeData = await lib.crawler.query['@0.0.3'].selectors({
  url: `https://globalhackweek.mlh.io/challenges`,
  headers: {
    'Accept': `*/*`,
    'User-Agent': `stdlib/crawler/query`,
    'Accept-Language': `en-US`
  },
  includeMetadata: false,
  selectorQueries: [
    {
      'selector': `.card-frame`,
      'resolver': `text`
    }
  ]
});


let challenges = ""
for (let i = 0; i < challengeData.queryResults[0].length; i++) {
  console.log(challengeData.queryResults[0][i].text)
  challenges += `\n\n${challengeData.queryResults[0][i].text}`
}

await lib.discord.channels['@0.3.0'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
  "tts": false,
  "embeds": [
    {
      "type": "rich",
      "title": `Today's Challenges`,
      "description": challenges.substring(0, 4000),
      "color": 0x00FFFF
    }
  ]
});

//console.log(challengeData.queryResults)