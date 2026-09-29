import React from 'react';

const CourseImage = ({ imgSrc, courseName }) => {
    return (
        <div className="px-2">
            <img
                src={imgSrc}
                className="img-fluid mb-1 w-75 mx-auto d-block rounded-4 course-image"
                alt={courseName}
            />
            <h6 className='h1  m-0 text-center fw-bold'>{courseName}</h6>
            <p className='text-black fw-bold text-center'>
                تعد هذه الدورة مقدمة شاملة لتعلم برمجة الويب باستخدام تقنيات حديثة مثل React وNode.js. ستتعلم أساسيات البرمجة والتطوير، وكيفية بناء تطبيقات ويب تفاعلية.
            </p>
        </div>
    );
};

export default CourseImage;
