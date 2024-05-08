let games = [
  {
    id: 1,
    title: 'Call of Duty',
    platform: ['windows', 'mac', 'linux'],
  },
  {
    id: 2,
    title: 'Fortnite',
    platform: ['windows', 'mac', 'linux'],
  },
  {
    id: 3,
    title: 'GTA V',
    platform: ['windows', 'mac', 'linux'],
  },
  {
    id: 4,
    title: 'Rocket League',
    platform: ['windows', 'mac', 'linux'],
  },
  {
    id: 5,
    title: 'League of Legends',
    platform: ['windows', 'mac', 'linux'],
  },
];

let authors = [
  {
    id: 1,
    name: 'Neeraj ',
    verified: true,
  },
  {
    id: 2,
    name: 'Sachin Tendulkar',
    verified: true,
  },
  {
    id: 3,
    name: 'Virat Kohli',
    verified: true,
  },
];
let reviews = [
  {
    id: 1,
    rating: 5,
    content: 'I love this game',
    authorId: 1,
    gameId: 1,
  },
  {
    id: 2,
    rating: 6,
    content: 'I love this game',
    authorId: 2,
    gameId: 1,
  },
  {
    id: 3,
    rating: 5,
    content: 'I love this game',
    authorId: 3,
    gameId: 1,
  },
  {
    id: 4,
    rating: 8,
    content: 'I love this game',
    authorId: 1,
    gameId: 2,
  },
  {
    id: 5,
    rating: 2,
    content: 'I love this game',
    authorId: 2,
    gameId: 2,
  },
  {
    id: 6,
    rating: 7,
    content: 'I love this game',
    authorId: 3,
    gameId: 2,
  },
  {
    id: 7,
    rating: 10,
    content: 'I love this game',
    authorId: 1,
    gameId: 3,
  },
  {
    id: 8,
    rating: 5,
    content: 'I love this game',
    authorId: 3,
    gameId: 5,
  },
];

export default { games, authors, reviews };
