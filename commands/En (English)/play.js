module.exports = {
    name: "play",
    aliases: "p",
    $if: "old",
    code: `

  $interactionDefer[false]
  $title[Song Added To Queue✅]
  $color[$getVar[color]]
  $playTrack[$nonescape[$message];youtube]
      $if[$hasPlayer==false]
          $joinVc[$voiceId]
      $endif
      $onlyIf[$voiceId!=; ⛔ You're not in a voice channel!]
  
      `
  }

    /*
For Playing From Youtube
$playTrack[$nonescape[$message];youtube]
  

For Playing From Spotify
$playTrack[$nonescape[$message];spotify]


For Playing From Soundcloud
$playTrack[$nonescape[$message];soundcloud]
  */