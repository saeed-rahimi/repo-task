" use strict"
const user1 = { username: "JaneDoe", language: "Spanish" };
const user2 = {};


function getWelcomeMessage(user) {
  const username = user.username || "Guest";
  const language = user.language || "English";
  
  // 2. Return the welcome message.
  return `Hello, ${username}! Welcome to our site in ${language}.`;
}


console.log(getWelcomeMessage(user1)); 
console.log(getWelcomeMessage(user2)); 
