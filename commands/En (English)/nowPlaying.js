module.exports ={
    name: "now-playing",
    aliases: "np",
    code:
    `
$title[Now Playing]
$description[
> **Title:** $songInfo[title]

> **Artist:** $songInfo[artist]

> **Duration:$digitalFormat[$getCurrentTrackDuration]/$digitalformat[$songInfo[duration]]**

> **Volume:**$volume

> **Url:** $songInfo[url]

> **Requested By:** $songInfo[requester]

>  **Veiws:** $songInfo[views]

>  **Platform:** $songInfo[formatedPlatforms]


]
$image[$songInfo[thumbnail]]
$color[$getVar[color]]


    `

}