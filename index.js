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
  token: "OTgyMjEwMDIyNDkyNzMzNTIx.GVKl5w.mbdRizQd_gKnOPhOeoTuQwmazta9Ju6ccSvfmE",
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
