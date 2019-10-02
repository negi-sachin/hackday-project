  
const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: "API KEY",
  apiSecret: 'API SECRET'
});

function sendmessage(){
    nexmo.message.sendSms(
        'FROM', 'TO', 'message here',
          (err, responseData) => {
            if (err) {
              console.log(err);
            } else {
              console.dir(responseData);
            }
          }
       );

}

sendmessage();
