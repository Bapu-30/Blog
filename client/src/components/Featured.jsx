import featured from '../assets/featured.jpg'
const Featured = ({ title }) => {
    return (
        <div className=' min-w-full overflow-hidden rounded-sm h-72 m-1'>
            <img src={ featured } alt="" className="w-full" />
            <div className='text-black'>
                <h2 className='p-4 text-3xl'>{ title }</h2>
            </div>
        </div>

    )
}
export default Featured