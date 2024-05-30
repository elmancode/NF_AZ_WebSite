import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";
import "./index.scss";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import { FaLink } from "react-icons/fa";

const Gallery = () => {
  return (
    <div id="imageGallery" className="container">
      <div className="grid-container">
        <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
          <a
            href="https://scontent-fra5-1.xx.fbcdn.net/v/t31.18172-8/14556581_1156937037692785_7204613824185875652_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RSfKLJ2VZtAQ7kNvgHNYC6k&_nc_ht=scontent-fra5-1.xx&oh=00_AYCCUogrexP06qPDVTjhN8MfNBwLQHmsjDcIVXsxFNg7GA&oe=66730CC9"
            className="grid-content"
            data-aos="fade-up-right"
          >
            <img src="https://scontent-fra5-1.xx.fbcdn.net/v/t31.18172-8/14556581_1156937037692785_7204613824185875652_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RSfKLJ2VZtAQ7kNvgHNYC6k&_nc_ht=scontent-fra5-1.xx&oh=00_AYCCUogrexP06qPDVTjhN8MfNBwLQHmsjDcIVXsxFNg7GA&oe=66730CC9" />
            <div className="overlay">
              <FaLink className="link" />
              <p>+</p>
            </div>
          </a>

          <a
            href="https://scontent-fra3-2.xx.fbcdn.net/v/t39.30808-6/315816344_5554684151251363_593827422766000480_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-nbHYswlGigQ7kNvgHw7b0w&_nc_ht=scontent-fra3-2.xx&oh=00_AYBNUarBklp1WkWbmnkHvW-1EkJPjlZbJ0SYNqIeGUqxyQ&oe=6651560D"
            className="grid-content"
            data-aos="fade-up-right"
          >
            <img src="https://scontent-fra3-2.xx.fbcdn.net/v/t39.30808-6/315816344_5554684151251363_593827422766000480_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-nbHYswlGigQ7kNvgHw7b0w&_nc_ht=scontent-fra3-2.xx&oh=00_AYBNUarBklp1WkWbmnkHvW-1EkJPjlZbJ0SYNqIeGUqxyQ&oe=6651560D" />
            <div className="overlay">
              <FaLink className="link" />
              <p>+</p>
            </div>
          </a>

          <a
            href="https://scontent-fra5-2.xx.fbcdn.net/v/t39.30808-6/305999305_5360790500640730_9101772964790477336_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=On_8SOQvFtoQ7kNvgFFTNhR&_nc_ht=scontent-fra5-2.xx&oh=00_AYDb644hI9U-xzwT9-0nba9QdCKx9RbUHSzcV0KCAh7YRg&oe=66516588"
            className="grid-content"
            data-aos="fade-up-left"
          >
            <img src="https://scontent-fra5-2.xx.fbcdn.net/v/t39.30808-6/305999305_5360790500640730_9101772964790477336_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=On_8SOQvFtoQ7kNvgFFTNhR&_nc_ht=scontent-fra5-2.xx&oh=00_AYDb644hI9U-xzwT9-0nba9QdCKx9RbUHSzcV0KCAh7YRg&oe=66516588" />
            <div className="overlay">
              <FaLink className="link" />
              <p>+</p>
            </div>
          </a>

          <a
            href="https://scontent-fra5-2.xx.fbcdn.net/v/t39.30808-6/428608097_786516220183982_8957019932085284311_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hnCV5q5skd4Q7kNvgHekTk8&_nc_ht=scontent-fra5-2.xx&oh=00_AYCBmbG1GDh2-fOPHdj68l-ngDROWP0pnfu8Y4p5IECXDg&oe=665181A6"
            className="grid-content"
            data-aos="fade-up-left"
          >
            <img src="https://scontent-fra5-2.xx.fbcdn.net/v/t39.30808-6/428608097_786516220183982_8957019932085284311_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hnCV5q5skd4Q7kNvgHekTk8&_nc_ht=scontent-fra5-2.xx&oh=00_AYCBmbG1GDh2-fOPHdj68l-ngDROWP0pnfu8Y4p5IECXDg&oe=665181A6" />

            <div className="overlay">
              <FaLink className="link" />
              <p>+</p>
            </div>
          </a>

          <a
            href="https://scontent-fra5-2.xx.fbcdn.net/v/t39.30808-6/428608225_786514146850856_2900606633291968442_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8DGGd3pn05wQ7kNvgEdql4c&_nc_ht=scontent-fra5-2.xx&oh=00_AYBYz0VoHaMxIC_vAfcdvE6yuHeurSsFz5dpejY07acq7Q&oe=66518D98"
            className="grid-content"
            data-aos="fade-up-left"
          >
            <img src="https://scontent-fra5-2.xx.fbcdn.net/v/t39.30808-6/428608225_786514146850856_2900606633291968442_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8DGGd3pn05wQ7kNvgEdql4c&_nc_ht=scontent-fra5-2.xx&oh=00_AYBYz0VoHaMxIC_vAfcdvE6yuHeurSsFz5dpejY07acq7Q&oe=66518D98" />

            <div className="overlay">
              <FaLink className="link" />
              <p>+</p>
            </div>
          </a>

          <a
            href="https://scontent-fra3-2.xx.fbcdn.net/v/t39.30808-6/279250486_4986466378073146_2781716502558755654_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Wz-rLUy6CYkQ7kNvgFgv8Sj&_nc_ht=scontent-fra3-2.xx&oh=00_AYDwHUCA92EuNzCDIJ1ZxhkDiGG06tBGS_tq60Z6NAPoLQ&oe=66518B3A"
            className="grid-content"
            data-aos="fade-up-left"
          >
            <img src="https://scontent-fra3-2.xx.fbcdn.net/v/t39.30808-6/279250486_4986466378073146_2781716502558755654_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Wz-rLUy6CYkQ7kNvgFgv8Sj&_nc_ht=scontent-fra3-2.xx&oh=00_AYDwHUCA92EuNzCDIJ1ZxhkDiGG06tBGS_tq60Z6NAPoLQ&oe=66518B3A" />

            <div className="overlay">
              <FaLink className="link" />
              <p>+</p>
            </div>
          </a>
        </LightGallery>
      </div>
    </div>
  );
};

export default Gallery;
