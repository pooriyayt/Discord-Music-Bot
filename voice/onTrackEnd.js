module.exports = {
    type: "trackEnd",
    channel: "$channelID",
    code: `
  $deleteMessage[$getGuildVar[music_player];$getGuildVar[music_channelID]]
  $onlyIf[$channelExists[$getGuildVar[music_channelID]]==true;]
  $onlyIf[$messageExists[$getGuildVar[music_player]]==true;]
  
  $title[<a:music:993033903180877854>  آهنگ به اتمام رسید <a:music:993033903180877854> ]
  $color[Green]

      `
  }