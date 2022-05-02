// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.1'].messages.create({
  channel_id: `${context.params.event.channel_id}`,
  content: `Hello and welcome to my server, feel free to rome around and discover chanel. Grab a coffee and lets get Cracking`
});