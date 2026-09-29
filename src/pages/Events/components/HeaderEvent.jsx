import { Link } from 'react-router-dom'
import '../../../styles/event.css'
const HeaderEvent = () => {
    return <>

        <header className='events'>
            <ul className="d-flex gap-2">
                <li><Link to={'/'}>الرئيسية</Link></li>
                <li><Link to={'/event'} className='active'> /  فعاليتنا</Link></li>
            </ul>
        </header>

    </>
}

export default HeaderEvent