const Botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const Fs = require("fs");
const Bot = new Discord.Client({disableEveryone: true});
Bot.commands = new Discord.Collection();

echo "# taskie-bot" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:Sonatics77/taskie-bot.git
git push -u origin master



Fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    Bot.commands.set(props.help.name, props);
  });

});



Bot.on("ready", async () => {
  console.log(`${Bot.user.username} is online!`)
  Bot.user.setActivity("On Roulette", {type: "GAMBLING"});
});

Bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = Botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);


  let commandfile = Bot.commands.get(cmd.slice(prefix.length));
  console.log(commandfile);
  if(commandfile) commandfile.run(Bot,message,args);
});


//integrate with ubb: when item is bought give user a permissions role named: activate item then get them to activate the item by typing t.use "item"
//and tBot checks if they have role activate item and if they do give them the role they bought and remove the role activate item from them





Bot.login(Botconfig.token);
