import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Swal from "sweetalert2";

export default function List() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    await axios
      .get(`http://103.105.78.75/api/Profile/List`)
      .then(({ data }) => {
        setProducts(data);
      });
  };

  const deleteProduct = async (id) => {
    const isConfirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      return result.isConfirmed;
    });

    if (!isConfirm) {
      return;
    }

    await axios
      .delete(`http://103.105.78.75/api/Profile/${id}`)
      .then(({ data }) => {
        Swal.fire({
          icon: "success",
          text: data.message,
        });
        fetchProducts();
      })
      .catch(({ response: { data } }) => {
        Swal.fire({
          text: data.message,
          icon: "error",
        });
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card card-body">
            <div className="card-header">
              <h4>
                Data Profile
              </h4>
            </div>
            <div className="table-responsive">
              <table className="table table-bordered mb-0 text-center">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>IdUser</th>
                    <th>NamaUser</th>
                    <th>TipeUser</th>
                    <th>Gambar</th>
                  </tr>
                </thead>
                <tbody>
                  {products.length > 0 &&
                    products.map((row, key) => (
                      <tr key={key}>
                        <td>{row.IdProfile}</td>
                        <td>{row.IdUser}</td>
                        <td>{row.NamaUser}</td>
                        <td>{row.TipeUser}</td>
                        <td>
                          <img
                            width="50px"
                            src={`http://103.105.78.75/${row.ProfilePic_Path}`}
                          />
                        </td>
                        {/* <td>{row.TipeUser}</td> */}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}