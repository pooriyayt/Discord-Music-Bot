/*
Made By Wild Life Studio | ! ᜴💍|𝓹𝓸𝓸𝓻𝓲𝔂𝓪.𝔂𝓽𖧞༆❦#3333

discord.gg/tehran | discord.gg/8R8EUhBbyt

*/
const { LoadCommands, AoiClient } = require("aoi.js");
const { Manager } = require("@akarui/aoi.music");
const keepAlive = require(`./server`);
const { Util } = require('aoi.js');
const {
  AoiVoice,
  PlayerEvents,
  PluginName,
  Cacher,
  Filter,
} = require(`@akarui/aoi.music`);


const bot = new AoiClient({
  token: "Your Bot Token Here",
  prefix: "#",
  intents: ["MessageContent", "Guilds", "GuildMessages", "GuildVoiceStates"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("aoi.db"),
    tables: ["main"],
    path: "./database/",
    extraOptions: {
      dbType: "KeyValue"
    }

  },

  suppressAllErrors: true

})
const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./commands/")
require('./variables/variables')(bot);
const voice = new AoiVoice(bot, {
  requestOptions: {
    offsetTimeout: 0,
    soundcloudLikeTrackLimit: 200,
  },
  searchOptions: {
    soundcloudClientId: "Your SoundCloud Id Here",

  },

});
loader.load(voice.cmds, "./voice/")
voice.bindExecutor(bot.functionManager.interpreter);
voice.addEvent(PlayerEvents.TRACK_START);
voice.addEvent(PlayerEvents.TRACK_END);
voice.addEvent(PlayerEvents.QUEUE_END);
voice.addEvent(PlayerEvents.QUEUE_START);
voice.addEvent(PlayerEvents.AUDIO_ERROR);
voice.addEvent(PlayerEvents.TRACK_PAUSE);
voice.addEvent(PlayerEvents.TRACK_RESUME);
voice.addPlugin(PluginName.Cacher, new Cacher("disk" /* or "memory" */));
voice.addPlugin(PluginName.Filter, new Filter({
  filterFromStart: false,
}));

bot.status({
  status: "idle",
  text: "Made By Wild Life Studio With 💖&☕",
  type: "WATCHING",
  time: 12
})

/*
bot.status({
  status: "idle",
  text: "$membersCount[Your Server Id Here] Members🍂",
  type: "WATCHING",
  time: 12
})
*/
const { Panel } = require("@akarui/aoi.panel")

const panel = new Panel({
  username: "User Name Here",//username for logging in
  password: "Password Here",//password for logging in
  secret: "$randomString[20]",//session secret

  port: 3000,//port on which website is hosted, Not required! Default 3000
  bot: bot,//your aoi.js client
  mainFile: "index.js",//Main file where code is running.Not required, default taken from package.json
  version: "v6",
  type: "aoi",
  theme: "blue-grey",//panel & dashboard theme
  codetheme: "erlang-dark",//code editor theme
  /* FOR MORE THEMES AND CODE EDITOR THEMES, READ ABOUTH THE PANEL CLASS, IN THE DOCS */
  commands: "commands"// folder name in which all the edit needing files are there
})
panel.loadPanel()//Load The Panel

panel.onError()//Will detect errors, and send it to aoi.panel's error page
