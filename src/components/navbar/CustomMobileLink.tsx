import { usePathname } from "next/navigation";

const CustomMobileLink = ({href, title, className = '',toggle}: {href: string, title: string, className?: string,toggle : () => void})=>{
  const pathname = usePathname();
  const handleClick= () => {
    toggle();
    window.location.href = href;
    
  }
  return(
    <button className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
      {title}
      
      <span className={`
       h-[1px] inline-block bg-light w-0
       absolute left-0 -bottom-0.5
       group-hover:w-full transition-[width] ease-in-out duration-300 dark:bg-dark
       ${pathname === href? 'w-full' : 'w-0'}
        `}
        >
        &nbsp;</span>
    </button>
  )
}

export default CustomMobileLink;