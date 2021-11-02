import { TodoItem } from '../TodoItem/TodoItem';
import css from './TodoList.module.css';

export const TodoList = ({ todos }) => {
  return (
    <div className={css.list}>
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};
