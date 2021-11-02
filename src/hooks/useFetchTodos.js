import { useRef } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import toast from 'react-hot-toast';

const fetchTodos = async () => {
  const response = await axios.get('/todos');
  return response.data;
};

export const useFetchTodos = () => {
  const hasFetched = useRef(false);
  const { data, isLoading } = useQuery('/todos', fetchTodos, {
    onSuccess() {
      if (!hasFetched.current) {
        toast.success('Todos loaded');
        hasFetched.current = true;
      }
    },
  });

  return {
    todos: data,
    isLoading,
  };
};
