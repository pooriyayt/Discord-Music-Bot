module.exports ={
name: "autoplay",
aliases: "ap",
$if: "old",
code: `
  $if[$getGuildVar[autoplay]==false]
  $setUserVar[autoplay;true]
  $autoplay[relative]
  $autoplay[none]
$description[ حالت پخش خودکار با موفقیت فعال شد✅] 
$color[$getVar[color]]
$endif
  $if[$getUserVar[autoplay]==true]
  $setUserVar[autoplay;false]
  $autoplay[none]
$description[ حالت پخش خودکار با موفقیت غیر فعال شد✅] 
$color[$getVar[color]]
$endif
  
`

}