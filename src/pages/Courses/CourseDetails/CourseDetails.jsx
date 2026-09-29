import { coursesArray } from "../../../assets/data/coursesArray";
import "../../../styles/coursedetails.css";
import AboutCourse from "../components/AboutCourse";
import Description from "../components/Description";
import HeaderCourseDetails from "../components/HeaderCourseDetails";
import Instructor from "../components/Instructor";
import IntroVideo from "../components/IntroVideo";
import Lessons from "../components/Lessons";
import Reviews from "../components/Reviews";
import Tabs from "../components/Tabs";

const CourseDetails = () => {
  const courseId = 1;
  const courseDetails = coursesArray[0];

  return (
    <div className="position-relative course-info-details">
      <HeaderCourseDetails />
      <div className="container-xxl py-5 rounded-4">
        <div className="row m-0 g-5 border-bottom">
          <div className="row g-3 my-3">
            <div className="col-md-8">
              <IntroVideo videoIntro={courseDetails.videoIntro} />
            </div>
            <div className="col-md-4">
              <AboutCourse />
            </div>
          </div>
        </div>

        <Tabs />
        <div className="tab-content" id="myTabContent">
          <Description
            description={courseDetails.description.text}
            objectives={courseDetails.description.objectives}
            outcomes={courseDetails.description.outcomes}
          />
          <Lessons videos={courseDetails.videos} />
          <Instructor
            imgSrc={courseDetails.instructor.image}
            bio={courseDetails.instructor.bio}
            // socialLinks={courseDetails.instructor.LinkedIn}
          />
          <Reviews reviews={courseDetails.reviews} />
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
