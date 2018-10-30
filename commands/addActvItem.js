const Discord = require("discord.js");

module.exports.run = async (bot,message,args)=> {
  //t.addrole @name Role
  if(! message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You think you can fool me, you don't have permission to do that, nothing goes over my head, my reflexes are too fast, I would catch it");
  let actrole = args.join(" ")
  console.log(actrole);
  if(! actrole) return message.reply("Specify a role you silly nonce");
  let atvrole = ["Actv", actrole];
  let actvrole = atvrole.join("");
  console.log(actvrole);

  await message.guild.createRole({
    name: actvrole,
    color: "#000000",
    permissions:[]
  })
}
module.exports.help = {
  name: "addActvrole"
}
