require('dotenv').config();

var mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECTION);

var Word = require('./models/word');

var wordsArr = [
  {
    word: 'tasty',
    type: 'adjective'

  },
  {
    word: 'coolio',
    type: 'adjective'
  },
  {
    word: 'large and in charge',
    type: 'adjective'
  },
  {
    word: 'avery',
    type: 'adjective'
  },
  {
    word: 'alan',
    type: 'adjective'
  },
  {
    word: 'adorkable',
    type: 'adjective'
  },
  {
    word: 'doable',
    type: 'adjective'
  },
  {
    word: 'charmingly ghetto',
    type: 'adjective'
  },
  {
    word: 'fungry',
    type: 'adjective'
  },
  {
    word: 'giganticus',
    type: 'adjective'
  },
  {
    word: 'joyngous',
    type: 'adjective'
  },
  {
    word: 'talenful',
    type: 'adjective'
  },
  {
    word: 'adorablicious',
    type: 'adjective'
  },
  {
    word: 'beautifulest',
    type: 'adjective'
  },
  {
    word: 'confidentical',
    type: 'adjective'
  },
  {
    word: 'excitapated',
    type: 'adjective'
  },
  {
    word: 'importeresting',
    type: 'adjective'
  },
  {
    word: 'phat',
    type: 'adjective'
  },
  {
    word: 'naff',
    type: 'adjective'
  },
  {
    word: 'quirky',
    type: 'adjective'
  },
  {
    word: 'elena',
    type: 'adjective'
  },
  {
    word: 'edgy',
    type: 'adjective'
  },
  {
    word: 'eglaf',
    type: 'adjective'
  },
  {
    word: 'lame',
    type: 'adjective'
  },
  {
    word: 'fugly',
    type: 'adjective'
  },
  {
    word: 'Shatner commas',
    type: 'adjective'
  },
  {
    word: 'Assclown',
    type: 'adjective'
  },
  {
    word: 'Creeper',
    type: 'adjective'
  },
  {
    word: 'Caraoke',
    type: 'adjective'
  },
  {
    word: 'execubabble',
    type: 'adjective'
  },
  {
    word: 'finger guns',
    type: 'adjective'
  },
  {
    word: 'floordrobe',
    type: 'adjective'
  },
  {
    word: 'Festivus',
    type: 'adjective'
  },
  {
    word: 'farticles',
    type: 'adjective'
  },
  {
    word: 'murica',
    type: 'adjective'
  },
  {
    word: 'slow burn',
    type: 'adjective'
  },
  {
    word: 'spot tease',
    type: 'adjective'
  },
  {
    word: 'beer thirty',
    type: 'adjective'
  },
  {
    word: 'Bing',
    type: 'adjective'
  },
  {
    word: 'textrovert',
    type: 'adjective'
  },
  {
    word: 'peasantvision',
    type: 'adjective'
  },
  {
    word: 'passhole',
    type: 'adjective'
  },
  {
    word: 'webshite',
    type: 'adjective'
  },
  {
    word: 'resting bitch face',
    type: 'adjective'
  },
  {
    word: 'roomate chicken',
    type: 'adjective'
  },
  {
    word: 'pregret',
    type: 'adjective'
  },
  {
    word: 'laundry limbo',
    type: 'adjective'
  },
  {
    word: 'last texter',
    type: 'adjective'
  },
  {
    word: 'Headphone Zombie',
    type: 'adjective'
  },
  {
    word: 'hot mess',
    type: 'adjective'
  },
//added verbs
{
  word: 'Kill',
  type: 'verb'
},
{
  word: 'Burn',
  type: 'verb'
},
{
  word: 'Accelerate',
  type: 'verb'
},
{
  word: 'Identify',
  type: 'verb'
},
{
  word: 'Decide',
  type: 'verb'
},
{
  word: 'Receive',
  type: 'verb'
},
{
  word: 'Sell',
  type: 'verb'
},
{
  word: 'Walk',
  type: 'verb'
},
{
  word: 'Create',
  type: 'verb'
},
{
  word: 'Miss',
  type: 'verb'
},
{
  word: 'Poke',
  type: 'verb'
},
{
  word: 'Remember',
  type: 'verb'
},
{
  word: 'Express',
  type: 'verb'
},
{
  word: 'Captivate',
  type: 'verb'
},{
  word: 'Advocate',
  type: 'verb'
},
// added noun
{
  word: 'Lips',
  type: 'noun'
},
{
  word: 'Hand',
  type: 'noun'
},
{
  word: 'Fish',
  type: 'noun'
},
{
  word: 'Milk Shake',
  type: 'noun'
},
{
  word: 'Popsicle',
  type: 'noun'
},
{
  word: 'Chocolate',
  type: 'noun'
},
{
  word: 'Radio',
  type: 'noun'
},
{
  word: 'Texas',
  type: 'noun'
},
{
  word: 'Scooter',
  type: 'noun'
},
{
  word: 'Riely',
  type: 'noun'
},
{
  word: 'We Work',
  type: 'noun'
},
{
  word: 'General Assembly',
  type: 'noun'
},
{
  word: 'Austin',
  type: 'noun'
},
{
  word: 'Banana',
  type: 'noun'
},
{
  word: 'Helmet',
  type: 'noun'
},
{
  word: 'Karate',
  type: 'noun'
},
{
  word: 'Idiot',
  type: 'noun'
},
{
  word: 'Leash',
  type: 'noun'
},
{
  word: 'Shark',
  type: 'noun'
},
{
  word: 'Dinosaur',
  type: 'noun'
},
{
  word: 'Bubble Butt',
  type: 'noun'
},
{
  word: 'Taco',
  type: 'noun'
},
{
  word: 'Rotten egg',
  type: 'noun'
},
{
  word: 'Git hub',
  type: 'noun'
},
{
  word: 'Stinky socks',
  type: 'noun'
},
{
  word: 'Lipstick',
  type: 'noun'
},
{
  word: 'Mike',
  type: 'noun'
},
{
  word: 'iPhone',
  type: 'noun'
},
{
  word: 'Refried bean',
  type: 'noun'
},
{
  word: 'Hot dog',
  type: 'noun'
},


]
