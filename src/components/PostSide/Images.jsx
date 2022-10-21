import React, { Component } from "react";
import axios from "axios";
 
export default class Images extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      images: [],
    };
  }
 
  componentDidMount() {
    this.getImages();
  }
 
  getImages = () => {
    axios
      .get("http://localhost:8000/api/list")
      .then((response) => {
        if (response.status === 200) {
          this.setState({
            images: response.data.data,
          });
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
 
  render() {
    return (
      <div className="container pt-4">
        <div className="row">
          <div className="col-lg-12">
            <div className="card shadow">
              <div className="card-header">
                <h4 className="card-title fw-bold"> Images List </h4>
              </div>
              <div className="card-body">
                <div className="row">
 
                  {
                    this.state.images.length > 0 ? (
                        this.state.images.map((image) => (
                        <div className="col-xl-6 col-lg-8 col-sm-12 col-12 mt-3" key={image.IdPost}>
                            <img src={ "http://localhost:8000/api/list/" + image.img_path } className="img-fluid img-bordered" width="200px"
                            />
                            <h1> {image.JudulPost}</h1>
                        </div>
                        ))
                    ) : (
                        <h6 className="text-danger text-center">No Image Found </h6>
                    )
                  }
 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}