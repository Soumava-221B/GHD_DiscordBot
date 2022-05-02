// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.1'].messages.create({
  channel_id: `${context.params.event.channel_id}`,
  content: `https://pbs.twimg.com/profile_images/1460982908525559809/qLJ7lUza_400x400.jpg`
});