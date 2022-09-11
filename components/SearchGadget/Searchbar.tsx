import { ChangeEventHandler } from 'react'

const Searchbar = ({
  value,
  onChange,
}: {
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
}) => {
  return (
    <input
      type="text"
      className="border-1 shadow-xs w-full rounded-3xl border-2 border-gray-300 py-6 px-12 text-4xl font-semibold transition-all focus:scale-[1.01] focus:border-blue-800 focus:shadow-lg focus:outline-0"
      placeholder="Search with a course name or code..."
      value={value}
      onChange={onChange}
    ></input>
  )
}

export default Searchbar
