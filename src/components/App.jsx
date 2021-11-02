import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { TodoList } from './TodoList/TodoList';
import { TodoForm } from 'components/TodoForm/TodoForm';
import { useFetchTodos } from 'hooks/useFetchTodos';

axios.defaults.baseURL = 'https://611560228f38520017a38499.mockapi.io/api/v1';

export const App = () => {
  const { todos } = useFetchTodos();

  return (
    <>
      <TodoForm />
      {todos && <TodoList todos={todos} />}
      <Toaster position="top-right" />
    </>
  );
};
