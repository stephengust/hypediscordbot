const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '.';

client.once('ready', () => {
    console.log('HYPE is online.')
});





client.once('ready', () => {
    console.log('Hype working')
    client.user.setActivity('over HYPE servers.' , { type: "WATCHING" } )
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //help command
    if(command === 'help'){
        message.author.send('Beta');
        message.channel.send('Check your DMs.')
    }

    //instagram
    if(command === 'instagram'){
        message.channel.send('@RealTeamHYPE - https://www.instagram.com/realteamhype');
    }

    if(command === 'ig'){
        message.channel.send('@RealTeamHYPE - https://www.instagram.com/realteamhype');
    }

    if(command === 'insta'){
        message.channel.send('@RealTeamHYPE - https://www.instagram.com/realteamhype');
    }

    if(command === 'gram'){m 
        message.channel.send('@RealTeamHYPE - https://www.instagram.com/realteamhype');
    }
    

    //twitch
    if(command === 'twitch'){
        message.channel.send('@ActualTeamHYPE - https://www.twitch.tv/actualteamhype');
    }
  
    if(command === 'ttv'){
        message.channel.send('@ActualTeamHYPE - https://www.twitch.tv/actualteamhype');
    }
    
    if(command === 'live'){
        message.channel.send('@ActualTeamHYPE - https://www.twitch.tv/actualteamhype');
    }
        
    if(command === 'stream'){
        message.channel.send('@ActualTeamHYPE - https://www.twitch.tv/actualteamhype');
    }

    if(command === 'watch'){
        message.channel.send('@ActualTeamHYPE - https://www.twitch.tv/actualteamhype');
    }

    //twitter
    if(command === 'twitter'){
        message.channel.send('@TeamHYPEfr - https://www.twitter.com/teamhypefr');
    }
    
    if(command === 'updates'){
        message.channel.send('@TeamHYPEfr - https://www.twitter.com/teamhypefr');
    }

    if(command === 'tweet'){
        message.channel.send('@TeamHYPEfr - https://www.twitter.com/teamhypefr');
    }

    if(command === 'tweets'){
        message.channel.send('@TeamHYPEfr - https://www.twitter.com/teamhypefr');
    }

    if(command === 'update'){
        message.channel.send('@TeamHYPEfr - https://www.twitter.com/teamhypefr');
    }

    if(command === 'news'){
        message.channel.send('@TeamHYPEfr - https://www.twitter.com/teamhypefr');
    }

    //youtube
    if(command === 'youtube'){
        message.channel.send('@Team HYPE - https://bit.ly/ythype');
    }

    if(command === 'yt'){
        message.channel.send('@Team HYPE - https://bit.ly/ythype');
    }

    if(command === 'vids'){
        message.channel.send('@Team HYPE - https://bit.ly/ythype');
    }

    if(command === 'vid'){
        message.channel.send('@Team HYPE - https://bit.ly/ythype');
    }

    if(command === 'video'){
        message.channel.send('@Team HYPE - https://bit.ly/ythype');
    }

    if(command === 'videos'){
        message.channel.send('@Team HYPE - https://bit.ly/ythype');
    }

    if(command === 'channel'){
        message.channel.send('@Team HYPE - https://bit.ly/ythype');
    }

    if(command === 'demonitized'){
        message.channel.send('@Team HYPE - https://bit.ly/ythype');
    }

    //tiktok
    if(command === 'tiktok'){
        message.channel.send('@RealTeamHYPE - https://www.tiktok.com/@realteamhype');
    }

    if(command === 'tik'){
        message.channel.send('@RealTeamHYPE - https://www.tiktok.com/@realteamhype');
    }


    if(command === 'tok'){
        message.channel.send('@RealTeamHYPE - https://www.tiktok.com/@realteamhype');
    }

    if(command === 'charli'){
        message.channel.send('@RealTeamHYPE - https://www.tiktok.com/@realteamhype');
    }
    
    //commands commands
    
    if(command === 'commands'){
        message.channel.send('The main commands consist of `.help`, `.instagram`, `.twitter`, `.youtube`, and `.tiktok`');
        message.channel.send('```Tip you can also do `.commands+` to see a complete list.```');
    }

    if(command === 'commands+'){
        message.channel.send('`.help` `.instagram` `.ig` `.insta` `.gram` `.ttv` `.live` `.stream` `.watch` `.twitter` `.updates` `.tweet` `.tweets` `.update` `.news` `.youtube` `.yt` `.vids` `.vid` `.video` `.videos` `.channel` `.demonitized` `.tiktok` `.tik` `.tok` `.charli` `.commands` `.commands+`');
    }

    //stop bot

    if(command === 'off=2833'){
        message.channel.send('Shutting down.');
        client.destroy();
    }
    
    //status reset
    if(command === 'status=2833'){
        client.user.setActivity('over HYPE servers.' , { type: "WATCHING" } );
    }

});     

client.login('NzY0MjMwMzcyNDU5NTQ0NjE5.X4DO_w.DABq3MnDM-EAVnttJxGxcszgn7Q');
