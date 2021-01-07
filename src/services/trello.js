import fetch from 'unfetch';
require('dotenv').config();

const token = process.env.TOKEN;
const apiKey = process.env.API_KEY;

export const getAllCardsFromList = async (listId) => {
  //get all cards for a given list id
  //GET /1/lists/{listId}/cards
  const res = await fetch(
    `https://api.trello.com/1/lists/${listId}/cards/?key=${apiKey}&token=${token}`
  );
  return res.json();
};

export const update = async (cardId, listId) => {
  // PUT /1/cards/{cardID}?idList={listID}
  //listId is the list you want to move it to.
  await fetch(
    `https://api.trello.com/1/cards/${cardId}/?idList=${listId}&key=${apiKey}&token=${token}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};
