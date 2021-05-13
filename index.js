const mcServer = require('flying-squid');

const server = mcServer.createMCServer({
  'motd': 'GDManjaro\'s Minecraft Server',
  'port': 25565,
  'max-players': 10,
  'online-mode': false,
  'logging': true,
  'gameMode': 1,
  'difficulty': 1,
  'worldFolder':'world',
  'generation': {
    'name': 'diamond_square',
    'options':{
      'worldHeight': 80
    }
  },
  'kickTimeout': 10000,
  'plugins': {

  },
  'modpe': false,
  'view-distance': 10,
  'player-list-text': {
    'header':'Flying squid',
    'footer':'Test server'
  },
  'everybody-op': false,
  'max-entities': 100,
  'version': '1.16.5'
});
const mcData = require('minecraft-data')(server.version);

