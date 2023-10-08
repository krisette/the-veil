const fs = require('fs');
const path = require('path');

const cardsJson = require(path.join(__dirname, '../data/card_data.json'));


function updateImagePaths(cards) {
  return cards.map((card) => {
    // extract filename from image path, no extension
    const filenameWithExt = card.image.split('/').pop();
    const filename = filenameWithExt.split('.').slice(0, -1).join('.');
    // update image property on each object
    card.image = filename;
    return card;
  });
}

const updatedCardsJson = {
  ...cardsJson,
  cards: updateImagePaths(cardsJson.cards),
};

fs.writeFileSync(
  path.join(__dirname, '../data/card_data.json'),
  JSON.stringify(updatedCardsJson, null, 2)
);

console.log('addImages.js done!!!');
