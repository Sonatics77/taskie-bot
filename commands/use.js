const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  let urMember = message.member;
  let urole = args.join(" ");
  let ttugrole = ["Actv",urole];
  let tugrole = ttugrole.join("");
  let tttugrole = (message.guild.roles.find(role => role.name === `${tugrole}`));
  let ugrole = (message.guild.roles.find(role => role.name === `${urole}`));
  if(! urole) return message.reply("Specify a role");

  if(message.member.roles.has(tttugrole.id)) {
  message.channel.send(`${urMember}, you have activated the item`);
  console.log(ugrole.id);
  await(urMember.addRole(ugrole.id).catch(console.error));
  await(urMember.removeRole(tttugrole.id));
  message.channel.send(`${urMember}, you have recieved the role ${urole}`);

  setTimeout(uRole, 600000);

  function uRole() {
  urMember.removeRole(ugrole.id).catch(console.error);
  message.channel.send(`${urMember}, you have lost the role ${urole}`);
  }
} else {
  message.channel.send(`${urMember}, you first need to purchase the item`);
}


}

module.exports.help = {
  name: "use"
}
