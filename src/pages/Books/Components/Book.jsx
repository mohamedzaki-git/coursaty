import { Link } from 'react-router-dom'
import bookImgHtml from '../../../assets/images/courses/html.jpg'
import bookImgNode from '../../../assets/images/courses/node.jpg'
import bookImg from '../../../assets/images/courses/react.jpg'
const Book = () => {
    return <>

        <div className="container-xxl py-4">
            <div className="title-section my-4">
                <h2>الكتب</h2>
            </div>
            <div className="row g-5">
                <div className="col-md-4">
                    <div className="book">
                        <figure className='overflow-hidden'>
                            <Link to={'/book-details'}>
                                <img src={bookImg} className='w-100 rounded-3' alt="react js" />
                            </Link>
                        </figure>
                        <h4>React Js</h4>
                        <p>100 ج</p>
                        <button>اضافه الي السله </button>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="book">
                        <figure className='overflow-hidden'>
                            <img src={bookImgNode} className='w-100 rounded-3' alt="react js" />
                        </figure>
                        <h4>React Js</h4>
                        <p>100 ج</p>
                        <button>اضافه الي السله </button>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="book">
                        <figure className='overflow-hidden'>
                            <img src={bookImgHtml} className='w-100 rounded-3' alt="react js" />
                        </figure>
                        <h4>React Js</h4>
                        <p>100 ج</p>
                        <button>اضافه الي السله </button>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="book">
                        <figure className='overflow-hidden'>
                            <img src={bookImg} className='w-100 rounded-3' alt="react js" />
                        </figure>
                        <h4>React Js</h4>
                        <p>100 ج</p>
                        <button>اضافه الي السله </button>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="book">
                        <figure className='overflow-hidden'>
                            <img src={bookImgNode} className='w-100 rounded-3' alt="react js" />
                        </figure>
                        <h4>React Js</h4>
                        <p>100 ج</p>
                        <button>اضافه الي السله </button>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="book">
                        <figure className='overflow-hidden'>
                            <img src={bookImgHtml} className='w-100 rounded-3' alt="react js" />
                        </figure>
                        <h4>React Js</h4>
                        <p>100 ج</p>
                        <button>اضافه الي السله </button>
                    </div>
                </div>
            </div>

        </div>
    </>
}

export default Book