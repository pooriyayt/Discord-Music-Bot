module.exports = {
    name: "play",
    aliases: "p",
    $if: "old",
    code: `
    $setGuildVar[authorbutton;$authorID]
  $interactionDefer[false]
  $title[آهنگ با موفقیت به صف پخش ضافه شد✅]
  $color[$getVar[color]]
  $playTrack[$nonescape[$message];youtube]
  
      $if[$hasPlayer==false]
          $joinVc[$voiceId]
      $endif
      $onlyIf[$voiceId!=; ⛔ You're not in a voice channel!]
  
      `
  }
  /*
برای پخش از یوتوب
$playTrack[$nonescape[$message];youtube]
  

  برای پخش از اسپاتیفای
$playTrack[$nonescape[$message];spotify]


    برای پخش از ساند کلاد
$playTrack[$nonescape[$message];soundcloud]
  */