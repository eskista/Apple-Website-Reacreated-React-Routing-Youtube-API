import React, { Component } from "react";
import { Link } from "react-router-dom";

class Iphone extends Component {
  constructor() {
    super();
    this.state = {
      // empty array named products to hold all products that will be fetched from JSON
      products: [],
    };
  }
  componentDidMount() {
    fetch("/iphones.json")
      .then((res) => res.json())
      .then((products) => {
        // The 1st products represents the returned JSON file which we see as array name above for the entire JSON Response
        // The 2nd products is for the array we see in the JSON file
        const product = products.products;
        this.setState((state) => {
          return {
            products: product,
          };
        });
      });
  }

  render() {
    // console.log(this.state.products);
    let order = 1;
    return (
      <div>
        <section className="internal-page-wrapper top-100">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-12">
                <div className="title-wraper">iphones</div>
                <div className="brief-description">
                  The best for the brightest.
                </div>
              </div>
            </div>
            {this.state.products.map((product) => {
              let id = product.Id;
              let title = product.Title;
              let img = product.img;
              let Brief = product.Brief;
              let StartPrice = product.StartPrice;
              let PriceRange = product.PriceRange;
              let productPage = "/iphone/" + id;

              let order1 = 1;
              let order2 = 2;
              if (order != 1) {
                order1 = 2;
                order2 = 1;
                order--;
              } else {
                order++;
              }

              let productDiv = (
                <div
                  key={id}
                  className="row justify-content-center text-center product-holder h-100"
                >
                  <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                    <div className="product-title">{title}</div>
                    <div className="product-brief">{Brief}</div>
                    <div className="starting-price">
                      {`Starting at ${StartPrice}`}
                    </div>
                    <div className="monthly-price">{PriceRange}</div>
                    <div className="links-wrapper">
                      <ul>
                        <li>
                          <Link to={productPage}>Learn more</Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className={`col-sm-12 col-md-6 order-${order2}`}>
                    <div className="product-image">
                      <img src={img} />
                    </div>
                  </div>
                </div>
              );
              return productDiv;
            })}
          </div>
        </section>
      </div>
    );
  }
}
export default Iphone;
