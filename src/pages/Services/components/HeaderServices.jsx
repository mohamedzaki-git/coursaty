import { Link } from "react-router-dom"

const HeaderServices = () => {
    return <>

        <header className="services">
            <ul className="d-flex gap-2">
                <li><Link to={'/'}>الرئيسية</Link></li>
                <li><Link to={'/services'} className='active'> /  انجازاتنا</Link></li>
            </ul>
        </header>
    </>
}

export default HeaderServices