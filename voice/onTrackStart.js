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
{button:Previous:primary:previous:false:$getVar[music2_emoji]}
    {button:Next:primary:skip:false:$getVar[music2_emoji]}

    }
    {actionRow:
        {button:Loop:secondary:loop:false:$getVar[music2_emoji]}
        {button:Pause&Play:secondary:play_pause:false:$getVar[music2_emoji]}}
    {actionRow:
    {button:Auto Play:danger:auto:false:$getVar[music_emoji]}
    {button:Stop:danger:stop:false:$getVar[no_emoji]}}
        {actionRow:
  {button:Volume Down:success:volume-down:false:$getVar[vl_up_emoji]}
  {button:Volume Up:success:volume-up:false:$getVar[vl_down_emoji]}};true]]
$suppressErrors
$volume[$getVar[volume]]
$setUserVar[play_pause;none;$authorID]
$wait[4s]
    `
}