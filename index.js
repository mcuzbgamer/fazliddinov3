let ar = process.argv
 const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
    host: 'ir.skyblock.uz',
    port: 25566,
    username: FazliddinovBot11,
    version: "1.18.2"
})

let password = "fazliddinov"
 
 bot.on('chat', function(username, message) {
      if(username=='FamousTrain1733' && message.startsWith(ar[3]))
    {
        bot.chat(message.substring(1))
    }
})

bot.on('messagestr', (message) => {
    console.log(message)
     
    if (message.includes("/register")) {
        bot.chat(`/register ${password} ${password}`)
    }
    
    if (message.includes("/login")) {
        bot.chat(`/login ${password}`)
    }
})

async function dig() {
    if (!bot.heldItem || !bot.heldItem.name.includes('pickaxe')) {
          var pickaxe = bot.inventory.items().filter(i => i.name.includes('pickaxe'))[0];
          if (pickaxe) await bot.equip(pickaxe, 'hand')
          if(!pickaxe) bot.quit();
        }
    var block = bot.blockAtCursor(4);
    if (!block) return setTimeout(function() {
          dig();
        }, 100);
    await bot.dig(block, 'ignore', 'raycast')
    dig()
}

bot.on('chat', (username, message) => {
    if(username=='FamousTrain1733') {
          if(message==ar[4])
          {
                  dig(); kovla_F11
                }
        }
})


bot.on('end', console.log)
bot.on('error', console.log)
bot.on('kicked', console.log)