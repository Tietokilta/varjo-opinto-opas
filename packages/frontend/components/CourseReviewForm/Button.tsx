const Button = ({
  text,
  active,
  onClick,
}: {
  text: string
  active: boolean
  onClick: () => void
}) => {
  return (
    <button
      disabled={!active}
      className={`rounded-lg px-8 py-4 ${
        active
          ? 'animate-pulse bg-green-400 text-white'
          : 'bg-gray-300 text-gray-400'
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
