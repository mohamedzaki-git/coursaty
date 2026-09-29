import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { useInstructorContext } from '../../../context/InstructorContext';

const AddInstructorForm = () => {
    const { instructors, setInstructors } = useInstructorContext();

    // Validation schema
    const validationSchema = Yup.object({
        name: Yup.string().required('اسم المحاضر مطلوب'),
        email: Yup.string().email('البريد الإلكتروني غير صحيح').required('البريد الإلكتروني مطلوب'),
        phone: Yup.string().required('رقم الموبايل مطلوب'),
        image: Yup.mixed().required('صورة المحاضر مطلوبة').test(
            'fileType',
            'يجب أن تكون الصورة بصيغة jpg, jpeg, png',
            (value) => !value || ['image/jpg', 'image/jpeg', 'image/png'].includes(value.type)
        ),
        info: Yup.string()
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            image: null,
            email: '',
            phone: '',
            info: ''
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values)
            const formData = new FormData();
            formData.append('name', values.name);
            formData.append('email', values.email);
            formData.append('phone', values.phone);
            formData.append('info', values.info);
            if (values.image) {
                formData.append('image', values.image);
            }

            formik.resetForm();
        }
    });

    return (
        <div id="add-instructor" className="container my-4">
            <div className="title-section">
                <h2 >إضافة محاضر</h2>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="name" className="form-label">اسم المحاضر</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <div className="text-danger">{formik.errors.name}</div>
                        ) : null}
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">الإيميل</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-danger">{formik.errors.email}</div>
                        ) : null}
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="phone" className="form-label">رقم الموبايل</label>
                        <input
                            type="text"
                            className="form-control"
                            id="phone"
                            name="phone"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required
                        />
                        {formik.touched.phone && formik.errors.phone ? (
                            <div className="text-danger">{formik.errors.phone}</div>
                        ) : null}
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="image" className="form-label">صورة المحاضر</label>
                        <input
                            type="file"
                            className="form-control"
                            id="image"
                            name="image"
                            onChange={(event) => formik.setFieldValue('image', event.currentTarget.files[0])}
                        />
                        {formik.touched.image && formik.errors.image ? (
                            <div className="text-danger">{formik.errors.image}</div>
                        ) : null}
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="info" className="form-label">معلومات عن المحاضر</label>
                    <textarea
                        className="form-control"
                        id="info"
                        name="info"
                        rows="3"
                        value={formik.values.info}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    ></textarea>
                    {formik.touched.info && formik.errors.info ? (
                        <div className="text-danger">{formik.errors.info}</div>
                    ) : null}
                </div>

                <button type="submit" className="btn btn-success">إضافة المحاضر</button>
            </form>
        </div>
    );
};

export default AddInstructorForm;
