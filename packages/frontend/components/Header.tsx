import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex items-center justify-between rounded-full bg-blue-900 py-2 px-6">
      <Link href="/">
        <h1 className="text-2xl font-bold text-neutral-50 hover:cursor-pointer">
          VOO
        </h1>
      </Link>
      {/* TODO: Make language selector functional */}
      <button className="text-md text-xs text-blue-300">English</button>
    </header>
  )
}

export default Header
