const TelegramBot = require( `node-telegram-bot-api` ) const TOKEN = `AAFQXb7PuFAkcJBWLx8bUq-O8dPvXEywejg` const bot = new TelegramBot( TOKEN, { polling: true } )
bot.on('message', function(msg){ console.log('msg', msg) })
bot.onText( /\/echo (.*)/, function(msg, match){ console.log( `echo msg: `, msg ) console.log( `echo match: `, match ) })
bot.sendMessage( id, text )
var logErrorEcho = function logErrorEcho(msg) { return function (err) { return console.log(msg, err); }; }; var logSuccessEcho = function(msg, match){ return function(data){ console.log( 'Success:', data); }; }; var sendEcho = function(msg, match){ bot.sendMessage( msg.chat.id, match[ 1 ] ) .then( logSuccessEcho( msg, match ) ) .catch( logErrorEcho( 'Error:') ); }; bot.onText( /\/echo (.*)/, sendEcho);
