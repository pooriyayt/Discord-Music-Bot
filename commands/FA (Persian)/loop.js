module.exports ={
    name: "loop",
    $if: "old",
    code: `
     $if[$getUserVar[loop]==none]
      $setUserVar[loop;song]
      $loopMode[song]
      $description[ حالت تکرار موزیک با موفقیت فعال شد✅]
      $color[$getVar[color]]
    $endif
    $if[$getUserVar[loop]==song]
     $setUserVar[loop;queue]
      $loopMode[queue]
      $description[ حالت تکرار صف با موفقیت فعال شد✅]
      $color[$getVar[color]]
      $endif
    $if[$getUserVar[loop]==queue]
    $setUserVar[loop;none]
      $loopMode[none]
      $description[ حالت تکرار موزیک با موفقیت غیر فعال شد✅]
      $color[$getVar[color]]    
      $endif
      `
}