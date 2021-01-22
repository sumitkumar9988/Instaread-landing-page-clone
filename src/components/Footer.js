import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
        <div className="container-fluid pb-0 mb-0 justify-content-center text-light ">
     <footer>
         <div className="row my-5 justify-content-center py-5">
             <div className="col-11">
                 <div className="row ">
                     <div className="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                         <h3 className="text-muted mb-md-0 mb-5 bold-text">Get Smarter in Minutes.</h3>
                     </div>
                     <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                         <h6 className="mb-3 mb-lg-4 bold-text "><b>Categories</b></h6>
                         <ul className="list-unstyled">
                             <li>New</li>
                             <li>Popular</li>
                             <li>Business</li>
                             <li>Poltics</li>
                             <li>New</li>
                             <li>Popular</li>
                             <li>Business</li>
                             <li>Poltics</li>
                         </ul>
                     </div>
                     <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                         <h6 className="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5"><b>Company</b></h6>
                         <p className="mb-1">Lorem Ispum</p>
                         <ul className="list-unstyled">
                             <li>New</li>
                             <li>Popular</li>
                             <li>Business</li>
                             <li>Poltics</li>
                             <li>New</li>
                             <li>Popular</li>
                             <li>Business</li>
                             <li>Poltics</li>
                         </ul>
                     </div>
                 </div>
                
             </div>
         </div>
     </footer>
 </div>
    );
  }
}

export default Footer;
