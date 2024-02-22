import { useState } from "react";
// import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import Counter from "../Counter";
import ItemsForm from "./ItemsForm";
import ItemsList from "./ItemsList";
import EditProductForm from "./EditProductForm";

const ItemsWrapper = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([
      ...products,
      { id: uuidv4(), task: product, idEditing: false },
    ]);
    console.log(products);
  };

  const editProduct = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, isEditing: !product.isEditing }
          : product
      )
    );
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const editTask = (task, id) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, task, isEditing: !product.isEditing }
          : product
      )
    );
  };

  return (
    <div>
      <div className="bg-gray-300 rounded m-10 p-5 ">
        <div className="flex justify-between mb-2 mx-10">
          <div className="flex items-center space-x-4 ">
            <ItemsForm
              type="string"
              name="product"
              placeholder={"Enter your products..."}
              extraClassName={"bg-stone-100 rounded w-60 p-1 pl-2 outline-none"}
              addProduct={addProduct}
            />
          </div>
          <Counter />
        </div>
        <div>
          <h1 className="text-xl font-semibold text-center pb-4">
            {setProducts ? "" : "Your Cart items are..."}
          </h1>
        </div>

        {products.map((product, index) =>
          product.isEditing ? (
            <EditProductForm
              key={index}
              editProduct={editTask}
              task={product}
            />
          ) : (
            <ItemsList
              key={index}
              task={product}
              editProduct={editProduct}
              deleteProduct={deleteProduct}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ItemsWrapper;
