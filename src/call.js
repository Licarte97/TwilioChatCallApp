// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// and set the environment variables. See http://twil.io/secure
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

let call = (number) => {
  const client = require('twilio')(accountSid, authToken);


  number = '+'+number;

  console.log("calling: "+number);
  // client.messages.create({
  //   body: 'Hello from twilio node app',
  //   to: number,  // Text this number
  //   from: '+13344907263' // From a valid Twilio number
  // })
  // .then((message) => {
  //   console.log(message.sid); 
  // });

  client.calls
      .create({
          url: 'http://demo.twilio.com/docs/voice.xml',
          to: number,
          from: '+13344907263'
        })
      .then(call => {
        console.log(call.sid);
      })
      .catch(e => {
        console.log('Error: ' , e.code, e.message);
      });

};


module.exports.call =  call;