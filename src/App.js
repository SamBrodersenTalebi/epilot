import './App.css';
import { useEffect } from 'react';
import { Container, Heading } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { initialLists } from './reducers/cardReducer';
import List from './components/List';
require('dotenv').config();

function App() {
  //The useDispatch-hook provides any React component access to the dispatch-function
  const dispatch = useDispatch();
  let todo = useSelector((state) => state[0].todoList);
  let done = useSelector((state) => state[1].doneList);
  let loading = useSelector((state) => state[2].loading);

  useEffect(() => {
    dispatch(initialLists());
  }, []);

  return (
    <Container maxW='4xl' centerContent>
      {!loading ? (
        <>
          <Heading textAlign='center'>Done</Heading>
          <List todos={done} completed={true} />
          <Heading textAlign='center'>To Do</Heading>
          <List todos={todo} completed={false} />
        </>
      ) : (
        <div>Loading please wait</div>
      )}
    </Container>
  );
}

export default App;
