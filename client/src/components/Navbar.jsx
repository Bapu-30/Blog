import logoDark from '../assets/logo-dark.png'
import logoLight from '../assets/logo-light.png'
const Navbar = () => {
    return (
        <nav className='min-w-full min-h-10 bg-gradient-to-r from-slate-900 to-slate-700 sticky top-0 z-10 text-white '>
            <div className='max-w-full flex justify-between items-center p-2'>
                <div className='h-12 object-contain'>
                    <a href="#home"><img className='max-h-full mt-[0.16rem]' src={ logoLight } alt="" /></a>
                </div>

                <div>
                    <button className='text-3xl md:hidden focus:outline-none'>
                        &#9776;
                    </button>
                </div>
                <section className='hidden md:block space-x-8 text-xl ' aria-label='main'>
                    <a href="#home" className="hover:opacity-90">Home</a>
                    <a href="#posts" className="hover:opacity-90">Posts</a>
                    <a href="#about" className="hover:opacity-90">About</a>
                    <a href="#about" className="bg-gradient-to-r from-slate-900 to-slate-700 rounded-md p-2 hover:duration-200 hover:text-yellow-500 ">Subscribe</a>
                </section>
            </div>
        </nav>
    )
}
export default Navbar