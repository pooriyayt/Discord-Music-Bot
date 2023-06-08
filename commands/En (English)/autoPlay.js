module.exports = {
  name: "autoplay",
  aliases: "ap",
  $if: "old",
  code: `
    $if[$getGuildVar[autoplay]==false]
    $setUserVar[autoplay;true]
    $autoplay[relative]
    $autoplay[none]
  $description [Autoplay mode has been activated successfully✅]
  $color[$getVar[color]]
  $endif
    $if[$getUserVar[autoplay]==true]
    $setUserVar[autoplay;false]
    $autoplay[none]
  $description [Autoplay mode successfully disabled✅]
  $color[$getVar[color]]
  $endif
    
  `

}