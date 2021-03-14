const User = {
  _id: ObjectId('604e160bef385e23fc849e8a'),
  subscription: 'free',
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNGUxNjBiZWYzODVlMjNmYzg0OWU4YSIsImlhdCI6MTYxNTczMDY1MiwiZXhwIjoxNjE1NzM3ODUyfQ.BXjRhLbytH6SB-0xjScrAanikzwEb0GDjasGxLeTjO4',
  email: 'slvitalik24@ukr.net',
  password: '$2a$08$mx8CtwTVUlY4eCnRF7nmqOgQ29u9mqO8IBP4Us.QmSHLvsDKNt0oa',
  avatarURL: '604e160bef385e23fc849e8a\\1615730683668-slonik.jpg',
};

const users = [];
users[0] = User;

const newUser = { email: 'test_email@mail.com', password: '87654321' };

const contacts = [
  {
    _id: ObjectId('604e2dc2b59cdc167448acc3'),
    subscription: 'free',
    name: 'Goblin',
    email: 'im_goblin@ukr.net',
    phone: '(798) 223-4305',
    owner: ObjectId('604e160bef385e23fc849e8a'),
  },

  {
    _id: ObjectId('604e2e47b59cdc167448acc4'),
    subscription: 'free',
    name: 'Fiksik',
    email: 'fiksik@ukr.net',
    phone: '(888) 663-7309',
    owner: ObjectId('604e160bef385e23fc849e8a'),
  },

  {
    _id: ObjectId('604e2e78b59cdc167448acc5'),
    subscription: 'free',
    name: 'Simka',
    email: 'simka990012@ukr.net',
    phone: '(222) 365-7708',
    owner: ObjectId('604e160bef385e23fc849e8a'),
  },
];

const newContact = {
  name: 'Nolik',
  email: 'nolik@mail.com',
  phone: '(908) 7615-1876',
  subscription: 'premium',
};

module.exports = { User, users, newUser, contacts, newContact };
