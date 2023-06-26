module.exports = {
    type: "trackStart",
    channel: "$channelID",
    code: `
    $setGuildVar[music_channelID;$channelID]
    $setGuildVar[music_player;$get[id]]
   $wait[2s]
  $let[id;$sendMessage[{newEmbed:{author:Now Playing}{title:$songInfo[title]}{description: $songInfo[description]}{description:
  
    >  🎵  **Artist:** **$songInfo[artist]**
  
    >  🎵  **Duration:** **$digitalformat[$songInfo[duration]]**
    
    >  🎵  **Volume:** **$volume**
    
    >  🎵  **Url:** **$songInfo[url]**
    
    >  🎵  **Requested By:**  **$songInfo[requester]**
    
    >  🎵  **Veiws:** **$songInfo[views]**
    
    >  🎵  **Platform:** **$songInfo[formatedPlatforms]**

  }{image:$songInfo[thumbnail]}{color: $getVar[color]}};true]]
  $suppressErrors
  $volume[100]
  $wait[4s]
      `
  }