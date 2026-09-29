import React from 'react';

const Instructors = ({ instructors, deleteInstructor, editInstructor }) => {
    return (
        <div id="instructors" className="my-4 p-2">
            <div className="title-section">
                <h2>المحاضرين</h2>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>اسم المحاضر</th>
                        <th>عدد الكورسات</th>
                        <th>إجراءات</th>
                    </tr>
                </thead>
                <tbody>
                    {instructors?.map((instructor) => (
                        <tr key={instructor?.id}>
                            <td>{instructor?.name}</td>
                            <td>{instructor?.courses}</td>
                            <td>
                                <button className="btn btn-warning btn-sm me-2" onClick={() => editInstructor(instructor.id)}>تعديل</button>
                                <button className="btn btn-danger btn-sm" onClick={() => deleteInstructor(instructor.id)}>حذف</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Instructors;
