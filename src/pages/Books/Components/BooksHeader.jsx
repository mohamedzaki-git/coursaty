import { Link } from "react-router-dom"
import '../../../styles/books.css'
const BooksHeader = () => {
    return <>

        <header className='books'>
            <ul className="d-flex gap-2">
                <li><Link to={'/'}>الرئيسية</Link></li>
                <li><Link to={'/books'} className='active'> /  الكتب</Link></li>
            </ul>
        </header>
    </>
}

export default BooksHeader