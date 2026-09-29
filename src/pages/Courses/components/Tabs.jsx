import React from 'react';

const Tabs = () => {
    return (
        <ul className="nav nav-tabs taps d-flex justify-content-center  py-2" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
                <button
                    className="nav-link rounded-2 active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="home-tab-pane"
                    aria-selected="true"
                >
                    الوصف
                </button>
            </li>
            <li className="nav-item" role="presentation">
                <button
                    className="nav-link rounded-2"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="profile-tab-pane"
                    aria-selected="false"
                >
                    الدروس
                </button>
            </li>
            <li className="nav-item" role="presentation">
                <button
                    className="nav-link rounded-2"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="contact-tab-pane"
                    aria-selected="false"
                >
                    المدرس
                </button>
            </li>
            <li className="nav-item" role="presentation">
                <button
                    className="nav-link rounded-2"
                    id="disabled-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#disabled-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="disabled-tab-pane"
                    aria-selected="false"
                >
                    الآراء
                </button>
            </li>
        </ul>
    );
};

export default Tabs;
