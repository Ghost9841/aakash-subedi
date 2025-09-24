import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomLink = ({href, title, className = ''}: {href: string, title: string, className?: string})=>{
  const pathname = usePathname();
  return(
    <Link href={href} className={`${className} relative group`}>
      {title}
      
      <span className={`
       h-[1px] inline-block bg-dark w-0
       absolute left-0 -bottom-0.5
       group-hover:w-full transition-[width] ease-in-out duration-300 dark:bg-light
       ${pathname === href? 'w-full' : 'w-0'}
        `}
        >
        &nbsp;</span>
    </Link>
  )
}

export default CustomLink;