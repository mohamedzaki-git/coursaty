import { Link } from "react-router-dom"
import '../../../styles/article.css'
const HeaderAticle = () => {
    return <>

        <header className="about">
            <ul className="d-flex gap-2">
                <li><Link to={'/'}>الرئيسية</Link></li>
                <li><Link to={'/article'} className='active'> / مقالات</Link></li>
            </ul>
        </header>

    </>
}

export default HeaderAticle