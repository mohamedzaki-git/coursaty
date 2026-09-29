import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function AddBookForm() {
    // Validation schema
    const validationSchema = Yup.object({
        title: Yup.string().required('اسم الكتاب مطلوب'),
        price: Yup.number().required('السعر مطلوب').positive('يجب أن يكون السعر رقمًا موجبًا'),
        discount: Yup.number().nullable().positive('يجب أن يكون الخصم رقمًا موجبًا'),
        outher: Yup.string(),
        image: Yup.mixed().required('صورة الكتاب مطلوبة'),
        book: Yup.mixed().required('ملف الكتاب مطلوب'),
        description: Yup.string(),
        status: Yup.string().oneOf(['paid', 'unpaid'], 'الحالة غير صالحة'),
    });

    const formik = useFormik({
        initialValues: {
            title: '',
            price: '',
            discount: '',
            outher: '',
            image: null,
            book: null,
            description: '',
            status: 'paid',
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
        <div className="add-course-form container-xxl p-5">
            <div className="title-section my-4">
                <h2>إضافة كتاب</h2>
            </div>
            <form onSubmit={formik.handleSubmit} className="row g-3">
                {/* Title */}
                <div className='col-md-6'>
                    <label htmlFor="title" className="form-label">اسم الكتاب</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="اسم الكتاب"
                    />
                    {formik.errors.title && formik.touched.title && (
                        <div className="text-danger">{formik.errors.title}</div>
                    )}
                </div>

                {/* Price */}
                <div className='col-md-6'>
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
                <div className='col-md-6'>
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

                {/* Author */}
                <div className='col-md-6'>
                    <label htmlFor="outher" className="form-label">المؤلف</label>
                    <input
                        type="text"
                        className="form-control"
                        id="outher"
                        name="outher"
                        value={formik.values.outher}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="المؤلف"
                    />
                    {formik.errors.outher && formik.touched.outher && (
                        <div className="text-danger">{formik.errors.outher}</div>
                    )}
                </div>

                {/* Image */}
                <div className='col-md-6'>
                    <label htmlFor="image" className="form-label">صورة الكتاب</label>
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

                {/* Book File */}
                <div className='col-md-6'>
                    <label htmlFor="book" className="form-label">ملف الكتاب</label>
                    <input
                        type="file"
                        className="form-control"
                        id="book"
                        name="book"
                        onChange={(event) => formik.setFieldValue('book', event.currentTarget.files[0])}
                    />
                    {formik.errors.book && formik.touched.book && (
                        <div className="text-danger">{formik.errors.book}</div>
                    )}
                </div>

                {/* Description */}
                <div className='col-12'>
                    <label htmlFor="description" className="form-label">وصف الكتاب</label>
                    <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        rows="3"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="وصف الكتاب"
                    />
                    {formik.errors.description && formik.touched.description && (
                        <div className="text-danger">{formik.errors.description}</div>
                    )}
                </div>

                {/* Status */}
                <div className='col-md-6'>
                    <label htmlFor="status" className="form-label">حالة الكتاب</label>
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
                    <button type="submit" className="btn btn-primary my-3">إضافة كتاب</button>
                </div>
            </form>
        </div>
    );
}
