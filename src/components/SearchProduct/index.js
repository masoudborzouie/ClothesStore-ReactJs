import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function Index({ resultApi }) {
  const [queryApi, setQueryApi] = useState({
    product: "",
    number: 0,
  });
  const formHandler = (e) => {
    e.preventDefault();

    fetch(`https://fakestoreapi.com/products?limit=2`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // setQueryApi(data);
        console.log(data);
        resultApi(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Form className="w-50 m-auto shadow p-2 mb-5" onSubmit={formHandler}>
      <h3>Search Product</h3>
      <div className="mb-3">
        <input
          className="w-75"
          controlId="Products"
          type="text"
          placeholder="Please enter a Product"
          onChange={(e) =>
            setQueryApi({ ...queryApi, product: e.target.value })
          }
        />
      </div>
      <div>
        <label>Number of Products</label>

        <select
          className="ms-2"
          onChange={(e) => setQueryApi({ ...queryApi, number: e.target.value })}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <Button variant="primary" type="submit" className="m-2">
        Search
      </Button>
    </Form>
  );
}
