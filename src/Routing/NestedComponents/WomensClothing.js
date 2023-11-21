import { useState, useEffect} from "react";
import axios from "axios";

function WomensClothing() {
  let [state, setState] = useState([]);
  useEffect(()=>{
    getData();


  },[])
  const getData = () => {
    //write the logic to send request to the server

    axios
      .get("https://fakestoreapi.com/products/category/women's clothing")
      .then((res) => {
        setState(res.data);
      })
      .catch((errordata) => {});
  };
  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <h2>WomensClothing Component</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        quo perferendis odio quae accusamus eum expedita soluta necessitatibus
        laboriosam obcaecati eius at architecto recusandae veritatis sunt
        eveniet error, cumque, voluptatibus inventore explicabo dolores saepe
        eligendi? Commodi nihil ipsam ipsum, blanditiis consequuntur sapiente
        animi esse qui possimus libero quae, doloremque aperiam nam vitae
        provident optio exercitationem quas iusto, aliquam ea iure reiciendis.
        Ullam ipsa adipisci impedit enim? Hic deserunt aliquid reprehenderit
        commodi minima quia temporibus sint similique, molestias incidunt
        voluptate porro iure nam maiores adipisci id voluptates perspiciatis qui
        consectetur. Repellendus natus molestiae ratione quod. Placeat deserunt
        quis voluptates dolorem maxime!
      </p>
      <button onClick={getData}>Get Data</button>

      <div>
        {state.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              marginTop: "50px",
              gap: "10px",
            }}
          >
            {state.map((element) => {
              return (
                <div
                  style={{
                    width: "290px",
                    boxShadow: "0 0 10px black",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  <img src={element.image} width={"100%"} height={200} />
                  <h4>{element.title}</h4>
                  <p>$ {element.price}</p>
                  <button>Product Details</button>
                </div>
              );
            })}
          </div>
        ) : (
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "red",
            }}
          >
            No Products
          </h2>
        )}
      </div>
    </div>
  );
}

export default WomensClothing;
