console.log('Starting...');
console.log('zap zap engine')

const { create, Client} = require('@open-wa/wa-automate');

// or
// import { create, Client } from '@open-wa/wa-automate';

function start(client) {
    // se receber oi kkkk
    client.onMessage(async message => {
        if (message.body === 'oi') {
          await client.sendFileFromUrl(message.from,'https://i.imgur.com/yarii.gif','','Oi!')
        }
        if (message.body === 'oii') {
          await client.sendFileFromUrl(message.from,'https://i.imgur.com/yarii.gif','','Oi!')
        }
      if (message.body === 'oie') {
        await client.sendFileFromUrl(message.from,'https://i.imgur.com/yarii.gif','','Oi!')
        }
        if (message.body === 'Oi') {
          await client.sendFileFromUrl(message.from,'https://i.imgur.com/yarii.gif','','Oi!')
         }
         if (message.body === 'Oie') {
          await client.sendFileFromUrl(message.from,'https://i.imgur.com/yarii.gif','','Oi!')
        }
    });

    // listener
    client.onMessage(message=>{
        console.log("[MENSAGEM DE " + message.from + "] :" + message.text);
    })

  }
  
  create().then((client) => start(client));



