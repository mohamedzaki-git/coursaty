import { Link } from "react-router-dom"

const HeaderContact = () => {
    return <>

        <header className="contact-us">
            <ul className="d-flex gap-2">
                <li><Link to={'/'}>الرئيسية</Link></li>
                <li><Link to={'/contact'} className='active'> /  تواصل معانا</Link></li>
            </ul>
        </header>
    </>
}

export default HeaderContact