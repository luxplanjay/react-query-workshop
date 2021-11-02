import { ImSpinner3 } from 'react-icons/im';
import css from './IconButton.module.css';

export const IconButton = ({
  icon: Icon,
  onClick = () => null,
  loading = false,
}) => {
  return (
    <button
      className={css.button}
      type="button"
      onClick={onClick}
      disabled={loading}
    >
      {loading ? (
        <ImSpinner3 size="24" className={css.spinner} />
      ) : (
        <Icon size="16" />
      )}
    </button>
  );
};
