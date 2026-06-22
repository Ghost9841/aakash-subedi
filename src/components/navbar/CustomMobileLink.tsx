import { usePathname, useRouter } from 'next/navigation'

const CustomMobileLink = ({
  href,
  title,
  className = '',
  toggle,
}: {
  href: string
  title: string
  className?: string
  toggle: () => void
}) => {
  const pathname = usePathname()
  const router = useRouter()
  const isActive = pathname === href

  const handleClick = () => {
    toggle()
    router.push(href)
  }

  return (
    <button
      className={`${className} relative group text-left w-full
        text-2xl md:text-3xl font-medium
        text-dark dark:text-light
        hover:opacity-70 transition-opacity duration-200
        ${isActive ? 'opacity-100' : 'opacity-90'}`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`
          absolute left-0 -bottom-1 h-[2px] rounded-full
          bg-dark dark:bg-light
          transition-all duration-300 ease-in-out
          ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
        `}
      />
    </button>
  )
}

export default CustomMobileLink