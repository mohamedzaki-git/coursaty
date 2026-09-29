import { Link } from 'react-router-dom'
import '../../../styles/courses.css'
const HeaderCourses = () => {
    return <>
        <header className='courses'>
            <ul className="d-flex gap-2">
                <li><Link to={'/'}>الرئيسية</Link></li>
                <li><Link to={'/about'} className='active'> /  كورسات</Link></li>
            </ul>
        </header>
    </>
}

export default HeaderCourses