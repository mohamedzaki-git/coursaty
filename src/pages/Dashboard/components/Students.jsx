import React from 'react';

const Students = ({ students, deleteStudent }) => {
    return (
        <div id="students" className="my-4 p-2">
            <div className="title-section">
                <h2>الطلاب</h2>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>اسم الطالب</th>
                        <th>عدد الكورسات</th>
                        <th>إجراءات</th>
                    </tr>
                </thead>
                <tbody>
                    {students?.map((student) => (
                        <tr key={student?.id}>
                            <td>{student?.name}</td>
                            <td>{student?.courses}</td>
                            <td>
                                <button className="btn btn-danger btn-sm" onClick={() => deleteStudent(student.id)}>حذف</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Students;
