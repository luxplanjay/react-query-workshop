import css from './TodoForm.module.css';
import { useCreateTodo } from 'hooks/useCreateTodo';

export const TodoForm = () => {
  const { createTodo, isCreating } = useCreateTodo();

  const handleSubmit = evt => {
    evt.preventDefault();
    createTodo(evt.currentTarget.elements.content.value);
    evt.currentTarget.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <textarea className={css.textarea} name="content" rows="3" autoFocus />
      <button className={css.button} type="submit" disabled={isCreating}>
        Create todo
      </button>
    </form>
  );
};
