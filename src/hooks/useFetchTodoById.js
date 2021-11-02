import { useQuery } from 'react-query';
import axios from 'axios';

const fetchTodoById = async id => {
  const response = await axios.get(`/todos/${id}`);
  return response.data;
};

export const useFetchTodoById = id => {
  const { data, isLoading } = useQuery(['/todos', id], () => fetchTodoById(id));
  return {
    todo: data,
    isLoading,
  };
};
