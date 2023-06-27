module.exports = {
    name: "volume",
    aliases: "v",
    code: `
   $title[Volume]  
   $description[
   میزان صدا تغییر کرد به $message] 
    $thumbnail[$userAvatar[$authorID]] 
    $color[$getVar[color]]
    $volume[$mssage]
    $suppressErrors 
    `
  }