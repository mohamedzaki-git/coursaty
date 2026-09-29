import '../../../styles/coursedetails.css'
const AboutCourse = () => {
    return <>
        <div className="about-course">
            <h3 className='text-center'>    React Js </h3>
            <h6>بواسطة <span>محمد ذكي</span></h6>
            <p>
                <i className="fa fa-clock"></i>
                مده الدوره :
                <span>
                    2 ساعه 18دقيقه / 28 درس
                </span>
            </p>
            <p>
                <i className="fa fa-earth"></i>
                اللغه :
                <span>
                    العربيه
                </span>
            </p>
            <p>
                <i className="fa fa-dollar"></i>
                السعر :
                <span>
                    199 ج
                </span>

            </p>
            <button>اشتراك الأن </button>
        </div>

    </>
}

export default AboutCourse
