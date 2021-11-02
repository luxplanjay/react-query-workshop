import axios from 'axios';
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from 'react-query';

const deleteTodo = async id => {
  const resp = await axios.delete(`/todos/${id}`);
  return resp.data;
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(deleteTodo, {
    onSuccess() {
      queryClient.invalidateQueries('/todos');
      toast.success('Todo deleted');
    },
  });
  return {
    deleteTodo: mutateAsync,
    isDeleting: isLoading,
  };
};
