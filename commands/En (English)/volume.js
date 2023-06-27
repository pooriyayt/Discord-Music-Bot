module.exports = {
    name: "volume",
    aliases: "vol",
    code: `
   $title[Volume]  
   $description[
    Volume Changed To $message] 
    $thumbnail[$userAvatar[$authorID]] 
    $color[$getVar[color]]
    $volume[$mssage]
    $suppressErrors 
    `
  }