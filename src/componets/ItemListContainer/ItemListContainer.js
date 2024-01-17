import React, { useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import ItemDetail from '../ItemDetail/ItemDetail';
import '../ItemListContainer/ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelectProduct = (productId) => {
    const selected = products.find((product) => product.id === productId);
    setSelectedProduct(selected);
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
  };

  useEffect(() => {
    const fetchedProducts = [
      { 
        id: 1, 
        name: 'Purina Delicate', 
        price: 15.50, 
        stock: 10,
        image: 'https://puppis.vteximg.com.br/arquivos/ids/194640-1000-1000/146013-146014-146015.png?v=638302273624000000',
        detail: 'Purina Delicate Structure' 
      },
      { 
        id: 2, 
        name: 'Purina Sensitive', 
        price: 19.99, 
        stock: 15,
        image: 'https://mendoza.pluspet.com.ar/cdn/shop/files/alimento-pro-plan-perro-adulto-piel-estomago-sensible-raza-pequena-01.jpg?v=1703081281',
        detail: 'Purina Sensitive Skin and Stomach' 
      },
      { 
        id: 3, 
        name: 'Pelota', 
        price: 2.99, 
        stock: 20,
        image: 'https://static.miscota.com/media/1/photos/products/132374/juguete-para-perros-pequenos-pelota-con-pinchos-azul_1_g.jpeg',
        detail: 'Pelota con pinchos azul' 
      },
      { 
        id: 4, 
        name: 'Poncho para perros', 
        price: 21.99, 
        stock: 8,
        image: 'https://manusab.com/wp-content/uploads/2020/07/En-Manusab-encuentras-accesorios-para-ma_scotas-como-collares-para-perros-pecheras-para-perros-arneses-para-perros-y-dema_s.-Capa-impermeable-para-perros-.jpg',
        detail: 'Poncho protector para perros' 
      },
      { 
        id: 5, 
        name: 'Collar Arcoiris', 
        price: 8.20, 
        stock: 12,
        image: 'https://i0.wp.com/almapets.com/wp-content/uploads/2018/04/collar-doble-agarre-perro-reforzado-seguro-.jpg?fit=1100%2C825&ssl=1',
        detail: 'Collar regulable multicolor' 
      },
      { 
        id: 6, 
        name: 'Shampoo Snilove', 
        price: 5.50, 
        stock: 18,
        image: 'https://img.interempresas.net/FotosArtProductos/P215763.jpg',
        detail: 'Shampoo Snilove para cachorros' 
      },
      { 
        id: 7, 
        name: 'Perfume', 
        price: 6.99, 
        stock: 14,
        image: 'https://i.pinimg.com/550x/80/ee/83/80ee8364b442bafdfaf3f87f76a2fa48.jpg',
        detail: 'Perfume Oh my Dog' 
      },
      { 
        id: 8, 
        name: 'Transportadora Canil', 
        price: 52.25, 
        stock: 5,
        image: 'https://http2.mlstatic.com/D_NQ_NP_963240-MLA48417689061_122021-O.webp',
        detail: 'Transportadora Canil de Polipropileno y acero inoxidable' 
      },
      { 
        id: 9, 
        name: 'Bolso portátil', 
        price: 48.50, 
        stock: 7,
        image: 'https://www.prensalibre.com/wp-content/uploads/2021/11/IMG-20211029-WA0020.jpg?quality=52&w=760&h=430&crop=1',
        detail: 'Bolso transportador portatil para viajes de alta calidad' 
      },
      { 
        id: 10, 
        name: 'Set de entrenamiento', 
        price: 32.20, 
        stock: 10,
        image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71njujVUrJL._AC_UF1000,1000_QL80_.jpg',
        detail: 'Set de entrenamiento Smylepets 3 piezas' 
      },
      { 
        id: 11, 
        name: 'Bebedero inteligente', 
        price: 53.50, 
        stock: 3,
        image: 'https://http2.mlstatic.com/D_NQ_NP_690191-MLA69187714558_052023-O.webp',
        detail: 'Bebedero inteligente patita' 
      },
      { 
        id: 12, 
        name: 'Cámara de vigilancia', 
        price: 51.75, 
        stock: 6,
        image: 'https://topesdegama.com/app/uploads-topesdegama.com/2020/03/camara-gncc.jpg',
        detail: 'Cámara de vigilancia inteligente WIFI' 
      },

    ];

    setProducts(fetchedProducts);
  }, []);

  return (
    <div className="Container">
      <h2>{greeting}</h2>
      <ItemCount stock={5} initial={1} OnAdd={() => {}} />
      <ItemList products={products} onSelectProduct={handleSelectProduct} />
      {selectedProduct && (
        <ItemDetail product={selectedProduct} onCloseDetail={handleCloseDetail} />
      )}
    </div>
  );
};

export default ItemListContainer;





git add src/componets/ItemListContainer/ItemListContainer.js