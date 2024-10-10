const buttonStyle = {
  outline: 'none',
  boxShadow: 'none',
  border: 'none',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  appearance: 'none',
  WebkitTapHighlightColor: 'transparent',
};

export const Button = ({
  children,
  buttonClassName,
  disabled,
  onClick }) => {
  return (
    <button
      style={buttonStyle}
      type='button'
      className={buttonClassName}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
