import featured from '../assets/fetured.jpeg'
const Featured = () => {
    return (
        <div className='feat-container'>
            <img src={ featured } alt="" />
            <div className='feat-text'>
                <h2>SpaceX launched its flagship Starship</h2>
                <p>some content</p>
            </div>
        </div>
    )
}
export default Featured