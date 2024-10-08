import { useState } from 'react'
import './productsData.css'

const productsData = [
  {
    id: 1,
    name: 'Paracétamol 500mg',
    description: 'Un analgésique couramment utilisé pour traiter la douleur légère à modérée et la fièvre.',
    price: '5.000 Ar',
    image: 'https://media.istockphoto.com/id/1217213618/fr/photo/comprim%C3%A9s-g%C3%A9n%C3%A9riques-de-parac%C3%A9tamol-500mg.jpg?s=612x612&w=0&k=20&c=0GXmAUlK526Ia1EBtD5yll4JZIySn-kVxpj5GJxyXD8=',
  },
  {
    id: 2,
    name: 'Ibuprofène 200mg',
    description: 'Anti-inflammatoire non stéroïdien utilisé pour réduire la douleur et l’inflammation.',
    price: '10.000 Ar',
    image: 'https://media.istockphoto.com/id/1022216112/fr/photo/paquet-dibuprof%C3%A8ne-g%C3%A9n%C3%A9rique-comprim%C3%A9s.jpg?s=612x612&w=0&k=20&c=Hh8caNPmrFVg3XMKnzgyD0DeP3QDs1vl3cBxf2LwX4s=',
  },
  {
    id: 3,
    name: 'Vitamine C 1000mg',
    description: 'Supplément pour renforcer le système immunitaire et prévenir les carences en vitamine C.',
    price: '12.000 Ar',
    image: 'https://media.istockphoto.com/id/459004449/fr/photo/haliborange-vitamine-c-1-mg-effervescentes-tablettes.jpg?s=612x612&w=0&k=20&c=Uh2ifbZSik84UfPqU-OG9Iv55dd4ccwto47auQL0g68=',
  },
  {
    id: 4,
    name: 'Vitamine C 1000mg',
    description: 'Supplément pour renforcer le système immunitaire et prévenir les carences en vitamine C.',
    price: '12.000 Ar',
    image: 'https://media.istockphoto.com/id/459004449/fr/photo/haliborange-vitamine-c-1-mg-effervescentes-tablettes.jpg?s=612x612&w=0&k=20&c=Uh2ifbZSik84UfPqU-OG9Iv55dd4ccwto47auQL0g68=',
  },
  {
    id: 5,
    name: 'Vitamine C 1000mg',
    description: 'Supplément pour renforcer le système immunitaire et prévenir les carences en vitamine C.',
    price: '12.000 Ar',
    image: 'https://media.istockphoto.com/id/459004449/fr/photo/haliborange-vitamine-c-1-mg-effervescentes-tablettes.jpg?s=612x612&w=0&k=20&c=Uh2ifbZSik84UfPqU-OG9Iv55dd4ccwto47auQL0g68=',
  },
  {
    id: 6,
    name: 'Vitamine C 1000mg',
    description: 'Supplément pour renforcer le système immunitaire et prévenir les carences en vitamine C.',
    price: '12.000 Ar',
    image: 'https://media.istockphoto.com/id/459004449/fr/photo/haliborange-vitamine-c-1-mg-effervescentes-tablettes.jpg?s=612x612&w=0&k=20&c=Uh2ifbZSik84UfPqU-OG9Iv55dd4ccwto47auQL0g68=',
  },
];


function ProductCatalogue() {
  const [products] = useState(productsData); 
  // const [product, setProduct] = useState('Bonjour');

  // const handleClick = () => {
  //   setProduct(product === 'Bonjour' ? 'ibu' : 'Bonjour');
  // }

  return (
    <div className='product__container'>
      {/* <p>OVY EE</p>
      <h2>{product}</h2>
      <button onClick={ handleClick }>PVY</button> */}

      <span className="catalogue__title font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-green-500">Notre Catalogue de Produits :</span>

      <div className='product__grid'>
        {products.map((product) => (
          <div key={product.id} className='product__card'>

            <div className="image__container">
                <img src={product.image} alt={product.name} className='product__image' />
            </div>

            <h2 className='product__name'>{product.name}</h2>
            <h3 className='product__description'>{product.description}</h3>
            <p className='product__price'>{product.price}</p>
            <button className='product__button'>Ajouter au Panier</button>

          </div>
        ))}
      </div>
    </div>
  );
}

  

export default ProductCatalogue;
