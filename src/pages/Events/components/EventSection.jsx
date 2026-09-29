import iti from '../../../assets/images/event/iti.jpeg'
import travel from '../../../assets/images/event/travel.jpeg'
import '../../../styles/event.css'
const EventSection = () => {
    return <>

        <section className="event-section ">
            <div className="container ">
                <div className="title-section">
                    <h2>فعالياتنا</h2>
                </div>
                <div className="row g-4 py-3">

                    <div className="col-md-6 col-lg-4">
                        <div className="event-item">
                            <div className="image">
                                <img src={travel} className="w-100 rounded-2" alt="" />
                            </div>
                            <div className="event-text">
                                <div className=" shadow py-5 content active">
                                    <h6>محاضرة لطلاب الSummer Training ب ITI - Information Technology Institute</h6>
                                    <p>June 10, 2019 by Admsolustrid lorem</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="event-item">
                            <div className="image">
                                <img src={iti} className="w-100 rounded-2" alt="" />
                            </div>
                            <div className="event-text">
                                <div className=" shadow py-5 content active">
                                    <h6>محاضرة لطلاب الSummer Training ب ITI - Information Technology Institute</h6>
                                    <p>June 10, 2019 by Admsolustrid lorem</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="event-item">
                            <div className="image">
                                <img src={iti} className="w-100 rounded-2" alt="" />
                            </div>
                            <div className="event-text">
                                <div className=" shadow py-5 content active">
                                    <h6>محاضرة لطلاب الSummer Training ب ITI - Information Technology Institute</h6>
                                    <p>June 10, 2019 by Admsolustrid lorem</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </>
}

export default EventSection