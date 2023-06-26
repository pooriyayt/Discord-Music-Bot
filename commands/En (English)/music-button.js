module.exports = [{
    name: "loop",
    type: "interaction",
    prototype: "button",
    $if: "old",
    code: `
     $if[$getUserVar[loop]==none]
      $setUserVar[loop;song]
      $loopMode[song]
    $interactionReply[;{newEmbed: {description: Music Loop Enabled $getVar[yes_emoji]} {color: $getVar[color]}};;;everyone;false]
    $endif
    $if[$getUserVar[loop]==song]
     $setUserVar[loop;queue]
      $loopMode[queue]
    $interactionReply[;{newEmbed: {description: Queue Loop Enabled $getVar[yes_emoji]} {color: $getVar[color]}};;;everyone;false]
    $endif
    $if[$getUserVar[loop]==queue]
    $setUserVar[loop;none]
      $loopMode[none]
    $interactionReply[;{newEmbed: {description: Music Loop DIsabled $getVar[yes_emoji]} {color: $getVar[color]}};;;everyone;false]
    $endif
    $onlyIf[$authorID==$getGuildVar[authorbutton];You Are Not The Author of This Button 🎵  {options:{ephemeral:true}}{extraOptions:{interaction:true}}]
    `
  },
  {
    name: "stop",
    type: "interaction",
    prototype: "button",
    code: `
      $stopTrack
    $interactionReply[;{newEmbed: {description: Music Stoped $getVar[yes_emoji]} {color: $getVar[color]}};;;everyone;false]
    $onlyIf[$authorID==$getGuildVar[authorbutton];You Are Not The Author of This Button 🎵  {options:{ephemeral:true}}{extraOptions:{interaction:true}}]`
  },
  {
    name: "play_pause",
    type: "interaction",
    prototype: "button",
    $if: "old",
    code: `
    $if[$getUserVar[play_pause]==none]
    $setUserVar[play_pause;pause]
    $pauseTrack
    $interactionReply[;{newEmbed: {description: Music Paused $getVar[yes_emoji]} {color: $getVar[color]}};;;everyone;false]
    $endif
    $if[$getUserVar[play_pause]==pause]
    $setUserVar[play_pause;none]
    $resumeTrack
    $interactionReply[;{newEmbed: {description: Music Resumed $getVar[yes_emoji]} {color: $getVar[color]}};;;everyone;false]
    $endif
    $onlyIf[$authorID==$getGuildVar[authorbutton];You Are Not The Author of This Button 🎵  {options:{ephemeral:true}}{extraOptions:{interaction:true}}]
    `
  },
  {
    name: "previous",
    type: "interaction",
    prototype: "button",
    code: `$playPreviousTrack
    $interactionReply[;{newEmbed: {description: Previous Music Played $getVar[yes_emoji]} {color: $getVar[color]}};;;everyone;false]
    $onlyIf[$authorID==$getGuildVar[authorbutton];You Are Not The Author of This Button 🎵  {options:{ephemeral:true}}{extraOptions:{interaction:true}}]
    
    
    `
  },
  {
    name: "auto",
    type: "interaction",
    prototype: "button",
    $if: "old",
    code: `
      $if[$getUserVar[autoplay]==false]
      $setUserVar[autoplay;true]
      $autoplay[relative]
    $interactionReply[;{newEmbed: {description: Auto Play Enabled $getVar[yes_emoji]} {color: $getVar[color]}};;;everyone;false]
    $endif
      $if[$getUserVar[autoplay]==true]
      $setUserVar[autoplay;false]
      $autoplay[none]
    $interactionReply[;{newEmbed: {description:  Auto Play Disabled $getVar[yes_emoji]} {color: $getVar[color]}};;;everyone;false]
    $endif
      $onlyIf[$authorID==$getGuildVar[authorbutton];You Are Not The Author of This Button 🎵  {options:{ephemeral:true}}{extraOptions:{interaction:true}}]
    `
  },
  {
    name: "skip",
    type: "interaction",
    prototype: "button",
    code: `$skipTrack
    $interactionReply[;{newEmbed: {description: Skiped This Music $getVar[yes_emoji]} {color: $getVar[color]}};;;everyone;false]
    $onlyIf[$authorID==$getGuildVar[authorbutton];You Are Not The Author of This Button 🎵  {options:{ephemeral:true}}{extraOptions:{interaction:true}}]
    
    `
  },
  {
    name: "volume-up",
    type: "interaction",
    prototype: "button",
    code: `
    $volume[$getUserVar[volume]]
    $setUserVar[volume;$sum[$getUserVar[volume];10]]
    $interactionReply[;{newEmbed: {description: Volume Changed To &sum[$getUserVar[volume];10] $getVar[yes_emoji]} {color: $getVar[color]}};;;everyone;true]
    $onlyIf[$authorID==$getGuildVar[authorbutton];You Are Not The Author of This Button 🎵  {options:{ephemeral:true}}{extraOptions:{interaction:true}}]`
  
  },
  {
    name: "volume-down",
    type: "interaction",
    prototype: "button",
    code: `
    $volume[$getUserVar[volume]]
    $setUserVar[volume;$sum[$getUserVar[volume];-10]]
    $interactionReply[;{newEmbed: {description: Volume CHanged To $sum[$getUserVar[volume];-10] $getVar[yes_emoji]} {color: $getVar[color]}};;;everyone;true]
    $onlyIf[$authorID==$getGuildVar[authorbutton];You Are Not The Author of This Button 🎵  {options:{ephemeral:true}}{extraOptions:{interaction:true}}]`
  }
  ]