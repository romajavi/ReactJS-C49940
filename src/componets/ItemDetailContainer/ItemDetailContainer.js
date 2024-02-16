import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db";

import '../ItemDetailContainer/ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    const productRef = doc(db, "productos", productId);
    
    getDoc(productRef)
      .then((response) => {
        if (response.exists()) {
          const productData = { id: response.id, ...response.data() };
          setProduct(productData);
        } else {
          console.error("Product not found");
        }
      })
      .catch((error) => console.log(error));

  }, [productId]);

  return (
    <div className="item-detail-container">
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;