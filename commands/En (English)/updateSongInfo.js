module.exports  =  [{
    name:  "updatesonginfo",
    type:  "awaited",
    $if: "old",
    code:  `
    $editMessage[$awaitData[msgID];{newEmbed:{author:Now  Playing}{title:$songInfo[title]}{description:
    
    >  🎵  **Artist: **$songInfo[artist]
  
    >  🎵  **Duration: $digitalFormat[$getCurrentTrackDuration]/$digitalformat[$songInfo[duration]]**
    
    >  🎵  **Volume:** $volume
    
    >  🎵  **Url:**  $songInfo[url]
    
    >  🎵  **Requested  By:**  $songInfo[requester]
    
    >  🎵  **Veiws:**  $songInfo[views]
    
    >  🎵  **Platform:**  $songInfo[formatedPlatforms]

    >  🎵 **AutoPlay:** $if[$getGuildVar[autoplay]==false]❌$else✅$endif
    
    }{image:$songInfo[thumbnail]}{color:$getVar[color]}};$awaitData[channelID]]
    $wait[4s]
    $setGuildVar[music_channelID;$awaitData[channelID]]
    $setGuildVar[music_player;$awaitData[msgID]]
    $onlyIf[$messageExists[$awaitData[msgID];$awaitData[channelID]]==true;]`
}]