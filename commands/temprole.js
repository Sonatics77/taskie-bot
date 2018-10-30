const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  let trMember = message.member;
  let trole = args.join(" ");
  let tgrole = message.guild.roles.find(role => role.name === trole);
  if(! trole) return message.reply("Specify a role");
  await(trMember.addRole(tgrole.id).catch(console.error));
  message.channel.send(`${trMember}, you have recieved the role ${trole}`);

  setTimeout(rRole, 600000);

  function rRole() {
  trMember.removeRole(tgrole.id).catch(console.error);
  message.channel.send(`${trMember}, you have lost the role ${trole}`);
  }


}

module.exports.help = {
  name:"temprole"
}
