import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function AddCourseForm() {
    // const { courses, setCourses } = useCourseContext();

    // Validation schema
    const validationSchema = Yup.object({
        title: Yup.string().required('اسم الكورس مطلوب'),
        price: Yup.number().required('السعر مطلوب').positive('يجب أن يكون السعر رقمًا موجبًا'),
        discount: Yup.number().nullable().positive('يجب أن يكون الخصم رقمًا موجبًا'),
        instructor: Yup.string(),
        image: Yup.mixed().required('صورة الكورس مطلوبة'),
        videoFiles: Yup.array().of(Yup.mixed().required('فيديو الكورس مطلوب')).required('فيديو الكورس مطلوب'),
        description: Yup.string(),
        hours: Yup.number().required('عدد الساعات مطلوب').positive('يجب أن يكون عدد الساعات رقمًا موجبًا'),
        videoIntro: Yup.mixed().required('مقدمة الفيديو مطلوبة').test(
            'fileType',
            'يجب أن يكون الملف فيديو',
            (value) => value && value.type.startsWith('video/')
        ),
        status: Yup.string().oneOf(['paid', 'unpaid'], 'الحالة غير صالحة'),
    });

    const formik = useFormik({
        initialValues: {
            title: '',
            price: '',
            discount: '',
            instructor: '',
            image: null,
            videoFiles: [],
            description: '',
            hours: '',
            videoIntro: null,
            status: 'paid',
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values)
            // const course = {
            //     ...values,
            //     videos: values.videoFiles.map(file => ({
            //         title: file.name,
            //         url: URL.createObjectURL(file)
            //     })),
            //     introVideo: values.videoIntro ? URL.createObjectURL(values.videoIntro) : null
            // };

            // setCourses(prevCourses => [...prevCourses, course]);
            // console.log(course);

            formik.resetForm();
        }
    });

    return (
        <div className="add-course-form container-xxl p-5">
            <div className="title-section my-4">
                <h2>إضافة كورس</h2>
            </div>
            <form onSubmit={formik.handleSubmit} className="row g-5">
                {/* Title */}
                <div className='col-md-6 '>
                    <label htmlFor="title" className="form-label">اسم الكورس</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="اسم الكورس"
                    />
                    {formik.errors.title && formik.touched.title && (
                        <div className="text-danger">{formik.errors.title}</div>
                    )}
                </div>

                {/* Price */}
                <div className='col-md-6 '>
                    <label htmlFor="price" className="form-label">السعر</label>
                    <input
                        type="number"
                        className="form-control"
                        id="price"
                        name="price"
                        value={formik.values.price}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="السعر"
                    />
                    {formik.errors.price && formik.touched.price && (
                        <div className="text-danger">{formik.errors.price}</div>
                    )}
                </div>

                {/* Discount */}
                <div className='col-md-6 '>
                    <label htmlFor="discount" className="form-label">الخصم</label>
                    <input
                        type="number"
                        className="form-control"
                        id="discount"
                        name="discount"
                        value={formik.values.discount}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="الخصم"
                    />
                    {formik.errors.discount && formik.touched.discount && (
                        <div className="text-danger">{formik.errors.discount}</div>
                    )}
                </div>

                {/* Instructor */}
                <div className='col-md-6 '>
                    <label htmlFor="instructor" className="form-label">المحاضر</label>
                    <select
                        id="instructor"
                        name="instructor"
                        className="form-select"
                        value={formik.values.instructor}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    >
                        <option value="">اختر المحاضر</option>
                        <option value='abdo'>abdo</option>
                        {/* Add more options as needed */}
                    </select>
                    {formik.errors.instructor && formik.touched.instructor && (
                        <div className="text-danger">{formik.errors.instructor}</div>
                    )}
                </div>

                {/* Image */}
                <div className='col-md-6 '>
                    <label htmlFor="image" className="form-label">صورة الكورس</label>
                    <input
                        type="file"
                        className="form-control"
                        id="image"
                        name="image"
                        onChange={(event) => formik.setFieldValue('image', event.currentTarget.files[0])}
                    />
                    {formik.errors.image && formik.touched.image && (
                        <div className="text-danger">{formik.errors.image}</div>
                    )}
                </div>

                {/* Video Files */}
                <div className='col-md-6 '>
                    <label htmlFor="videoFiles" className="form-label">فيديوهات الكورس</label>
                    <input
                        type="file"
                        className="form-control"
                        id="videoFiles"
                        name="videoFiles"
                        multiple
                        onChange={(event) => {
                            const files = Array.from(event.currentTarget.files);
                            formik.setFieldValue('videoFiles', files);
                        }}
                    />
                    {formik.errors.videoFiles && formik.touched.videoFiles && (
                        <div className="text-danger">{formik.errors.videoFiles}</div>
                    )}
                </div>

                {/* Description */}
                <div className='col-12'>
                    <label htmlFor="description" className="form-label">وصف الكورس</label>
                    <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        rows="3"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="وصف الكورس"
                    />
                    {formik.errors.description && formik.touched.description && (
                        <div className="text-danger">{formik.errors.description}</div>
                    )}
                </div>

                {/* Hours */}
                <div className='col-md-6 '>
                    <label htmlFor="hours" className="form-label">عدد الساعات</label>
                    <input
                        type="number"
                        className="form-control"
                        id="hours"
                        name="hours"
                        value={formik.values.hours}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="عدد الساعات"
                    />
                    {formik.errors.hours && formik.touched.hours && (
                        <div className="text-danger">{formik.errors.hours}</div>
                    )}
                </div>

                {/* Video Intro */}
                <div className='col-md-6 '>
                    <label htmlFor="videoIntro" className="form-label">مقدمة الفيديو</label>
                    <input
                        type="file"
                        className="form-control"
                        id="videoIntro"
                        name="videoIntro"
                        onChange={(event) => formik.setFieldValue('videoIntro', event.currentTarget.files[0])}
                    />
                    {formik.errors.videoIntro && formik.touched.videoIntro && (
                        <div className="text-danger">{formik.errors.videoIntro}</div>
                    )}
                </div>

                {/* Status */}
                <div className='col-md-6 '>
                    <label htmlFor="status" className="form-label">حالة الكورس</label>
                    <select
                        id="status"
                        name="status"
                        className="form-select"
                        value={formik.values.status}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    >
                        <option value="paid">مدفوع</option>
                        <option value="unpaid">غير مدفوع</option>
                    </select>
                    {formik.errors.status && formik.touched.status && (
                        <div className="text-danger">{formik.errors.status}</div>
                    )}
                </div>

                <div className='col-12'>
                    <button type="submit" className="BTN">إضافة الكورس</button>
                </div>
            </form>
        </div>
    );
}
