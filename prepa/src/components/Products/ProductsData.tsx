import { useState } from 'react'
import './productsData.css'

// Exemple de données de produit
const productsData = [
  {
    id: 1,
    name: 'Paracétamol 500mg',
    description: 'Un analgésique couramment utilisé pour traiter la douleur légère à modérée et la fièvre.',
    price: '5.000 Ar',
    image: '',
  },
  {
    id: 2,
    name: 'Ibuprofène 200mg',
    description: 'Anti-inflammatoire non stéroïdien utilisé pour réduire la douleur et l’inflammation.',
    price: '10.000 Ar',
    image: '',
  },
  {
    id: 3,
    name: 'Vitamine C 1000mg',
    description: 'Supplément pour renforcer le système immunitaire et prévenir les carences en vitamine C.',
    price: '12.000 Ar',
    image: '',
  },
  // Ajoute autant de produits que nécessaire
];

function ProductCatalogue() {
  const [products] = useState(productsData); // Simule un état pour les produits (peut venir d'une API)

  return (
    <div className='product__container'>

      <span className="catalogue__title font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-green-500">Notre Catalogue de Produits :</span>

      <div className='product__grid'>
        {products.map((product) => (
          <div key={product.id} className='product__card'>
            <img src={product.image} alt={product.name} className='product__image' />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className='product__price'>{product.price}</p>
            <button className='product__button'>Ajouter au Panier</button>
          </div>
        ))}
      </div>
    </div>
  );
}

  

export default ProductCatalogue;
