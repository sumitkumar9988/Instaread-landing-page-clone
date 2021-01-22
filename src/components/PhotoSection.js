import React, { Component } from "react";

export class PhotoSection extends Component {
  render() {
    return (
        <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Available in audio & text formats.</h2>
            <div class="d-flex justify-content-center">
            <img src="img/001.png" className="mx-auto d-block img-responsive" alt=""/>
            </div>
          </div>
            <div className="section-title"> 
            <h2>Mobile, tablet, and desktop. Unlimited access on desktop, android-optimized mobile-web-app or iOS app.</h2>
            <div class="d-flex justify-content-center">
            <img src="img/002.png" className="img-responsive" alt=""/>
            </div>
          </div> 
          <a className="btn btn-custom btn-lg page-scroll">
            Try Instaread
          </a>
        </div>
      </div>
    );
  }
}

export default PhotoSection;
