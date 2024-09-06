import "./App.css";
import { Card, CardContent, CardImage, CardText, CardTitle } from "./assets/components/card";

const App = () => {
  return <div className="container">
    {products.map((p)=>(
      <Card key={p.id}>
        <CardImage url={p.image}/>
        <CardContent>
          <CardTitle title ={p.name} />
          <CardText des={p.description}/>

          <div className="button">
            <span>Price: ${p.price}</span>
            <button className="btn">Add to cart</button>
          </div>
        </CardContent>
      </Card>
    ))}
    </div>;
};

export default App;

const products = [
  {
    id: 1,
    name: "Macbook Pro 2021 M1",
    description:
      "Macbook Pro 2021 M1 is a very powerful laptop with a long battery life.",
    price: 1800.0,
    image: "/images/img1.jpg",
  },
  {
    id: 2,
    name: "Macbook Pro 2021 M1",
    description:
      "Macbook Pro 2021 M1 is a very powerful laptop with a long battery life.",
    price: 1800.0,
    image: "/images/img2.jpg",
  },
  {
    id: 3,
    name: "Macbook Pro 2021 M1",
    description:
      "Macbook Pro 2021 M1 is a very powerful laptop with a long battery life.",
    price: 1800.0,
    image: "/images/img3.jpg",
  },
  {
    id: 4,
    name: "Macbook Pro 2021 M1",
    description:
      "Macbook Pro 2021 M1 is a very powerful laptop with a long battery life.",
    price: 1800.0,
    image: "/images/img4.jpg",
  },
  {
    id: 5,
    name: "Macbook Pro 2021 M1",
    description:
      "Macbook Pro 2021 M1 is a very powerful laptop with a long battery life.",
    price: 1800.0,
    image: "/images/img5.jpg",
  },
];
