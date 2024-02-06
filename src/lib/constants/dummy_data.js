const dummy_seeker = {
  firstName: process.env.DUMMY_FIRST_NAME || 'Gary',
  lastName: process.env.DUMMY_LAST_NAME || 'Host',
  emailAddress: process.env.DUMMY_EMAIL_ADDRESS || 'g.host@mail.com',
  password: process.env.DUMMY_PASSWORD || 'password',
};

export { dummy_seeker };
