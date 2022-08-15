const exp = require('express');
const res = require('express/lib/response');
const qrcode = require('qrcode-terminal');
const ip = require('ip');
const ipAddress = ip.address();


const { Client, LocalAuth } = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

const ep = exp();
ep.use(exp.json());


client.on('ready', () => {
    console.log('Client is ready!');
});

 
client.on('message', message => {
	if(message.body === 'ping') {
		client.sendMessage(message.from, 'pong');
	}
    console.log(message);
});
 

ep.get('/name', (req,resp) => {
    resp.send('my name is prakash');
    console.log("have got requst");

    client.initialize();

    console.log("done");

})

ep.post('/test', (req,resp) => {
  
      if(req.body.name)
      {
          console.log("defined");
          console.log(req.body.name);
          console.log(typeof req.body.name);
         // sendM("got request");
         sendM(req.body.name);
        //  resp.send('name not defined');
      }
      else{
          console.log("not defined");
      }
      resp.send();
        //resp.send('testing done' + req.body.name);  
  })

//const myTimeout = setTimeout(sendM, 60000, "prakashkumar");
 function sendM(text)
{
      // Number where you want to send the message.
 const number = "+919739644488";

 // Your message.
//const text = "Hey john";

 // Getting chatId from the number.
 // we have to delete "+" from the beginning and add "@c.us" at the end of the number.
const chatId = number.substring(1) + "@c.us";

// Sending message.
client.sendMessage(chatId, text);
}


const port = process.env.PORT || 4321 
ep.listen(port, function(){
    console.log(`i am listening to  posr ${port}`);
    console.log(`Network access via: ${ipAddress}:${port}!`);
})  

