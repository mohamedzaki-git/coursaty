import React from 'react';

const ProfileCard = ({ courseDetails, imgSrc, name, title }) => {
    return (
        <div className="profile-card px-2">
            <div className="social-icons my-3">
                <a href="#" className="btn btn-outline-primary btn-sm">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="btn btn-outline-info btn-sm">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="btn btn-outline-danger btn-sm">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="btn btn-outline-success btn-sm">
                    <i className="fab fa-whatsapp"></i>
                </a>
            </div>
            <img src={imgSrc} alt="Profile" className="img-fluid w-50" />
            <h5>{name}</h5>
            <p>{title}</p>
            {/* <button className="btn btn-danger btn-sm mb-2">تابع الآن</button> */}


        </div>
    );
};

export default ProfileCard;
