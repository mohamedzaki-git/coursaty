import { Link } from 'react-router-dom';
import imgHtml from '../../../assets/images/courses/html.jpg';
import imgNode from '../../../assets/images/courses/node.jpg';
import { default as defaultInstructorImage, default as imgReact } from '../../../assets/images/courses/react.jpg';

const InstructorCourses = () => {
    const courses = [
        {
            image: imgHtml,
            discount: '20%',
            duration: '5',
            title: 'HTML & CSS',
            instructor: 'Jonas',
            price: '499.99'
        },
        {
            image: imgReact,
            discount: '30%',
            duration: '8',
            title: 'React',
            instructor: 'Jonas',
            price: '599.99'
        },
        {
            image: imgNode,
            discount: '25%',
            duration: '6',
            title: 'Node Js',
            instructor: 'Jonas',
            price: '549.99'
        }
    ];

    return (
        <div className="container-xxl py-5">
            <div className="row  g-5">
                {courses.map((course, index) => (
                    <div key={index} className="col-lg-4 col-md-6">
                        <div className="course-item rounded-5">
                            <div className="position-relative rounded-5">
                                <img
                                    className="img-fluid w-100 mx-auto d-block"
                                    src={course.image}
                                    alt={`صورة الدورة ${course.title}`}
                                />
                            </div>
                            <div className="rounded-5 px-4 pb-2 pt-2 mt-n5">
                                <Link className="d-block text-center h3 mt-3 mb-4" to="/course-details">
                                    {course.title}
                                </Link>
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <div className="d-flex align-items-center">
                                        <img
                                            className="rounded-circle flex-shrink-0"
                                            src={defaultInstructorImage}
                                            alt="المدرب"
                                            style={{ width: '45px', height: '45px' }}
                                        />
                                        <div className="me-3">
                                            <h6 className="mb-1">{course.instructor}</h6>
                                            <small>مدرب</small>
                                        </div>
                                    </div>
                                    <span className="text-white rounded-pill py-2 px-3">
                                        ج {course.price}
                                    </span>
                                </div>
                                <div className="row g-1">
                                    <div className="col-4">
                                        <div className="border-top border-3 border-primary pt-2">
                                            <h6 className="text-primary mb-1">المدة:</h6>
                                            <small>{course.duration} ساعات</small>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="border-top border-3 border-success pt-2">
                                            <h6 className="text-success mb-1">الخصم:</h6>
                                            <small>{course.discount}</small>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="border-top border-3 border-danger pt-2">
                                            <h6 className="text-danger mb-1">فيديوهات:</h6>
                                            <small>50</small>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default InstructorCourses;
