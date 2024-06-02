import React from "react";
import { Link } from "react-router-dom";

function Card1({ item }) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {item.map((val) => (
          <div
            key={val.id}
            className="col-md-3 col-sm-6 card my-3 border-0 position-relative"
          >
            <div className="card-img-top text-center">
              <img
                src={val.image1}
                alt=""
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <div className="card-title fw-bold fs-4">
                  {val.nom} -- {val.priceReduction} DH
                </div>
                <div className="card-text">{val.description}</div>
              </div>
              <div className="mt-auto">
                <Link
                  to={`/productPage/${val.id}`}
                  className="btn btn-dark text-white w-100"
                >
                  Plus de détails
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .card {
          background-color: #f8f9fa;
          border-radius: 15px;
          box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
          width: 350px;
          display: flex;
          flex-direction: column;
        }

        .card-img-top img {
          max-width: 100%;
          height: auto;
        }

        .card-body {
          padding: 10px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .card-title {
          color: #333;
        }

        .card-text {
          color: #666;
        }

        .btn {
          padding: 10px 20px;
          font-size: 14px;
          border-radius: 5px;
        }

        .mt-auto {
          margin-top: auto;
        }
      `}</style>
    </div>
  );
}

export default Card1;
