import imgBook from '../../../assets/images/courses/react.jpg'
import '../../../styles/books.css'
import BooksHeader from "../Components/BooksHeader"
const BookDetails = () => {
    return <>
        <BooksHeader />
        <div className="book-details">
            <div className="container-xxl">
                <div className="row g-3">
                    <div className="col-sm-4">
                        <figure>
                            <img src={imgBook} className="w-100 rounded-3" alt="" />
                        </figure>
                        <h4 className='text-center'>React Js</h4>

                    </div>
                    <div className="col-sm-8">
                        <div className="item">
                            <p>كتاب "تعلم React: من الأساسيات إلى بناء التطبيقات الحديثة" يقدم دليلًا شاملًا لتعلم مكتبة React. يشرح الكتاب مفاهيم React الأساسية والمتقدمة، ويشمل مشاريع عملية وأمثلة تطبيقية. مناسب للمبتدئين والمطورين الذين يرغبون في تحسين مهاراتهم في تطوير واجهات المستخدم.

                            </p>
                            <div className='d-flex align-items-center gap-2'>
                                <p className='fw-bold fs-4'>المؤلف : </p>
                                <p className='fs-5'>محمد ذكي</p>
                            </div>
                            <div className='d-flex align-items-center gap-2'>
                                <p className='fw-bold fs-4'>السعر : </p>
                                <p className='fs-5'>100 ج</p>
                            </div>
                            <button>
                                اضافه الي السله
                                <i className='fa fa-cart-shopping mx-2'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </>
}

export default BookDetails