module.exports ={
name: "setup",
code: `
اوکی ستاپ شدم
$createApplicationCommand[global;play;Play Songs;true;slash;[
    {
      "name": "name",
      "description": "Enter Song Name",
      "required": true,
      "type": 3
    },
    {
      "name": "platform",
      "description": "Enter Song platform",
      "required": true,
      "type": 3,
    
    "choices" : [{
      "name" : "soundcloud",
      "value" : "soundcloud"
      },{
      "name" : "youtube",
      "value" : "youtube"
      }]}
  ]
`
}