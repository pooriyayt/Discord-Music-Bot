module.exports = {
    name: "play",
    prototype: "slash",
    type: "interaction",
    $if: "old",
    code: `

  $interactionFollowUp[;{newEmbed:{title:آهنگ با موفقیت به صف پخش ضافه شد✅} {color: $getVar[color]}}]
  $let[msg;$playTrack[$nonescape[$slashOption[name]];$slashOption[platform]]]
  $interactionDefer[false]
  
  
      $if[$hasPlayer==false]
          $joinVc[$voiceId]
      $endif
      $onlyIf[$voiceId!=; ⛔ You're not in a voice channel!{options:{ephemeral}}
  {extraOptions:{interaction}}]
  
      `
  }