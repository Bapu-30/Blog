import { useEffect, useState } from "react";
import Article from "./Article"

const Main = () => {
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('http://localhost:3001/posts');
                if (!response.ok) {
                    throw new Error('Failed to fetch blogs');
                }
                const data = await response.json();
                setBlogs(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
        console.log(blogs)
    }, []);
    return (
        <>
            <main className="main"  >
                { isLoading && <p>Loading blogs...</p> }
                { !isLoading && (
                    <div className="articles">
                        { blogs.map((blog, index) => (
                            <Article key={ index } title={ blog.title } content={ blog.content } />
                        )) }
                    </div>
                ) }
            </main >
        </>
    )
}
export default Main