import axios from 'axios';
import toast from 'react-hot-toast';
import { useQueryClient, useMutation } from 'react-query';

const createTodo = async content => {
  const resp = await axios.post('/todos', { content });
  return resp.data;
};

export const useCreateTodo = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(createTodo, {
    onSuccess() {
      queryClient.invalidateQueries('/todos');
      toast.success('Todo created');
    },
  });
  return {
    createTodo: mutateAsync,
    isCreating: isLoading,
  };
};
