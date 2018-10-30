const Discord = require("discord.js");

module.exports.run = async (bot,message,args)=> {
  let arUser = message.member
  if(! message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You think you can fool me, you don't have permission to do that, nothing goes over my head, my reflexes are too fast, I would catch it");
  let rMember = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[0]));
  if(! rMember) return message.reply("Couldn't find that user");
  let role = args.join(" ").slice(22);
  if(! role) return message.reply("Specify a role you silly nonce");
  let gRole = message.guild.roles.find(`name`, role);
  if(! gRole) return message.reply("Couldn't find that role");

  if(! rMember.roles.has(gRole.id)) return message.reply("They don't have that role you silly nonce.");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`RIP, ${arUser} removed your role ${gRole.name}, you either timed out or you've pissed someone off` )
  }catch(e){
   message.channel.send(`Hey <@${rMember.id}?>, keep your Dms open next time. RIP, ${arUser} removed your role: ${gRole.name}, you either timed out or you've pissed someone off`)
  }
}

module.exports.help = {
  name: "removerole"
}
