import logo from '../assets/logo1.png'
const Sidebar = () => {
    return (
        <section className="side-container">
            <a className="logo" href=""><img src={ logo } alt="Logo image" /></a>
            <div className="sidebar">
                <a href="">Home</a>
                <a href="">Posts</a>
                <a href="">about</a>
            </div>
        </section>

    )
}
export default Sidebar