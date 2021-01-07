import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeList, initialLists } from '../reducers/cardReducer';

function List({ todos, completed }) {
  const dispatch = useDispatch();

  const updateBlog = async (cardId, listId) => {
    console.log('hello', cardId, listId);
    dispatch(changeList(cardId, listId));
    dispatch(initialLists());
  };

  return (
    <Table variant='striped' size='md' m={3}>
      <Thead>
        <Tr>
          <Th>Title</Th>
          <Th>Description</Th>
          <Th>State</Th>
        </Tr>
      </Thead>
      <Tbody>
        {todos.map((todo) => {
          return (
            <Tr key={todo.id}>
              <Td>{todo.name}</Td>
              <Td>{todo.desc}</Td>
              <Td>
                {completed ? (
                  <CheckIcon
                    w={6}
                    h={6}
                    _hover={{ color: 'teal.600' }}
                    onClick={() =>
                      //id of opposite list
                      updateBlog(todo.id, process.env.TODO_ID)
                    }
                  />
                ) : (
                  <CloseIcon
                    w={6}
                    h={6}
                    _hover={{ color: 'teal.300' }}
                    onClick={() =>
                      //id of opposite list
                      updateBlog(todo.id, process.env.DONE_ID)
                    }
                  />
                )}{' '}
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
}

export default List;
/*        

*/
