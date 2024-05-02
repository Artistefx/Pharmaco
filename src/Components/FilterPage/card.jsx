import React from 'react';

function Card({ item }) {
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                {item.map((val) => (
                    <div key={val.id} className='col-md-3 col-sm-6 card my-3 border-0 position-relative'>
                        <div className='card-img-top text-center'>
                            <img src={val.img} alt="" className='w-75' />
                        </div>
                        <div className="card-body">
                            <div className="card-title fw-bold fs-4">
                                {val.title} -- {val.price}
                            </div>
                            <div className='card-text'>
                                {val.description}
                            </div>
                        </div>
                        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3">
                            <button className='btn btn-dark text-white'>Plus de details  </button>
                        </div>
                    </div>
                ))}
            </div>
            <style jsx>{`
                .card {
                    background-color: #f8f9fa;
                    border-radius: 15px;
                    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
                    width: 300px;
                    height: 500px;
                }

                .card-img-top img {
                    max-width: 100%;
                    height: auto;
                }

                .card-body {
                    padding: 10px;
                }

                .card-title {
                    color: #333;
                }

                .card-text {
                    color: #666;
                }
            `}</style>
        </div>
    );
}

export default Card;
