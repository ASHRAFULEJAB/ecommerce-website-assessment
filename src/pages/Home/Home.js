import React, { useEffect, useState } from "react";
import { useFirebase } from "../../firebase/firebaseConfig";
import ProductCard from "./ProductCard";
const Home = () => {
  const firebase = useFirebase();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    // firebase.listAllProducts().then((products) => setBooks(products.docs));
  }, []);

  return (
    <div className="container mt-5">
      {/* {books.map((book) => (
        <ProductCard
          // link={`/products/view/${book.id}`}
          // key={book.id}
          // id={book.id}
          // {...book.data()}
        />
      ))} */}
      <ProductCard />
    </div>
  );
};

export default Home;
