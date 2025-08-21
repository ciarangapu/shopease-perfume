import product19 from '../assets/Cherry Blossom Perfume.jpg';
import product20 from '../assets/15 perfumes de mujer infalibles para regalar en Navidad.jpg';
import React, { useEffect, useState } from 'react'
import product1 from '../assets/57061eea-1259-41bd-b128-a67eac88c4f2.jpg';
import product2 from '../assets/6feb5c0f-5bbf-4c5b-bde5-8b98ceac7d39.jpg';
import product3 from '../assets/97400092-62b7-4813-b238-0cbc0dd83fd5.jpg';
import product4 from '../assets/15 perfumes de mujer infalibles para regalar en Navidad.jpg';
import product5 from '../assets/granivera_com- kobiecy blog  z nutką lifestyle_ PERFUMY TIFFANY & CO_.jpg';
import product6 from '../assets/Mon Parfum Olympéa de Paco Rabanne  - Maman Enjoy.jpg';
import product7 from '../assets/Versace Bright Crystal Eau de Toilette.jpg';
import product8 from "../assets/Victoria's Secret Love Spell Fragrance.jpg";
import product9 from '../assets/Perfume bottle and pink smoke _ Premium PSD.jpg';
import product10 from '../assets/Perfume Bottles PNG Transparent, Exquisite Perfume Bottle, Perfume Clipart, Product Kind, Pretty PNG Image For Free Download.jpg';
import product11 from '../assets/I love this perfume smells gorgeous.jpg';
import product12 from '../assets/10 perfumes que harán a cualquiera irresistible.jpg';
import product13 from '../assets/516249d3-ef25-433a-aaf3-675047510169.jpg';
import product14 from '../assets/The 14 Best Floral Perfumes, According to Editors.jpg';
import product15 from '../assets/Would you like to try Dolce & Gabbana_.jpg';
import product16 from '../assets/❤.jpg';
import product17 from '../assets/My Way by Giorgio Armani is a Floral fragrance for….jpg';
import product18 from '../assets/Givenchy Irresistable - Nazar Andriychuk (1).jpg';

import { FiChevronLeft, FiChevronRight, FiShoppingCart, FiStar, FiHeart } from 'react-icons/fi';
const Products = () => {
const [currentSlide, setCurrentSlide] = useState(0);
const [productsPerPage, setProductsPerPage] = useState(4);

    const products = [
        {id: 1, name:'Floral', price:99.99, rating: 4.5, image:product1, discount:20},
        {id: 2, name:'Woody', price:109.99, rating: 4.7, image:product2, discount:15},
        {id: 3, name:'Fruity', price:89.99, rating: 4.3, image:product3, discount:10},
        {id: 4, name:'Oriental', price:119.99, rating: 4.8, image:product4, discount:25},
        {id: 5, name:'Tiffany', price:129.99, rating: 4.9, image:product5, discount:30},
        {id: 6, name:'Olympéa', price:139.99, rating: 4.6, image:product6, discount:18},
        {id: 7, name:'Versace', price:149.99, rating: 4.4, image:product7, discount:22},
        {id: 8, name:"Victoria's Secret", price:159.99, rating: 4.2, image:product8, discount:12},
        {id: 9, name:'Pink Smoke', price:89.99, rating: 4.1, image:product9, discount:8},
        {id: 10, name:'Pretty Bottle', price:79.99, rating: 4.0, image:product10, discount:5},
        {id: 11, name:'Gorgeous Scent', price:119.99, rating: 4.6, image:product11, discount:18},
        {id: 12, name:'Irresistible', price:109.99, rating: 4.3, image:product12, discount:12},
        {id: 13, name:'Classic', price:99.99, rating: 4.2, image:product13, discount:10},
        {id: 14, name:'Best Floral', price:129.99, rating: 4.8, image:product14, discount:20},
        {id: 15, name:'Dolce & Gabbana', price:139.99, rating: 4.7, image:product15, discount:15},
        {id: 16, name:'Heart', price:69.99, rating: 4.0, image:product16, discount:5},
        {id: 17, name:'My Way', price:149.99, rating: 4.9, image:product17, discount:25},
        {id: 18, name:'Givenchy', price:159.99, rating: 4.5, image:product18, discount:18},
        {id: 19, name:'Cherry Blossom', price:119.99, rating: 4.7, image:product19, discount:10},
        {id: 20, name:'Navidad', price:129.99, rating: 4.8, image:product20, discount:15},
    ];

useEffect(() =>{
  const handleResize = () =>{
    if(window.innerWidth < 640){
      setProductsPerPage(1);
    }else if(window.innerWidth < 768){
      setProductsPerPage(2)
    }else if(window.innerWidth < 1024){
setProductsPerPage(3)
    }else {
      setProductsPerPage(4);
    }
  };
  handleResize();
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
},[]);
const totalSlides = Math.ceil(products.length / productsPerPage);
const nextSlide = () => {
  setCurrentSlide((prev)=> (prev === totalSlides - 1 ? 0 : prev + 1));
};
const prevSlide = () =>{
  setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
};
const visibleProducts = products.slice(
  currentSlide * productsPerPage,
  (currentSlide + 1) * productsPerPage
);
  return (
   <section id='products' className='py-12 scroll-mt-20 bg-gray-50'>
 <div className='container mx-auto px-4'>
      <div className='flex justify-between items-center mb-8'>
<h2 className='md:text-3xl text-2xl font-bold text-amber-900'>Featured Products</h2>
<div className='flex space-x-4'>
<button onClick={prevSlide}
className='p-2 rounded-full bg-white shadow-md hover:bg-pink-100 text-pink-600 transition-colors'
aria-label='previous slide'>
<FiChevronLeft size={24} />
</button>

<button onClick={nextSlide}
className='p-2 rounded-full bg-white shadow-md hover:bg-pink-100 text-pink-600 transition-colors'
aria-label='next slide'>
<FiChevronRight size={24} />
</button>
</div>
      </div>
      <div className='relative overflow-hidden'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {
            visibleProducts.map((product) => (
              <div key={product.id} className='bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:scale-105'>
                <div className='relative'>
                  <img src={product.image} alt={product.name} className='w-full h-64 object-cover' />
                  {product.discount > 0 && (
                    <span className='absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full'>
                      -{product.discount}%
                    </span>
                  )}
                  <button className='absolute top-3 left-3 p-2 bg-white rounded-full shadow-md hover:bg-pink-100 text-gray-700'>
                    <FiHeart size={18} />
                  </button>
                </div>
                <div className='p-4'>
                  <div className='flex items-center mb-2'>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FiStar
                        key={i}
                        size={16}
                        className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                      />
                    ))}
                    <span className='text-sm text-gray-500 ml-1'>
                      ({product.rating})
                    </span>
                  </div>
                  <h3 className='text-lg font-semibold text-gray-800 mb-1'>{product.name}</h3>
                  <div className='flex items-center justify-between'>
                    <div>
                      <span className='text-lg font-bold text-pink-600'>
                        ${ (product.price * (1 - product.discount / 100)).toFixed(2) }
                      </span>
                      {product.discount > 0 && (
                        <span className='text-sm text-gray-500 line-through ml-2'>
                          ${ product.price.toFixed(2) }
                        </span>
                      )}
                    </div>
                    <button className='p-2 bg-pink-950 text-white hover:bg-pink-700 transition'>
                      <FiShoppingCart size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>

<div className='flex justify-center mt-6 space-x-2'>
{[...Array(totalSlides)].map((_, index) => (
 <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-pink-950':'bg-gray-400'}`}
 aria-label={`Go to slide ${index + 1}`}>
 </button>
))}
</div>

    </div>
   </section>
  );
};

export default Products
