export default function Button({
  children,
  variant = 'primary',
  onClick,
  className = '',
}) {
  return (
    <button
      type="button"
      className={`btn btn--${variant} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
