import { FaTrash } from 'react-icons/fa';
import { IconButton } from 'components/IconButton/IconButton';
import { useDeleteTodo } from 'hooks/useDeleteTodo';
import css from './TodoItem.module.css';

export const TodoItem = ({ id, content }) => {
  const { deleteTodo, isDeleting } = useDeleteTodo();

  return (
    <div className={css.wrapper}>
      <p className={css.content}>{content}</p>
      <IconButton
        icon={FaTrash}
        onClick={() => deleteTodo(id)}
        loading={isDeleting}
      />
    </div>
  );
};
