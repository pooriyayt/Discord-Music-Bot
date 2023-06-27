module.exports = {
    type: "trackStart",
    channel: "$channelID",
    code: `
      $setGuildVar[music_channelID;$channelID]
      $setGuildVar[music_player;$get[id]]
  $wait[2s]
  $let[id;$sendMessage[{newEmbed:{author:Now Playing}{title:$songInfo[title]}{description: $songInfo[description]}{description:
  
      >  🎵  **Artist:** **$songInfo[artist]**
    
      >  🎵  **Duration:** **$replaceText[$digitalformat[$songInfo[duration]];00:0;;1]**
      
      >  🎵  **Volume:** **$volume** 
      
      >  🎵  **Url:** $songInfo[url]
      
      >  🎵  **Requested By:**  $songInfo[requester]
      
      >  🎵  **Veiws:** **$songInfo[views]** 
      
      >  🎵  **Platform:** **$songInfo[formatedPlatforms]**
  }{image:$songInfo[thumbnail]}{color:$getVar[color]}}  
  {actionRow:
  {button:Previous:primary:previous:false}
      {button:Next:primary:skip:false}
  
      }
      {actionRow:
          {button:Loop:secondary:loop:false}
          {button:Pause&Play:secondary:play_pause:false}}
      {actionRow:
      {button:Auto Play:danger:auto:false}
      {button:Stop:danger:stop:false}}
          {actionRow:
    {button:Volume Down:success:volume-down:false}
    {button:Volume Up:success:volume-up:false}};true]]
  $suppressErrors
  $volume[$getVar[volume]]
  $setUserVar[play_pause;none;$authorID]
  $wait[4s]
      `
  }