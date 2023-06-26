module.exports = [{
  name: "loop",
  type: "interaction",
  prototype: "button",
  $if: "old",
  code: `
   $if[$getUserVar[loop]==none]
    $setUserVar[loop;song]
    $loopMode[song]
  $interactionReply[;{newEmbed: {description: حالت تکرار موزیک با موفقیت فعال شد$getVar[yes_emoji]} {color: $getVar[color]}};;;everyone;false]
  $endif
  $if[$getUserVar[loop]==song]
   $setUserVar[loop;queue]
    $loopMode[queue]
  $interactionReply[;{newEmbed: {description: حالت تکرار صف با موفقیت فعال شد$getVar[yes_emoji]} {color: $getVar[color]}};;;everyone;false]
  $endif
  $if[$getUserVar[loop]==queue]
  $setUserVar[loop;none]
    $loopMode[none]
  $interactionReply[;{newEmbed: {description: حالت تکرار با موفقیت  غیر فعال شد$getVar[yes_emoji]} {color: $getVar[color]}};;;everyone;false]
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
  $interactionReply[;{newEmbed: {description: موزیک با موفقیت متوقف شد$getVar[yes_emoji]} {color: $getVar[color]}};;;everyone;false]
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
  $interactionReply[;{newEmbed: {description: موزیک به طور موقت متوقف شد$getVar[yes_emoji]} {color: $getVar[color]}};;;everyone;false]
  $endif
  $if[$getUserVar[play_pause]==pause]
  $setUserVar[play_pause;none]
  $resumeTrack
  $interactionReply[;{newEmbed: {description: موزیک پخش شد$getVar[yes_emoji]} {color: $getVar[color]}};;;everyone;false]
  $endif
  $onlyIf[$authorID==$getGuildVar[authorbutton];You Are Not The Author of This Button 🎵  {options:{ephemeral:true}}{extraOptions:{interaction:true}}]
  `
},
{
  name: "previous",
  type: "interaction",
  prototype: "button",
  code: `$playPreviousTrack
  $interactionReply[;{newEmbed: {description: موزیک قبلی با موفقیت پخش شد$getVar[yes_emoji]} {color: $getVar[color]}};;;everyone;false]
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
  $interactionReply[;{newEmbed: {description: حالت پخش خودکار با موفقیت فعال شد$getVar[yes_emoji]} {color: $getVar[color]}};;;everyone;false]
  $endif
    $if[$getUserVar[autoplay]==true]
    $setUserVar[autoplay;false]
    $autoplay[none]
  $interactionReply[;{newEmbed: {description: حالت پخش خودکار با موفقیت غیر فعال شد$getVar[yes_emoji]} {color: $getVar[color]}};;;everyone;false]
  $endif
    $onlyIf[$authorID==$getGuildVar[authorbutton];You Are Not The Author of This Button 🎵  {options:{ephemeral:true}}{extraOptions:{interaction:true}}]
  `
},
{
  name: "skip",
  type: "interaction",
  prototype: "button",
  code: `$skipTrack
  $interactionReply[;{newEmbed: {description: آهنگ بعدی با موفقیت پخش شد$getVar[yes_emoji]} {color: $getVar[color]}};;;everyone;false]
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
  $interactionReply[;{newEmbed: {description: صدا با موفقیت به$sum[$getUserVar[volume];10] تغییر یافت.$getVar[yes_emoji]} {color: $getVar[color]}};;;everyone;true]
  $onlyIf[$authorID==$getGuildVar[authorbutton];You Are Not The Author of This Button 🎵  {options:{ephemeral:true}}{extraOptions:{interaction:true}}]`

},
{
  name: "volume-down",
  type: "interaction",
  prototype: "button",
  code: `
  $volume[$getUserVar[volume]]
  $setUserVar[volume;$sum[$getUserVar[volume];-10]]
  $interactionReply[;{newEmbed: {description: صدا با موفقیت به$sum[$getUserVar[volume];-10] تغییر یافت.$getVar[yes_emoji]} {color: $getVar[color]}};;;everyone;true]
  $onlyIf[$authorID==$getGuildVar[authorbutton];You Are Not The Author of This Button 🎵  {options:{ephemeral:true}}{extraOptions:{interaction:true}}]`
}
]