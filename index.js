const Discord = require("discord.js"),
client = new Discord.Client(),
weather = require("weather-js");
Wiki = require("wikijs"),
Music = require('./Music'),
express = require("express"),
app = express(),
yt = require("./youtube_plugin"),
youtube_plugin = new yt(),
AuthDetails = require("./auth.json"),
functionHelper = require('./functionHelpers.js'),
ffmpeg = require("ffmpeg"),
search = require('youtube-search'),
music = new Music(),
con = console.log,
prefix = "?";
const randomWordFR = require('random-word-fr');
var moment = require("moment");
var mention = "<@1930903359700619264>";
client.on("ready", () => {
client.user.setActivity("Faire le robot 🤖") 
var memberCount = client.users.size;
var servercount = client.guilds.size;
    con("--------------------------------------");
con('[!]Connexion en cours... \n[!]Veuillez Patienté! \n[!]Les évenement sont après ! :)  \n[!]Les préfix actuelle:  ' + prefix + "\n[!]Mentions = " + mention + "\n[!]Nombre de membres: " + memberCount + "\n[!]Nombre de serveurs: " + servercount);
});

client.on('guildMemberAdd', member => {

 

  member.guild.channels.find('name', '👥-le-parlement-👥').send(`${member}, Vien d'arrivée sur le server souhaité lui la bienvenue ! `);

}) 
client.on('message', message => {
  const msgc = message.content;
       let commande = message.content.split(' ')[0]
    let arg = message.content.slice(prefix.length).split(/ +/)
     commande = arg.shift().toLowerCase() 
     

 if (msgc === (prefix + "channel")){
    const data = client.channels.get(message.channel.id);
    moment.locale("fr");
    var temps = moment(data.createdTimestamp).format("LLLL");
    con(temps)
    message.reply("\n" + "```javascript"+ "\n" + "Nom du channel: " + data.name + "\n" + "Type de channel: " + data.type + "\n" +
    "Channel id: " + data.id + "\n" + "Topic: " + data.topic + "\n" + "Créer le: " + temps + "```" );
    con("\n" + "**" + "Channel id: " + data.id + "**" );
    con(data);
    }   var msg =  message  
    var commandt = msg.content
    if(commandt.startsWith("?serverinfo")) {
        var sowner = msg.guild.owner.user.username
        var otag = msg.guild.owner.user.discriminator
        var server_embed = new Discord.RichEmbed()
        .setAuthor(msg.author.tag)
        .setImage(msg.guild.iconURL)
        .setTitle(msg.guild.name)
        .setDescription("Informations du serveur " + msg.guild.name)
        .addField("nombre de membres", msg.guild.memberCount)
        .addField("nombre de channels", msg.guild.channels.size)
        .addField("nombre de rôles", msg.guild.roles.size)
        .addField("Fondateur", sowner + '#' + otag)
        .addField("Region", msg.guild.region)
        .addField("Nombre de roles", msg.guild.roles.size)
        .addField("_ _", "Icone du serveur")
        .setFooter("Bender | Bot", msg.author.avatarURL)
        msg.channel.send(server_embed)
      
 } if (commande ===  "clak"){

    let member = message.mentions.members.first()

    if (!member) return message.reply("Merci de mentionner une personne !")

    message.channel.send(`${message.author} à mi une grosse claque à ${member.user} il à très mal... `)

    message.delete(0)
    }
      
     else if (msgc === ("bonjour")){
      message.channel.send('bonjour à toi ');

     } else if (msgc === ("Bonjour")){
        message.channel.send('bonjour à toi ');
     }
       
     else if (msgc === 'Je mange') {
        message.channel.send("  Moi aussi j'ai faim" );
      }
      else if (msgc === 'je mange') {
        message.channel.send(" Moi aussi j'ai faim ! " );
      }

      
      else if (msgc === ('sava')) {
        message.channel.send('Bien et toi ? .');
      }
      else if (msgc === ('Sava')) {
        message.channel.send('Bien et toi ? .');
      }

     else if (msgc === 'Ping') {        
        message.channel.send('Pong :ping_pong: ');
      }
      else if (msgc === 'ping') {        
        message.channel.send('Pong :ping_pong: ');
      
  } if(message.content === "?go"){
        var test = message.guild.channels.find("id", "459828624938369024")
       var test = message.guild.channels.find("id", "459828624938369024")
    var Inter = setInterval(function(message){
            
test.send("**Je suis un Bot créé par Banane27**\nFaite la commande ?help pour savoir de quoi je suis capable ! ")

             }, 1200000  )

message.reply("Le message est lancer")

 if(message.content === "?gstop"){
clearInterval(Inter)
 message.reply("Le message est arrêter")
    }
    
   
 
 

      
      
  }  if (message.content.startsWith(prefix + "invite")){
message.channel.send("", {    
            embed: {
                color: 0xff6a6a, 
                author:  message.author.name,
                title: '', 
                description: '', 
                fields: [
                    {
                        name: '**Lien pour ajouter Bender | bot**',
                        value: "https://discordapp.com/api/oauth2/authorize?client_id=475673658971652109&permissions=8&redirect_uri=https%3A%2F%2Fdiscordapp.com%2Fapi%2Foauth2%2Fauthorize&response_type=code&scope=guilds.join%20gdm.join%20rpc%20rpc.api%20rpc.notifications.read%20bot%20messages.read%20guilds%20identify", 
                         	inline: true
                   },{
                        name: '**Lien pour Rejoindre le server**',
                        value: " https://discord.gg/3cPuxjA", 
                        inline: true
                   }],                     
                                   footer: {
            text: 'Embed par Banane27',
          },
            }
        });
    };
   
    
   if (message.content.startsWith('?caract')) {
        let contenttoconvert = message.content.substr(7)
        if (contenttoconvert){
        var ctclenght = contenttoconvert.length
        message.channel.send('Votre message fait'+ctclenght+' caracteres.')
        }else{
message.reply("Merci d'entrer un message  !" )
} 


} if (msgc === (prefix +"rob" )) {
 var rob = Math.floor(Math.random() * 100)	
 message.reply ("Vous avez fait" + rob) 

  
  
   } if (msgc === 'Wsh') {
        message.channel.send('On nest pas au quartier ici !');
      }
      else if (msgc === 'wsh') {
        message.channel.send('On nest pas au quartier ici !');
      }

      else if (msgc === 'Qui') {
         message.reply('!'); 
      }
         else if (msgc === 'https://discord.gg/3cPuxjA') {
          message.reply("C'est méme pas ca bouffon ! "); 
       
      }
         else if (msgc === 'Salut à toi !!') {
          message.reply("Ferme la c'est moi le boss"); 
      }
      else if (msgc === 'qui') {
        message.reply('!'); 
   
           
  }     if (commande === "ping"){
          message.channel.send("Temps de latence du bot : " + `**${message.createdTimestamp - Date.now()}**` + " " + "**ms**")
  
  

       }    if (commande === "say"){
        let msg = arg.slice(0).join(' ')
        if (!msg) return message.reply("Merci d'entrer un message à répéter !")
        message.channel.send(msg)
        message.delete(0)
    
      } if (msgc === (prefix + "bot")) {
      message.channel.sendMessage("``` Bot Discord Basic - Version 2.0 \n Créateur : Banane27 | Je vous aime 😍 \n\n **By Banane27**```");
      console.log("Command executed : /version")
    
  }  if (commande === "mp"){
        let member = message.mentions.members.first()
        if (!member) return message.reply("Merci de mentionner une personne !")
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("Vous n'avez pas les permission !")
        let msg = arg.slice(1).join(' ')
        if (!msg) return message.reply("Merci d'entrer un message !")
        member.send(msg)
        message.reply("Envoi effectué !")
    message.delete(0)
      
  } if (commande === "uni"){
        let reply = [
   
"http://www.villaverde.fr/media/cms/type/lapin-nain_1.jpg", 
"https://www.hyperassur.com/wp-content/uploads/2017/07/lapin-nain-1-1000x500.jpg",
"https://thumbs.dreamstime.com/b/tree-lep-ard-large-wild-male-leopard-botswana-south-africa-92134265.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0i1uh-S_0putshG_82RE5PTCgqYBhIC8AA8IN2K5wI8Nssjpo",
"https://www.worldatlas.com/r/w728-h425-c728x425/upload/aa/ec/e9/shutterstock-368215916.jpg", 
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ13kcs-CtsiH27EnW8wP4iwfAnJqbLdqP-4zY09MsT4VU9v3r",
"https://www.especes-menacees.fr/wp-content/uploads/2017/11/dos-argente-gorille-montagnes.jpg", 
"https://www.especes-menacees.fr/wp-content/uploads/2017/11/dos-argente-gorille-montagnes.jpg", 
"https://cdn3.financedir.com/image/assurance/animal/nac/oiseau/3_mutuelle-pour-oiseau-assurance-sante-pour-les-oiseaux.jpg",
"http://petsitting.fr/wp-content/uploads/2016/08/maladies-du-hamster.png",
"https://fr.cdn.v5.futura-sciences.com/buildsv6/images/wide1920/a/e/6/ae6f3582d0_88580_shutterstock-marben.jpg",
"https://ih0.redbubble.net/image.452487130.2889/flat,550x550,075,f.u1.jpg",
"https://www.wanimo.com/veterinaire/images/articles/oiseau/perroquet-profil.jpg",
"https://fr.cdn.v5.futura-sciences.com/buildsv6/images/largeoriginal/b/8/f/b8fe0c3f28_50036202_golden-jackal-sa02.jpg",
"http://www.lilela.net/wp-content/uploads/samgnaw.jpg", 
"https://img1.bibamagazine.fr/var/bibamagazine/storage/images/article/fiona-le-bebe-hippopotame-ne-premature-qui-seduit-les-internautes-67949/516015-1-fre-FR/Fiona-le-bebe-hippopotame-ne-premature-qui-seduit-les-internautes_width1024.jpg",
"https://www.santevet.com/upload/admin/images/article/Chien%202/races_de_chiens/siberian-husky.jpg",
"http://medias.psychologies.com/storage/images/dictionnaire-des-reves/serpent/2442734-4-fre-FR/Serpent_imagePanoramique647_286.jpg",
"http://shotsofscience.com/fr/wp-content/uploads/sites/3/2016/12/697_serpent_venim_asie_couleur.jpg",
"https://www.sciencesetavenir.fr/assets/img/2017/01/27/cover-r4x3w1000-588b7b02f148c-SIPA_00654687_000004.jpg", 
"https://medias.pourlascience.fr/api/v1/images/view/5a8c28548fe56f7f6d3c62f6/wide_1300/image.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Nile_crocodile_head.jpg/1200px-Nile_crocodile_head.jpg",
"https://www.wanimo.com/veterinaire/images/articles/rongeur/souris-hygiene.jpg"

]
        
        let reponse = reply[Math.floor(Math.random() * reply.length)]
        var embed = new Discord.RichEmbed()
        .setTitle("--Universel-- ")
        .setImage(reponse)
        .setColor("#ffff00")
        message.channel.send(embed)


  } if (commande === "cat"){
        let reply = [
        
    
    "https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC_1cvH240d8UYYYJgY8d-Eh9BJZkr_EyqDAlkfjU05eikqXxdWg",
"https://teeshirtpalace-production.s3.amazonaws.com/spree/images/DABC2524-BLACK-PS-DESIGN/large/DABC2524-BLACK-PS-DESIGN.jpg?1517086957", 
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2po5ZpzATjrDracG85FIrAB3jzk-n0r84aHRxyTNICnVpadUc",
"https://www.catster.com/wp-content/uploads/2017/08/Pixiebob-cat.jpg",
"https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=350",
"https://lh3.googleusercontent.com/l6JAkhvfxbP61_FWN92j4ulDMXJNH3HT1DR6xrE7MtwW-2AxpZl_WLnBzTpWhCuYkbHihgBQ=w640-h400-e365",
"https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlNO6TQCz_PnCI0mqjywdxX9aDIBfNR-QqMk5zfibungeH_NFQ4w",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JZi2mxQVI8wNX63s5fKcGyNMIzYyUhlbwkvkGsibKlNIntiB",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtfDvEeHAxEvjnNsv79r02uc3ThcyfusCYO5TWMILKL9_1l9-G",
"http://brut44.com/wp-content/uploads/2018/01/grumpy-6.jpg",
"https://shawglobalnews.files.wordpress.com/2018/03/grandpa-mason-lucy.jpg?quality=70&strip=all&w=720&h=480&crop=1",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2PRxpktIEPY8S9vgLeifLI51ZF1d_ogKSw_YvevXh9HC1smn",
"https://www.petinsurance.com/images/VSSimages/consumer/v5/hero-cat.png",
"https://i.kinja-img.com/gawker-media/image/upload/s--983ybKeI--/c_fill,f_auto,fl_progressive,g_north,h_264,q_80,w_470/ld7301vvolp1grp0aeqf.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYsXVBZ6LvI-JoiQlcd6yCRSm_3ZzitVxs3IPUgAjepz3triXn0w",
"https://ichef.bbci.co.uk/news/304/media/images/55305000/jpg/_55305878_image2faceclaws-1.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Cat_eating_a_rabbit.jpeg/220px-Cat_eating_a_rabbit.jpeg",
"http://chatocats.fr/wp-content/uploads/titou-avril-2018.jpg",
"https://vignette.wikia.nocookie.net/cats/images/0/0c/Tabbys-tabby-cats-2.gif/revision/latest?cb=20120510223201&path-prefix=en",
 
    
    
    ]
        
        let reponse = reply[Math.floor(Math.random() * reply.length)]
        var embed = new Discord.RichEmbed()
        .setTitle("Cat random")
        .setImage(reponse)
        .setColor("#ffff00")
        message.channel.send(embed)
    
    



  }  if (msgc === (prefix +"help")) {          
       message.channel.sendMessage("", {embed: {           
            title: "--Les commande--",
            color: 0x06DF00,
            description: "**__            LES AUTO RÉPONDEUR               __**\n\n je mange \n qui\n ping \n sava\n wsh\n bonjour   \n\n **__        LES COMMANDE FUN         __** \n\n **?youtube**\n : Lien youtube\n **?google**\n : Lien google\n **?say**\n Fait parler le Bot \n **?wiki**\n : Lien wikiédia\n **?méteo <ville>**\n : Méteo de ta ville\n  **?rob**\n : Vous donne un nombre entre 1 et 100**\n **?clak**\n :donne une claque à l'utilisateur\n **?info<user>**\n : Info sur l'utilisateur \n **?uni**\n : Image d'animaux aléatoire\n **?dog**\n : Image de chien aléatoire\n **?ping**\n : Temps de latence du bot\n **?channel <sur le channel de votre choix>**\n : Info sur le channel en question\n **?6ball**\n : Réponse aléatoire à une question\n **?flop <votre message>**\n : Inverse le message\n **?serverinfo**\n : Info sur le serveur\n **?botinfo**\n : Info sur le bot\n **?caract <message>**\n : Met la taille du message\n **?cat**\n : Image aléatoire de chat\n **?avatar <user>**\n : Donne l'avatar de la personne\n **?bot <info sur le bot> **\n **?invite**\n : Donne l'invite du serveur Scarlet et de Bender | Bot\n\n **__          LES  COMMANDE ADMIN         __**\n\n\n **?ban <user>**\n : Ban le joueur en question\n **?mute <user>**\n : Mute le joueur en question\n **?unmute <user mute>**\n : Demute le joueur\n **?kick**\n : Kick le joueur en question \n **?clear**\n : Supprime tout les messages\n **?mp <user> <message>**\n : Mp le joueur en question\n **?addrole <non du rôle >**\n : Ajoute un rôle au serveur\n **?suprole <non du rôle >**\n : Delete le rôle\n**?actu**\n : Actualise le jeu du bot \n **?go**\n : Démarre le timer \n **?gstop**\n  : Arrête le timer",           
            footer: {
              text: "Message par Bender | Bot."
              }
            }}).catch(console.error);  
 
      
     
   
         
     } else if (msgc === ("Test")){
    message.reply('Test réussi ! ');

} let commandi = msgc.split(' ')[0]
    let argst = msgc.slice(prefix.length).split(/ +/)
    commandi = argst.shift().toLowerCase()
    var color = "#" + Math.floor(Math.random() * 16777215).toString(16).toUpperCase()

 if (commandi ===  "6ball") {
        let msg = argst.slice(0).join(' ')
        if (!msg) return message.reply("Merci d'entrer une question !")
        let reply = [
            "oui",
            "Non",
            "Pas trop",
            "Je ne sais pas",
            "Je ne suis qu'un robot",
            "Je vois que...... tu es con",
        ]
        let reponse = reply[Math.floor(Math.random() * reply.length)]
        message.channel.send(reponse)
    
         }   if (msgc == ("test")){
    message.reply('test !');
    

           } if (commande === "flop"){
            let msg = argst.slice(0).join(' ')
            if (!msg) return message.reply("Merci d'entrer un mot à inverser !")
            var msginverse = msg.split("").reverse().join("")
            let embed = new Discord.RichEmbed()
            .setTitle("**Reverse une chaîne**")
            .setColor(color)
            .addField("Mot normal", msg)
            .addField("Mot inverser", msginverse)
            .setFooter("Bender | Bot", message.author.displayAvatarURL)
            message.channel.send(embed)
        
    
	if(message.content === "?go"){
        var test = message.guild.channels.find("id", "459828624938369024")
       var test = message.guild.channels.find("id", "459828624938369024")
    var Inter = setInterval(function(message){
            
test.send("Salut")

             }, 60000)

message.reply("Le message est lancer")

 if(message.content === "?gstop"){
clearInterval(Inter)
 message.reply("Le message est arrêter")
    }
    
  } 
 

  
       }  
        if(msgc.startsWith(prefix +"avatar")) {
    var memberavatar = message.author.avatarURL
    var membername = message.author.username
       var mentionned = message.mentions.users.first();
      var getvalueof;
      if(mentionned){
          var getvalueof = mentionned;
      } else {
          var getvalueof = message.author;
     } 

      

    message.channel.sendMessage({
        embed: {
           

        image: {
      url: getvalueof.avatarURL
        },
          color: 0xE46525,
          footer: {
            text: 'by Banane',
            proxy_icon_url: ' '
          },

          author: {
            name: membername,
            icon_url: memberavatar,
            proxy_icon_url: ' '
          }
        }
});

 } if (message.content.startsWith("?actu")) {

        client.user.setGame("?help || "+client.guilds.size+" guilds, "+client.users.size+" users")

        message.reply("Utilisateurs actualisés ! Merci !")

    


} if (message.content.startsWith("?botinfo")) {

        var srvlist_embed = new Discord.RichEmbed()

            .addField("Serveurs", client.guilds.size)

            .addField("Utilisateurs", client.users.size)

            .addField("Channels", client.channels.size)

            .addField("Ping", client.ping+"ms")

        message.channel.sendEmbed(srvlist_embed)

    


  
       
   
    } if (commande === "addrole") {
        let nom = arg.slice(0).shift()
        let col = "#" + Math.floor(Math.random() * 16777215).toString(16)
        if (!nom) return message.reply("Merci d'entrer un nom de rôle !")
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Tu n'as pas les permission suffisante !")
        message.guild.createRole({
            name: nom,
            color: col,
        })
        message.channel.send(`Le role ${nom} a bien été a été créer avec la couleur ${col}`)
    
      } if (commande === "suprole") {
        let rôle = arg.slice(0).join(' ')
        let searchRôle = message.guild.roles.find("name", rôle)
        if (!rôle) return message.reply("Merci d'entrer le nom du rôle à supprimer !")
        if (!searchRôle) return message.reply("Nous ne trouvons pas ce rôle !")
        searchRôle.delete()
        message.reply(":white_check_mark: Rôle bien supprimer !")
    
}  else if(msgc.startsWith(prefix +'botname')){
    client.user.setUsername(msgc.substr(9));
  } 
 else if (msgc.startsWith(prefix + "méteo")){
    var location = msgc.substr(6);
    var unit = "C";
    
    try {
        weather.find({search: location, degreeType: unit}, function(err, data) {
            if(err) {
                con(Date.now(), "DANGER", "Je ne peut pas trouvé d'information pour la méteo de " + location);
                message.reply("\n" + "Je ne peut pas trouvé d'information pour la méteo de " + location);
            } else {
                data = data[0];
               con("**" + data.location.name + " Maintenant : **\n" + data.current.temperature + "°" + unit + " " + data.current.skytext + ", ressentie " + data.current.feelslike + "°, " + data.current.winddisplay + " Vent\n\n**Prévisions pour demain :**\nHaut: " + data.forecast[1].high + "°, Bas: " + data.forecast[1].low + "° " + data.forecast[1].skytextday + " avec " + data.forecast[1].precip + "% de chance de precipitation.");
               message.reply("\n" + "**" + data.location.name + " Maintenant : **\n" + data.current.temperature + "°" + unit + " " + data.current.skytext + ", ressentie " + data.current.feelslike + "°, " + data.current.winddisplay + " Vent\n\n**Prévisions pour demain :**\nHaut: " + data.forecast[1].high + "°, Bas: " + data.forecast[1].low + "° " + data.forecast[1].skytextday + " avec " + data.forecast[1].precip + "% de chance de precipitation.");
            }
        });
    } catch(err) {
        con(Date.now(), "ERREUR", "Weather.JS a rencontré une erreur");
        message.reply("Idk pourquoi c'est cassé tbh :(");
        }
    }
else if (msgc.startsWith(prefix + "wiki")){
            if(!msgc.substr(5)) {
                con(Date.now(), "DANGER", "Vous devez fournir un terme de recherche.");
                message.reply("Vous devez fournir un terme de recherche.");
                return;
            }
            var wiki = new Wiki.default();
            wiki.search(msgc.substr(5)).then(function(data) {
                if(data.results.length==0) {
                    con(Date.now(), "DANGER","Wikipedia ne trouve pas ce que vous avez demandée : " + msgc.substr(5));
                    message.reply("Je ne peut trouvé ce que vous voulez dans Wikipedia :(");
                    return;
                }
                wiki.page(data.results[0]).then(function(page) {
                    page.summary().then(function(summary) {
                        if(summary.indexOf(" may refer to:") > -1 || summary.indexOf(" may stand for:") > -1) {
                            var options = summary.split("\n").slice(1);
                            var info = "Selectioné une options parmis celle-ci :";
                            for(var i=0; i<options.length; i++) {
                                info += "\n\t" + i + ") " + options[i];
                            }
                            message.reply(info);
                            selectMenu(message.channel, message.author.id, function(i) {
                                commands.wiki.process(Client, message, options[i].substring(0, options[i].indexOf(",")));
                            }, options.length-1);
                        } else {
                            var sumText = summary.split("\n");
                            var count = 0;
                            var continuation = function() {
                                var paragraph = sumText.shift();
                                if(paragraph && count<3) {
                                    count++;
                                    message.reply(message.channel, paragraph, continuation);
                                }
                            };
                            message.reply("**Trouvé " + page.raw.fullurl + "**", continuation);
                        }
                    });
                });
            }, function() {
                con(Date.now(), "ERREUR","Impossible de se connecté a Wikipédia");
                message.reply("Uhhh...Something went wrong :(");
            });
        
 
           } if(msgc.startsWith(prefix +"info")) {
    var memberavatar = message.author.avatarURL
    var membername = message.author.username
       var mentionned = message.mentions.users.first();
      var getvalueof;
      if(mentionned){
          var getvalueof = mentionned;
      } else {
          var getvalueof = message.author;
      }

      if(getvalueof.bot == true){
          var checkbot = "L'utilisateur est un bot";
      } else {
          var checkbot = "N'est pas un bot";
      }
      if(getvalueof.presence.status == 'online'){
        var status = "En ligne"; 
      }else {
        var status = "Hors ligne";
      }

    message.channel.sendMessage({
        embed: {
          type: 'rich',
          description: '',
          fields: [{
            name: 'Pseudo',
            value: getvalueof.username,
            inline: true
          }, {
            name: 'User id',
            value: getvalueof.id,
            inline: true
          },{
            name: 'Discriminateur',
            value: getvalueof.discriminator,
            inline: true
},{
            name: 'Status',
            value: status,
            inline: true
},{
            name: 'Bot',
            value: checkbot,
            inline: true
}],
        image: {
      url: getvalueof.avatarURL
        },
          color: 0xE46525,
          footer: {
            text: 'by Banane27',
            proxy_icon_url: ' '
          },

          author: {
            name: membername,
            icon_url: memberavatar,
            proxy_icon_url: ' '
          }
     } 
});



}
   else if(message.content.startsWith(prefix +'kick')){
            let modRole = message.guild.roles.find("name", "[Staff]");
if(!message.member.roles.has(modRole.id)) {
  return message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :no_entry_sign: Vous n'avez pas la permissions d'utiliser cette commande ! :no_entry_sign: ",
          footer: {
            text: "Message par Bender | Bot."
          }
        }}).catch(console.error);
      } 
    if(!message.guild.roles.exists("name", "[Staff]")) {
        return  message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :no_entry_sign: Le rôle **[Staff]** n'existe pas dans ce serveur veuillez le créer pour Kick! :no_entry_sign: ",
          footer: {
            text: "Message par Bender | Bot."
          }
        }}).catch(console.error);
      } 
if(message.mentions.users.size === 0) {
  return message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :no_entry_sign: Merci de spécifié l'utilisateur que vous voulez Kick. **Format ~> `!kick @mention`** ! :no_entry_sign: ",
          footer: {
            text: "Message par Bender | Bot."
          }
        }}).catch(console.error);
}
let kickMember = message.guild.member(message.mentions.users.first());
if(!kickMember) {
  return message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :x:  L\'utilisateur que vous avez entré n'est pas valide ! :x:",
          footer: {
            text: "Message par Bender | Bot."
          }
        }}).catch(console.error);
}
if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
  return message.reply("Je n'ai pas la permissions ** __(KICK_MEMBERS)__ **!").catch(console.error);
}
         if(!message.guild.channels.exists("name", "admin-logs")){
// créer le channel
message.guild.createChannel('admin-logs');
// Affiche un message d'erreur expliquant que le channel n'existait pas
return message.channel.sendMessage("", {embed: {
title: "Erreur:",
color: 0xff0000,
description: " :no_entry_sign: Le salon textuel `admin-logs` n'existait pas, je viens de le créer pour vous :white_check_mark: , Veuillez réessayer :wink:",
footer: {
text: "Message par Bender | Bot."
}
}}).catch(console.error);
}   
kickMember.kick().then(member => {
    message.channel.sendMessage("", {embed: {
          title: "Succès :white_check_mark:",
          color: 0xff0000,
          description: `${member.user.username}`+` à bien été kick`,
          footer: {
            text: "Message par Bender | Bot."
          }
        }}).catch(console.error);
}).then(message.guild.channels.find('name','admin-logs').sendMessage({
        embed: {
          type: 'rich',
          description: '',
          fields: [{
            name: '**L\'utilisateur <~>**',
            value: kickMember.user.username,
            inline: true
          }, {
            name: 'User id',
            value: kickMember.id,
            inline: true
          },{
            name: '**Action <~>**',
            value: "Kick",
            inline: true
},{
            name: 'Modérateur',
            value: message.author.username,
            inline: true
}],
       
          color: 0xD30000,
          footer: {
            text: 'Moderation',
            proxy_icon_url: ' '
          },

          author: { 
            name: kickMember.user.username + "#"+ kickMember.user.discriminator,
            icon_url: " ",
            proxy_icon_url: ' '
          }
        }
})).catch(console.error);
        
        
     }  if(message.content.startsWith(prefix +'ban')){
            let modRole = message.guild.roles.find("name", "Mod");
if(!message.member.roles.has(modRole.id)) {
  return message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :no_entry_sign: Vous n'avez pas la permissions d'utiliser cette commande ! :no_entry_sign: ",
          footer: {
            text: "Message par Bender | Bot."
          }
        }}).catch(console.error);
      } 
    if(!message.guild.roles.exists("name", "Mod")) {
        return  message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :no_entry_sign: Le r么le **Mod** n'existe pas dans ce serveur veuillez le cr茅er pour Kick! :no_entry_sign: ",
          footer: {
            text: "Message par Bender | Bot."
          }
        }}).catch(console.error);
      } 
if(message.mentions.users.size === 0) {
  return message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :no_entry_sign: Merci de sp茅cifi茅 l'utilisateur que vous voulez Kick. **Format ~> `!ban @mention`** ! :no_entry_sign: ",
          footer: {
            text: "Message par Bender | Bot."
          }
        }}).catch(console.error);
}
let banMember = message.guild.member(message.mentions.users.first());
if(!banMember) {
  return message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :x:  L\'utilisateur que vous avez entr茅 n'est pas valide ! :x:",
          footer: {
            text: "Message par Bender | Bot."
          }
        }}).catch(console.error);
}
if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
  return message.reply("Je n'ai pas la permissions ** __(BAN_MEMBERS)__ **!").catch(console.error);
}
         if(!message.guild.channels.exists("name", "admin-logs")){
// cr茅er le channel
message.guild.createChannel('admin-logs');
// Affiche un message d'erreur expliquant que le channel n'existait pas
return message.channel.sendMessage("", {embed: {
title: "Erreur:",
color: 0xff0000,
description: " :no_entry_sign: Le salon textuel `admin-logs` n'existait pas, je viens de le cr茅er pour vous :white_check_mark: , Veuillez r茅essayer :wink:",
footer: {
text: "Message par Bender | Bot."
}
}}).catch(console.error);
}   
banMember.ban().then(member => {
    message.channel.sendMessage("", {embed: {
          title: "Succ猫s :white_check_mark:",
          color: 0xff0000,
          description: `${member.user.username}`+` 脿 bien 茅t茅 ban`,
          footer: {
            text: "Message par Bender | Bot."
          }
        }}).catch(console.error);
}).then(message.guild.channels.find('name','admin-logs').sendMessage({
        embed: {
          type: 'rich',
          description: '',
          fields: [{
            name: '**L\'utilisateur <~>**',
            value: banMember.user.username,
            inline: true
          }, {
            name: 'User id',
            value: banMember.id,
            inline: true
          },{
            name: '**Action <~>**',
            value: "ban",
            inline: true
},{
            name: 'Mod茅rateur',
            value: message.author.username,
            inline: true
}],
       
          color: 0xD30000,
          footer: {
            text: 'Moderation',
            proxy_icon_url: ' '
          },

          author: { 
            name: banMember.user.username + "#"+ banMember.user.discriminator,
            icon_url: " ",
            proxy_icon_url: ' '
          }
        }
})).catch(console.error);
        }
       
 else if(message.content.startsWith(prefix +'mute')){
            let modRole = message.guild.roles.find("name", "[Staff]");
    if(!message.guild.roles.exists("name", "Muted")) {
        return  message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :no_entry_sign: Le rôle **Muted** n'existe pas dans ce serveur veuillez le créer pour Mute! :no_entry_sign: ",
          footer: {
            text: "Message par Bender | Bot."
          }
        }}).catch(console.error);
      } 
      if(!message.member.roles.has(modRole.id)) {
        return message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :no_entry_sign: Vous n'avez pas la permissions d'utiliser cette commande ! :no_entry_sign: ",
          footer: {
            text: "Message par Bender | Bot."
          }
        }}).catch(console.error);
      } 
      if(message.mentions.users.size === 0) {
        return message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :no_entry_sign: Merci de spécifié l'utilisateur que vous voulez mute totalment. **Format ~> `!mute @mention`** ! :no_entry_sign: ",
          footer: {
            text: "Message par Bender | Bot."
          }
        }}).catch(console.error);
      }
      let muteMember = message.guild.member(message.mentions.users.first());
      if(!muteMember) {
        return message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :x:  L\'utilisateur que vous avez entré n'est pas valide ! :x:",
          footer: {
            text: "Message par Bender | Bot."
          }
        }}).catch(console.error);
      }
      if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) {
        return message.reply("Je n'ai pas la permissions pour faire cela __(MANAGE_MESSAGES)__ !").catch(console.error);
      }
         if(!message.guild.channels.exists("name", "admin-logs")){
// créer le channel
message.guild.createChannel('admin-logs');
// Affiche un message d'erreur expliquant que le channel n'existait pas
return message.channel.sendMessage("", {embed: {
title: "Erreur:",
color: 0xff0000,
description: " :no_entry_sign: Le salon textuel `admin-logs` n'existait pas, je viens de le créer pour vous :white_check_mark: , Veuillez réessayer :wink:",
footer: {
text: "Message par Bender | Bot."
}
}}).catch(console.error);
}     
let mutedRole = message.guild.roles.find("name", "Muted");
    var time = 500000;
    console.log(muteMember);
      muteMember.addRole(mutedRole).then(member => {
        message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :white_check_mark:  Vous avez bien mute ** "+ muteMember + " dans le serveur "+message.guild.name  + " ! :white_check_mark: ",
          footer: {
            text: "Message par Bender | Bot."
          }
        }}).then(message.guild.channels.find('name','admin-logs').sendMessage({
        embed: {
          type: 'rich',
          description: '',
          fields: [{
            name: '**L\'utilisateur <~>**',
            value: muteMember.user.username,
            inline: true
          }, {
            name: 'User id',
            value: muteMember.id,
            inline: true
          },{
            name: '**Action <~>**',
            value: "mute total",
            inline: true
},{
            name: 'Modérateur',
            value: message.author.username,
            inline: true
}],
       
          color: 0xD30000,
          footer: {
            text: 'Moderation',
            proxy_icon_url: ' '
          },

          author: { 
            name: muteMember.user.username,
            icon_url: " ",
            proxy_icon_url: ' '
          }
        }
})).catch(console.error);
        }
        )}
 
     
        
         else if(message.content.startsWith(prefix +'unmute')){
            let modRole = message.guild.roles.find("name", "[Staff]");
            if(!message.guild.roles.exists("name", "[Staff]")) {
        return  message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :no_entry_sign: Le rôle **[Staff]** n'existe pas dans ce serveur veuillez le créer pour unmute! :no_entry_sign: ",
          footer: {
            text: "Message par Bender | Bot."
          }
        }}).catch(console.error);
      }
    if(!message.guild.roles.exists("name", "Muted")) {
        return  message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :no_entry_sign: Le rôle **Muted** n'existe pas dans ce serveur veuillez le créer pour Unmute! :no_entry_sign: ",
          footer: {
            text: "Message par Bender | Bot."
          }
        }}).catch(console.error);
      } 
      if(!message.member.roles.has(modRole.id)) {
        return message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :no_entry_sign: Vous n'avez pas la permissions d'utiliser cette commande ! :no_entry_sign: ",
          footer: {
            text: "Message par Bender | Bot."
          }
        }}).catch(console.error);
      } 
      if(message.mentions.users.size === 0) {
        return message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :no_entry_sign: Merci de spécifié l'utilisateur que vous voulez unmute totalment. **Format ~> `!unmute @mention`** ! :no_entry_sign: ",
          footer: {
            text: "Message par Bender | Bot."
          }
        }}).catch(console.error);
      }
      let muteMember = message.guild.member(message.mentions.users.first());
      if(!muteMember) {
        return message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :x:  L\'utilisateur que vous avez entré n'est pas valide ! :x:",
          footer: {
            text: "Message par Bender | Bot."
          }
        }}).catch(console.error);
      }
      if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) {
        return message.reply("Je n'ai pas la permissions pour faire cela __(MANAGE_MESSAGES)__ !").catch(console.error);
      }
         if(!message.guild.channels.exists("name", "admin-logs")){
// créer le channel
message.guild.createChannel('admin-logs');
// Affiche un message d'erreur expliquant que le channel n'existait pas
return message.channel.sendMessage("", {embed: {
title: "Erreur:",
color: 0xff0000,
description: " :no_entry_sign: Le salon textuel `admin-logs` n'existait pas, je viens de le créer pour vous :white_check_mark: , Veuillez réessayer :wink:",
footer: {
text: "Message par Bender | Bot."
}
}}).catch(console.error);
}   
let mutedRole = message.guild.roles.find("name", "Muted");
    console.log(muteMember);
      muteMember.removeRole(mutedRole).then(() => {
        message.channel.sendMessage("", {
        embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :white_check_mark:  Vous avez bien unmute ** " + muteMember + " dans le serveur " + message.guild.name + " ! :white_check_mark: ",
          footer: {
            text: "Message par Bender | Bot."
          }
        }
        }).then(message.guild.channels.find('name', 'admin-logs').sendMessage({
          embed: {
            type: 'rich',
            description: '',
            fields: [{
              name: '**L\'utilisateur <~>**',
              value: muteMember.user.username,
              inline: true
            }, {
              name: 'User id',
              value: muteMember.id,
              inline: true
            }, {
              name: '**Action <~>**',
              value: "unmute total",
              inline: true
            }, {
              name: 'Modérateur',
              value: message.author.username,
              inline: true
            }],
            color: 0xD30000,
            footer: {
              text: 'Moderation',
              proxy_icon_url: ' '
            },
            author: {
              name: muteMember.user.username,
              icon_url: " ",
              proxy_icon_url: ' '
            }
          }
        })).catch(console.error);
      }
        )}else if (message.content.startsWith(prefix +"clear")) {
      let modRole = message.guild.roles.find("name", "[Staff]");
            if(!message.guild.roles.exists("name", "[Staff]")) {
        return  message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :no_entry_sign: Le rôle **[Staff]** n'existe pas dans ce serveur veuillez le créer pour Clear! :no_entry_sign: ",
          footer: {
            text: "Message par Bender | Bot."
          }
        }}).catch(console.error);
      } 
      if(!message.member.roles.has(modRole.id)) {
        return   message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :no_entry_sign: Vous n'avez pas la permissions d'utiliser cette commande ! :no_entry_sign: ",
          footer: {
            text: "Message par Bender | Bot."
          }
        }}).catch(console.error);
      }
    var args = message.content.substr(7);
      if(args.length === 0){
        message.channel.sendMessage("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :x: Vous n'avez pas précisser le nombre :x: ",
          footer: {
            text: "Message par Bender | Bot."
          }
        }});
      }
      else {
        var msg;
        if(args.length === 1){
        msg = 2;
      } else {
        msg = parseInt(args[1]);
      }
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Success!",
        color: 0x06DF00,
        description: "Messages Suprimé!",
        footer: {
          text: "Message par Bender | Bot."
        }
      }});
      }
}
else if (msgc.startsWith('?youtube')){
youtube_plugin.respond(message.content, message.channel , client);
}else if (msgc.startsWith(prefix +'google')){
const google = require("google");
const unirest = require("unirest");

  if(msgc.substr(8)) {
    let query = msgc.substr(8);
      con(query);
    let num = (msgc.substr(8).lastIndexOf(" ") + 1);
    if(!query || isNaN(num)) {
      query = msgc.substr(8);
      num = 0;
    }
    if(num < 0 || num > 2) {
      num = 0;
    } else {
      num = parseInt(num);
    }
    unirest.get(`https://kgsearch.googleapis.com/v1/entities:search?query=${encodeURIComponent(query)}&key=${AuthDetails.youtube_api_key}&limit=1&indent=True`).header("Accept", "application/json").end(res => {
      const doSearch = () => {
        google(query, (err, res) => {
          if(err || res.links.length == 0) {
            message.channel.sendMessage("🙅 No results!");
          } else {
            if(num == 0) {
              num = 1;
            }
            for(let i=0; i < Math.min(res.links.length, num); i++) {
              if([`News for ${query}`, `Images for ${query}`].indexOf(res.links[i].title)>-1) {
                res.links.splice(i, 1);
                i--;
                continue;
              }
          message.channel.sendMessage({
        embed: {
          type: 'rich',
          description: '',
          fields: [{
            name: 'Result Google',
            value: `[${res.links[i].title}](`+`${res.links[i].href})`,
            inline: true
          },{
            name: '** **',
            value: `${res.links[i].description}`,
            inline: true
          }],
           thumbnail: {
             url: "http://diylogodesigns.com/blog/wp-content/uploads/2016/04/google-logo-icon-PNG-Transparent-Background.png"
                },
          color: 3447003,
          footer: {
            text: 'by Banane27',
            proxy_icon_url: ' '
          }
        }
});
            }

          }
        });
      };
      
      if(res.status == 200 && res.body.itemListElement[0] && res.body.itemListElement[0].result && res.body.itemListElement[0].result.detailedDescription) {
        message.channel.sendMessage(`\`\`\`${res.body.itemListElement[0].result.detailedDescription.articleBody}\`\`\`<${res.body.itemListElement[0].result.detailedDescription.url}>`).then(() => {
          if(num > 0) {
            doSearch();
          }
        });
      } else {
        doSearch();
      }
    });
  } else {
    con(`Parameters not provided for !google command`);
    message.channel.sendMessage(` ❓❓❓`);
} }else if (msgc.startsWith(prefix +'imdb2123123')){
const unirest = require("unirest");

let  query = msgc.substr(6);
  let type = "";
  if(query.toLowerCase().indexOf("series ")==0 || query.toLowerCase().indexOf("episode ")==0 || query.toLowerCase().indexOf("movie ")==0) {
    type = `&type=${query.substring(0, query.indexOf(" ")).toLowerCase()}`;
    query = query.substring(query.indexOf(" ")+1);
  }
  if(query) {
    unirest.get(`http://www.omdbapi.com/?t=${encodeURIComponent(query)}&r=json${type}`).header("Accept", "application/json").end(res => {
      if(res.status==200 && res.body.Response=="True") {
        message.channel.sendMessage({
                  embed: {
          type: 'rich',
          description: '',
          fields: [{
            name: 'Results Imdb :film_frames:',
            value:  `[${res.body.Title}${type ? "" : (` (${res.body.Type.charAt(0).toUpperCase()}${res.body.Type.slice(1)})`)}](http://www.imdb.com/title/${res.body.imdbID}/)`,
            inline: false
          },{
            name: '** **',
            value:  `\`\`\`${res.body.Plot}\`\`\``,
            inline: false
          },{
            name: 'Year',
            value:  `${res.body.Year}`,
            inline: true
          },{
            name: 'Rated',
            value:  `${res.body.Rated}`,
            inline: true
          },{
            name: 'Runtime',
            value:  `${res.body.Runtime}`,
            inline: true
          },{
            name: 'Director',
            value:  `${res.body.Director}`,
            inline: true
          },{
            name: 'Writer',
            value:  `${res.body.Writer}`,
            inline: true
          },{
            name: 'Actors',
            value:  `${res.body.Actors}`,
            inline: true
          },{
            name: 'Genre(s)',
            value:  `${res.body.Genre}`,
            inline: false
          },{
            name: 'Rating',
            value:  `${res.body.imdbRating} out of ${res.body.imdbVotes} votes`,
            inline: true
          },{
            name: 'Awards',
            value:  `${res.body.Awards}`,
            inline: true
          },{
            name: 'Country',
            value:  `${res.body.Country}`,
            inline: true
          }],
          color: 3447003,
          footer: {
            text: 'by Banane27',
            proxy_icon_url: ' '
          },
           author: {
            name: message.author.username,
            icon_url: message.author.avatarURL,
            proxy_icon_url: ' '
          }
        }
        })
      } else {
        con(`No IMDB entries found for ` + msgc.substr(6));
        message.channel.sendMessage("Nothing found in IMDB 😶🚫");
      }
    });
  } else {
    message.channel.sendMessage(`U WOT M8... you need to use !imdb name film`);
  }          


  
                        
}else if (msgc === (prefix +'dog')){
const randomPuppy = require("random-puppy");

      randomPuppy().then(url => {
        message.channel.sendMessage({
            embed: {
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL,
                    url: "http://takohell.com:3000"
                },
                color: 0x00FF00,
                image: {
                    url: url
                  }
                }
            });
        });
      }})


 
    
  

app.get('/', function (res) {
    var obj = new Object();
    obj.test = "Test moi";
    obj.rep = "test réussi !";
    var json = JSON.stringify(obj);
    res.send(json);
});

app.get('/playlist', function (res) {
    var json = JSON.stringify(music.tab);
    res.send(json);
})


app.listen(AuthDetails.port);
client.login('Token')
