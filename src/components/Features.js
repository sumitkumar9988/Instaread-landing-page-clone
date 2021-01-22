import React, { Component } from "react";

export class features extends Component {
  render() {
    return (
        <div id="services" className="text-center">
        <div className="container">
        
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div  key={`${d.name}-${i}`} className="col-md-4">
                    {" "}
                    <img src={d.img} alt="..." className="service-img" />
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default features;
