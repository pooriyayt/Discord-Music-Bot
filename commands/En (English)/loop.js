module.exports ={
  name: "loop",
  $if: "old",
  code: `
   $if[$getUserVar[loop]==none]
    $setUserVar[loop;song]
    $loopMode[song]
    $description [The music repeat mode has been activated successfully✅]
    $color[$getVar[color]]
  $endif
  $if[$getUserVar[loop]==song]
   $setUserVar[loop;queue]
    $loopMode[queue]
    $description [queue repetition mode has been activated successfully✅]
    $color[$getVar[color]]
    $endif
  $if[$getUserVar[loop]==queue]
  $setUserVar[loop;none]
    $loopMode[none]
    $description [The music repeat mode has been successfully disabled✅]
    $color[$getVar[color]]
    $endif
    `
}