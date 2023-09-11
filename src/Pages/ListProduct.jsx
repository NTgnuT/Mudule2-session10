import React from "react";
import Navbar from "../Layouts/Navbar";
import Footer from "../Layouts/Footer";
import { useDispatch, useSelector } from "react-redux";
import { formatMoney } from "../common/fomat";
import { act_add } from "../actions/cartActions";
import { Link } from "react-router-dom";
import { notification } from "antd";

export default function ListProduct() {
  const listProduct = useSelector((pro) => pro.ListProduct);
  const dispath = useDispatch();

  // Hàm thêm sản phẩm vào giỏ hàng
  const handleAddToCart = (product) => {
    // Gửi thồn tin product lên reducer để xử lý
    dispath(act_add(product));
    notification.success({
      message: "Thành công",
      description: "Đã thêm vào giỏ hàng thành công",
    });
  };
  return (
    <>
      <Navbar />
      {/* List product start */}
      <section style={{ backgroundColor: "#eee" }}>
        <div className="text-center container py-5">
          <h4 className="mt-4 mb-5">
            <strong>DANH SÁCH SẢN PHẨM</strong>
          </h4>
          <div className="row">
            {/* Product */}
            {listProduct.map((products) => (
              <div
                className="col-lg-4 col-md-12 mb-4"
                key={products.product_id}
              >
                <div className="card">
                  <div
                    className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                    data-mdb-ripple-color="light"
                  >
                    <img src={products.image} className="w-100" />
                    <a href="#!">
                      <div className="mask">
                        <div className="d-flex justify-content-start align-items-end h-100">
                          <h5>
                            <span className="badge bg-primary ms-2">New</span>
                          </h5>
                        </div>
                      </div>
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        />
                      </div>
                    </a>
                  </div>
                  <div className="card-body">
                    <Link
                      to={`/product/${products.product_id}`}
                      className="text-reset"
                    >
                      <h5 className="card-title mb-3">
                        {products.product_name}
                      </h5>
                    </Link>
                    <h6 className="mb-3">{formatMoney(products.price)}</h6>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleAddToCart(products)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* List product end */}
      <Footer />
    </>
  );
}
