import blogImg from "../assets/card.jpg"
const Article = ({ title, content }) => {

    const shortContent = content.substring(0, 100) + '...';
    return (
        <>
            <a href="" className="card">
                <img src={ blogImg } alt="" />
                <div className="card-text">
                    <h3 className="article-title">{ title }</h3>
                    <div className="article-content">{ shortContent }</div>
                </div>

            </a>
        </>

    )
}
export default Article