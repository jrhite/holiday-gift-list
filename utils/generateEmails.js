const { faker } = require('@faker-js/faker');

function generateRandomEmails() {
  const emails = [];
  for (let i = 0; i < 1000; i++) {
    emails.push(`"${faker.internet.email()}"`);
  }

  return `[${emails.join(',')}]`;
}

console.log(generateRandomEmails());
