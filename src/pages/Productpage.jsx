import { getProductsFromCategory } from "../api/Apidata";
import { DataContext } from "../context/DataContext";
import { useContext } from "react";
// import Card from "../components/Card";

function Card(props) {
  const { addtocart } = useContext(DataContext);
  return (
    <div className="card-cont">
      <img src={props.image} height={250} />
      <span className="title">{props.title}</span>
      <div className="butt">
        <span className="price">Price : ${props.price}</span>
        <span
          className="price"
          onClick={() => {
            addtocart(props.id, props.image, props.price, props.title);
          }}
        >
          Buy
        </span>
      </div>
    </div>
  );
}

const Productpage = () => {

  const {data, setData, category} = useContext(DataContext); 
  return (
    <>
      <div className="product-cont">
        <div className="product-cont-part1">
          <h1>Categories</h1>
          <div className="categories-list">
            {category !== null ? (
              category.map((item, index) => (
                <div
                  className="list-item"
                  key={index}
                  onClick={() => {
                    getProductsFromCategory(item).then((data) => setData(data));
                  }}
                >
                  {item}
                </div>
              ))
            ) : (
              <p>loading....</p>
            )}
          </div>
        </div>
        <div className="product-cont-part2">
          {data !== null ? (
            data.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                image={item.image}
                price={item.price}
                title={item.title}
              />
            ))
          ) : (
            <p>loading...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Productpage;
