const { AoiClient } = require("aoi.js");

const client = new AoiClient({
  token: process.env.TOKEN,
  prefix: process.env.PREFIX,
  intents: ["Guilds", "GuildMessages", "MessageContent"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    tables: ["main"],
    path: "./database/",
    extraOptions: {
      dbType: "KeyValue",
    },
  },
});

 client.loadCommands("./commands/", true); //komutlar adında bir klasör açın ve kodları onun içind ekleyin. 
