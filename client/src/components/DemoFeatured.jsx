import Featured from './Featured';
import featuredBlogs from '../data/featuredBlogs.json';
const DemoFeatured = () => {
    // const d = featuredBlogs[0].title
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2">
            <div className="col-span-12 md:col-span-4 bg-white rounded-lg shadow-md p-4">
                <div className="h-32 bg-gray-300 mb-4 rounded-lg">
                    <Featured title={ featuredBlogs[0].title } />
                </div>
                <div className="h-32 bg-gray-300 rounded-lg">
                    <Featured title={ featuredBlogs[1].title } />
                </div>
            </div>

            <div className="col-span-12 md:col-span-4 bg-white rounded-lg shadow-md p-4">
                <div className="h-64 bg-gray-300 rounded-lg">
                    <Featured title={ featuredBlogs[2].title } />
                </div>
            </div>

            <div className="col-span-12 md:col-span-4 bg-white rounded-lg shadow-md p-4">
                <div className="h-32 bg-gray-300 mb-4 rounded-lg">
                    <Featured title={ featuredBlogs[3].title } />
                </div>
                <div className="h-32 bg-gray-300 rounded-lg">
                    <Featured title={ featuredBlogs[4].title } />
                </div>
            </div>
        </div>

    )
}
export default DemoFeatured