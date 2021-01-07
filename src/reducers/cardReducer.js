import { getAllCardsFromList, update } from '../services/trello';
require('dotenv').config();

//initial state of empty array
const reducer = (
  state = [{ todoList: [] }, { doneList: [] }, { loading: true }],
  action
) => {
  switch (action.type) {
    case 'INIT':
      return [...action.data];
    case 'UPDATE':
      return [...action.data];
    default:
      return state;
  }
};

const helperFunction = async () => {
  console.log(process.env.TOKEN);
  //TODO_ID
  const todo = await getAllCardsFromList(process.env.TODO_ID);
  //DONE_ID
  const done = await getAllCardsFromList(process.env.DONE_ID);

  return { done, todo };
};

/*
Thanks to redux thunk
One can make asynchronous action creators, 
which first wait for some operation to finish, after which they then dispatch the real action. 
*/
export const initialLists = () => {
  return async (dispatch) => {
    const { done, todo } = await helperFunction();
    dispatch({
      type: 'INIT',
      data: [{ todoList: todo }, { doneList: done }, { loading: false }],
    });

    return { todo, done };
  };
};

export const changeList = (cardId, listId) => {
  return async (dispatch) => {
    await update(cardId, listId);
    const { done, todo } = await helperFunction();
    //console.log('done ', done);
    //console.log('todo ', todo);
    dispatch({
      type: 'UPDATE',
      data: [{ todoList: todo }, { doneList: done }, { loading: false }],
    });
  };
};

export default reducer;
