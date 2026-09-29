import { useState } from "react";


const ProfileInstructor = () => {
    const defaultInstructorImage = 'https://scontent.fcai22-1.fna.fbcdn.net/v/t39.30808-6/298788431_3339666233024829_5300832238760280771_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=xgJJ_pQaQ7gQ7kNvgHR9tFC&_nc_ht=scontent.fcai22-1.fna&_nc_gid=AUBkRBw_vQsDKv6XjS2z5yo&oh=00_AYDi-FtHiHtZTZfZeZc_63kJ0CJ7IeHYMOIShNTgKLHEHg&oe=66E3C7BF';

    // Sample user data
    const [userData, setUserData] = useState({
        name: "Mohamed Zaki",
        email: "mohamedzakiii667@gmail.com",
        phone: "01067213189",
        birthday: "18/12/1999",
    });



    return (
        <section className='m-0 instructor-profile '>

            <div className="container-xl px-4 py-5 mt-5">
                <div className="row">
                    <div className="col-xl-4">
                        {/* Profile picture card */}
                        <div className="card shadow-lg border mb-4 mb-xl-0">
                            <div className="card-header">صورة الملف الشخصي</div>
                            <div className="card-body text-center">
                                {/* Profile picture image */}
                                <img className="img-account-profile rounded-circle w-50 mb-2" src={defaultInstructorImage} alt="Profile" />
                                {/* User data under the profile picture */}
                                <div className=" mb-4">
                                    <p><strong>الاسم:</strong> {userData.name}</p>
                                    <p><strong>رقم الهاتف:</strong> {userData.phone}</p>
                                    <p><strong>البريد الإلكتروني:</strong> {userData.email}</p>
                                </div>
                                {/* Profile picture upload button */}
                                <button className="btn BTN" type="button">تحميل صورة جديدة</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8">

                        {/* Account details card */}
                        <div className="card  shadow-lg border mb-4">
                            <div className="card-header">تفاصيل الحساب</div>
                            <div className="card-body">
                                <form>
                                    {/* Form Group (name) */}
                                    <div className="mb-3">
                                        <label className="small mb-1" htmlFor="inputName">الاسم</label>
                                        <input className="form-control" id="inputName" type="text" placeholder="أدخل اسمك" defaultValue={userData.name} />
                                    </div>
                                    {/* Form Group (email) */}
                                    <div className="mb-3">
                                        <label className="small mb-1" htmlFor="inputEmailAddress">البريد الإلكتروني</label>
                                        <input className="form-control" id="inputEmailAddress" type="email" placeholder="أدخل عنوان بريدك الإلكتروني" defaultValue={userData.email} />
                                    </div>
                                    {/* Form Group (phone number) */}
                                    <div className="mb-3">
                                        <label className="small mb-1" htmlFor="inputPhone">رقم الهاتف</label>
                                        <input className="form-control" id="inputPhone" type="tel" placeholder="أدخل رقم هاتفك" defaultValue={userData.phone} />
                                    </div>

                                    {/* Save changes button */}
                                    <button className="btn BTN" type="button">حفظ التغييرات</button>
                                </form>
                            </div>
                        </div>
                        {/* Change password card */}
                        <div className="card  shadow-lg border mb-4">
                            <div className="card-header">تغيير كلمة المرور</div>
                            <div className="card-body">
                                <form>
                                    {/* Form Group (current password) */}
                                    <div className="mb-3">
                                        <label className="small mb-1" htmlFor="currentPassword">كلمة المرور الحالية</label>
                                        <input className="form-control" id="currentPassword" type="password" placeholder="أدخل كلمة المرور الحالية" />
                                    </div>
                                    {/* Form Group (new password) */}
                                    <div className="mb-3">
                                        <label className="small mb-1" htmlFor="newPassword">كلمة المرور الجديدة</label>
                                        <input className="form-control" id="newPassword" type="password" placeholder="أدخل كلمة المرور الجديدة" />
                                    </div>
                                    {/* Form Group (confirm password) */}
                                    <div className="mb-3">
                                        <label className="small mb-1" htmlFor="confirmPassword">تأكيد كلمة المرور</label>
                                        <input className="form-control" id="confirmPassword" type="password" placeholder="أكد كلمة المرور الجديدة" />
                                    </div>
                                    <button className="btn BTN" type="button">حفظ</button>
                                </form>
                            </div>
                        </div>
                        {/* Delete account card */}
                        <div className="card  shadow-lg border mb-4">
                            <div className="card-header">حذف الحساب</div>
                            <div className="card-body">
                                <p className="text-danger">تحذير: حذف حسابك هو إجراء لا يمكن التراجع عنه. ستفقد جميع بياناتك وسيتعذر عليك الوصول إلى حسابك مرة أخرى.</p>
                                <button className="btn btn-danger" type="button">حذف الحساب</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileInstructor;
