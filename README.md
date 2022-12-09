# cgas-frontend

Fooman is a fun and challenging word guessing game written in React.js. The inclusion of two modes, Chill and God, adds an extra layer of difficulty and variety to the game, allowing players to choose the level of challenge that they want to face. I hope you have a lot of fun playing Fooman! It is deployed at https://foodmancgas.netlify.app/

The player starts with a certain number of lives, and for each incorrect guess, a life is lost. The game ends when the player either correctly guesses the word or runs out of lives. The word to be guessed is typically chosen at random from a list of words, and the player must guess the word before running out of lives.

We use the list of ingredient provided to us by the Cosy labs for the words that are to be guesssed. There are two modes in the game: Chill mode and God mode. We thought that the frequently occuring words are easier to guess and hence uses the words with the frequency greater than 200 in the chill mode. For god mode, the level of difficulty becomes as we are using less commonly occuring words < 200 which are difficult to guess.

For each game, we make a request to the backend to get a random word, depending upon the mode which is then guessed by the user.

In both modes, the player has a maximum of six incorrect attempts before the game ends. If the player runs out of lives or correctly guesses the word, the game ends and a new word is selected for the next game.