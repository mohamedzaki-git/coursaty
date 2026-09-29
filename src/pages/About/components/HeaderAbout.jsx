import { Link } from "react-router-dom"

const HeaderAbout = () => {
    return <>

        <header className="about">
            <ul className="d-flex gap-2">
                <li><Link to={'/'}>الرئيسية</Link></li>
                <li><Link to={'/about'} className='active'> / من نحن؟</Link></li>
            </ul>
        </header>


    </>
}

export default HeaderAbout