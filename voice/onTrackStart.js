module.exports = {
    type: "trackStart",
    channel: "$channelID",
    code: `
  
  $loop[$math[$songInfo[duration]/4000];{"msgID": "$get[id]", "channelID": "$channelID"};updatesonginfo]
  $wait[2s]
  $let[id;$sendMessage[{newEmbed:{author:Now Playing}{title:$songInfo[title]}{description: $songInfo[description]}{description:
  
    > 🎵 **Artist:**$songInfo[artist]
   
    > 🎵 **Duration:$digitalFormat[$getCurrentTrackDuration]/$digitalformat[$songInfo[duration]]**
  
    > 🎵 **Volume:**$volume
  
    > 🎵 **Url:** $songInfo[url]
  
    > 🎵 **Requested By:** $songInfo[requester]
  }{image:$songInfo[thumbnail]}{color:Green}};true]]
  $suppressErrors
  $volume[100]
      `
  }