import React, { useEffect, useState } from "react";
import "./Book.css";

import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../../redux/actions/productsAction";

const Book = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const dataProducts = useSelector((state) => state.products);

  useEffect(() => {
    setProducts(dataProducts);
  }, [dataProducts]);

  return (
    <>
      {products.length >= 1 ? (
        products.map((item, index) => {
          return (
            <div key={index} className=" divbooksimgs h-96 ">
              <div className="container">
                <div className="content-inner">
                  <div className="content-front">
                    <div className="cf-inner">
                      <div
                        className="bg"
                        style={{
                          backgroundImage: `url(${item.formats["image/jpeg"]})`,
                        }}
                      ></div>
                      <div className="overlay"></div>
                      <div className="inner"></div>
                      <div className="serv-num"></div>
                    </div>
                  </div>
                  <div className="content-back">
                    <div className="cf-inner">
                      <div className="inner">
                        <div className="dec-icon">
                          <i className="fa fa-book-open"></i>{" "}
                        </div>
                        <button type="button">Buy Now </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="endcard">
                <h3 className="text-xl font-bold text-neutral-800 ">
                  {item.title.substring(0, 15)}
                </h3>
                <h6 className="text-sm text-slate-400 font-bold ">
                  {item.authors.map((item) => {
                    return item.name.substring(0, 15);
                  })}
                </h6>
                <div className="rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h2 className="text-center p-5">Not Found . . .</h2>
      )}
    </>
  );
};

export default Book;
