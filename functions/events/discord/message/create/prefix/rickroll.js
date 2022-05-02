// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.1'].messages.create({
  channel_id: `${context.params.event.channel_id}`,
  content: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
});