import { useFormik } from 'formik';
import * as Yup from 'yup';
import "../../../styles/dashboard.css";

export default function AddReview() {
    // Validation schema
    const validationSchema = Yup.object({
        description: Yup.string()
            .min(10, "الوصف يجب أن يكون على الأقل 10 أحرف")
            .required("الوصف مطلوب"),
        author: Yup.string()
            .min(3, "اسم المؤلف يجب أن يكون على الأقل 3 أحرف")
            .required("اسم المؤلف مطلوب")
    });

    const formik = useFormik({
        initialValues: {
            description: "",
            author: "",
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
        <div className="add-article-form container-xxl p-5">
            <div className="title-section my-4">
                <h2>إضافة رأي</h2>
            </div>
            <form onSubmit={formik.handleSubmit} className="row g-3">
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

                <div className='col-12'>
                    <button type="submit" className="BTN">إضافة مقال</button>
                </div>
            </form>
        </div>
    );
}
