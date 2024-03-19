import Featured from './Featured';
import featuredBlogs from '../data/featuredBlogs.json';
const FeaturedSection = () => {
    return (
        <div className='bg-gray-200 md:px-2 text-center'>

            <section className='grid md:grid-cols-2 '>
                { featuredBlogs.map((blog, index) => (
                    <Featured key={ index } title={ blog.title } />
                )) }
            </section>

        </div>
    )
}
export default FeaturedSection