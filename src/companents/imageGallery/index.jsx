import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import "./index.scss";

const Gallery = () => {
  return (
    <div id="imageGallery" className="container">
      <div className="grid-container">
        <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
          <a
            href="https://preview.colorlib.com/theme/glint/images/portfolio/lady-shutterbug.jpg"
            className="grid-content"
          >
            <img
              src="https://preview.colorlib.com/theme/glint/images/portfolio/lady-shutterbug.jpg"
              alt="Image 1"
            />
            <div className="overlay">
              <p>+</p>
              <p className="text">SHUTTERBURG</p>
            </div>
          </a>

          <a
            href="https://preview.colorlib.com/theme/glint/images/portfolio/the-beetle.jpg"
            className="grid-content"
          >
            <img
              src="https://preview.colorlib.com/theme/glint/images/portfolio/the-beetle.jpg"
              alt="Image 3"
            />
            <div className="overlay">
              <p>+</p>
              <p className="text">SHUTTERBURG</p>
            </div>
          </a>

          <a
            href="https://preview.colorlib.com/theme/glint/images/portfolio/woodcraft.jpg"
            className="grid-content"
          >
            <img
              src="https://preview.colorlib.com/theme/glint/images/portfolio/woodcraft.jpg"
              alt="Image 2"
            />
            <div className="overlay">
              <p>+</p>
              <p className="text">SHUTTERBURG</p>
            </div>
          </a>

          <a
            href="https://preview.colorlib.com/theme/glint/images/portfolio/grow-green.jpg"
            className="grid-content"
          >
            <img
              src="https://preview.colorlib.com/theme/glint/images/portfolio/grow-green.jpg"
              alt="Image 2"
            />
            <div className="overlay">
              <p>+</p>
              <p className="text">SHUTTERBURG</p>
            </div>
          </a>

          <a
            href="https://preview.colorlib.com/theme/glint/images/portfolio/guitarist.jpg"
            className="grid-content"
          >
            <img
              src="https://preview.colorlib.com/theme/glint/images/portfolio/guitarist.jpg"
              alt="Image 2"
            />

            <div className="overlay">
              <p>+</p>
              <p className="text">SHUTTERBURG</p>
            </div>
          </a>

          <a
            href="https://preview.colorlib.com/theme/glint/images/portfolio/palmeira.jpg"
            className="grid-content"
          >
            <img
              src="https://preview.colorlib.com/theme/glint/images/portfolio/palmeira.jpg"
              alt="Image 2"
            />

            <div className="overlay">
              <p>+</p>
              <p className="text">SHUTTERBURG</p>
            </div>
          </a>
        </LightGallery>
      </div>
    </div>
  );
};

export default Gallery;
