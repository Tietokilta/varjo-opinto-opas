import { ChangeEventHandler } from 'react'

const Searchbar = ({
  value,
  onChange,
  slim,
}: {
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
  slim: boolean
}) => {
  return (
    <input
      autoFocus
      type="text"
      className={`${
        slim ? 'flex-grow px-6 py-3 text-lg' : 'px-12 py-6 text-4xl'
      } border-1 shadow-xs rounded-3xl border-2 border-gray-300 font-semibold transition-all focus:scale-[1.01] focus:border-blue-800 focus:shadow-lg focus:outline-0`}
      placeholder="Search with a course name or code..."
      value={value}
      onChange={onChange}
    ></input>
  )
}

export default Searchbar
