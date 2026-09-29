import { useFormik } from 'formik';
import * as Yup from 'yup';
import "../../../styles/dashboard.css";
export default function AddArticle() {
    // Validation schema
    const validationSchema = Yup.object({
        title: Yup.string()
            .min(10, "يجب أن يكون العنوان على الأقل 10 أحرف")
            .required("العنوان مطلوب"),
        smallDescription: Yup.string()
            .min(20, "يجب أن يكون الوصف القصير على الأقل 20 حرفًا")
            .required("الوصف القصير مطلوب"),
        description: Yup.string()
            .min(20, "يجب أن يكون الوصف على الأقل 20 حرفًا")
            .required("الوصف مطلوب"),
        image: Yup.mixed()
            .required("الصورة مطلوبة"),
        author: Yup.string()
            .required("اسم المؤلف مطلوب"),
        date: Yup.date()
            .required("تاريخ المقال مطلوب")
    });

    const formik = useFormik({
        initialValues: {
            title: "",
            smallDescription: "",
            description: "",
            image: "",
            author: "",
            date: ""
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
            // Handle form submission
            // For example, you can send the values to an API or update the context

            formik.resetForm();
        }
    });

    return (
        <div className="add-article-form container-xxl  p-5  ">
            <div className="title-section my-4">
                <h2>إضافة مقال</h2>
            </div>
            <form onSubmit={formik.handleSubmit} className="row g-3">
                {/* Title */}
                <div className='col-md-6'>
                    <label htmlFor="title" className="form-label">العنوان</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="العنوان"
                    />
                    {formik.errors.title && formik.touched.title && (
                        <div className="text-danger">{formik.errors.title}</div>
                    )}
                </div>

                {/* Small Description */}
                <div className='col-12'>
                    <label htmlFor="smallDescription" className="form-label">وصف قصير</label>
                    <textarea
                        className="form-control"
                        id="smallDescription"
                        name="smallDescription"
                        rows="2"
                        value={formik.values.smallDescription}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="وصف قصير"
                    />
                    {formik.errors.smallDescription && formik.touched.smallDescription && (
                        <div className="text-danger">{formik.errors.smallDescription}</div>
                    )}
                </div>

                {/* Description */}
                <div className='col-12'>
                    <label htmlFor="description" className="form-label">الوصف</label>
                    <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        rows="3"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="الوصف"
                    />
                    {formik.errors.description && formik.touched.description && (
                        <div className="text-danger">{formik.errors.description}</div>
                    )}
                </div>

                {/* Image */}
                <div className='col-md-6'>
                    <label htmlFor="image" className="form-label">الصورة</label>
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

                {/* Author */}
                <div className='col-md-6'>
                    <label htmlFor="author" className="form-label">المؤلف</label>
                    <input
                        type="text"
                        className="form-control"
                        id="author"
                        name="author"
                        value={formik.values.author}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="المؤلف"
                    />
                    {formik.errors.author && formik.touched.author && (
                        <div className="text-danger">{formik.errors.author}</div>
                    )}
                </div>

                {/* Date */}
                <div className='col-md-6'>
                    <label htmlFor="date" className="form-label">تاريخ النشر</label>
                    <input
                        type="date"
                        className="form-control"
                        id="date"
                        name="date"
                        value={formik.values.date}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.errors.date && formik.touched.date && (
                        <div className="text-danger">{formik.errors.date}</div>
                    )}
                </div>

                <div className='col-12'>
                    <button type="submit" className="BTN">إضافة مقال</button>
                </div>
            </form>
        </div>
    );
}
