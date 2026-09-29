import React from 'react';

const Instructor = ({ imgSrc, bio }) => {
    return (
        <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">
            <div className="d-flex align-items-center gap-4 mb-3">
                {/* Image */}
                <img src={imgSrc} alt="Instructor" className="img-fluid rounded-circle w-25 " />

                <div className="social-icons">
                    {/* Bio */}
                    <p className="flex-grow-1  text-white fw-bold">{bio}</p>
                    {/* {socialLinks.map((link, index) => (
                        <a key={index} href={link.href} className={`btn btn-outline-${link.type} btn-sm`}>
                            <i className={`fab fa-${link.icon}`}></i>
                        </a>
                    ))} */}
                </div>
            </div>
        </div>
    );
};

export default Instructor;
