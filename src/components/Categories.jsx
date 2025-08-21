import React from 'react'
import Product21 from '../assets/♔ Boudoir Carolina Herrera.jpg';
import Product22 from '../assets/1c13ef8f-670f-4aa2-9bae-13bc7609169c.jpg';
import Product23 from "../assets/7b69ba61-16e4-4a63-948c-c3d06f3ca050.jpg";
import Product24 from '../assets/Eros by Versace Eau De Toilette For Men.jpg';
import Product25 from '../assets/Arab Perfume Oil.jpg';
import Product26 from '../assets/Perfume Product Photo _ Midjourney Product Prompts.jpg';


const categories =[
    {img: Product21, alt:"Mens Perfumes", title:"Men's Collection", description:"Bold, classic scents for the modern man."},
    {img: Product22, alt:"Women Perfumes", title:"Women's Collection", description:"Elegant and enchanting fragrances for her."},
    {img: Product23, alt:"Luxury Perfumes", title:"Luxury Editions", description:"Premium blends for a touch of sophistication."},
    {img: Product24, alt:"Unisex Perfumes", title:"Unisex Editions", description:"Versatile aromas for everyone to enjoy."},
    {img: Product25, alt:"Arabic Oud", title:"Arabic Oud", description:"Exotic oud notes inspired by Arabian tradition."},
    {img: Product26, alt:"Gift Set", title:"Gift Package", description:"Perfectly curated sets for special occasions."}
]


const Categories = () => {
  return (
   <section id='categories' className='py-16 scroll-mt-20 bg-white'>
<div className='container mx-auto px-4'>
<div className='text-center mb-12'>
<h2 className='text-3xl font-bold text-amber-950 mb-3'>
Explore Our Fragrance Collections
</h2>
<p className='text-gray-600 max-w-2xl mx-auto'>
  Discover a curated selection of scents for every personality, occasion, and style. Find your signature fragrance today.
</p>
</div>

<div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
{categories.map((category, index)=>(
    <div key={index} className='relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 '>
<div className='h-80 overflow-hidden'>
<img src={category.img} 
alt={category.alt} 
className='w-full object-cover group-hover:scale-105 transition-transform duration-500'/>
</div>
<div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'>
<div className='absolute bottom-0 left-0 p-6'>
<h3 className='text-xl font-semibold text-white'>{category.title}</h3>
<p className='text-gray-200 mt-l'>{category.description}</p>
</div>
</div>
    </div>
))}
</div>

</div>
   </section>
  )
}

export default Categories
