import React from 'react'
import perfumeImg from '../assets/9b2185e5-c3a8-4ab7-9053-d745112142a2.jpg';
const Hero = () => {
  return (
    <section id='home' className='bg-amber-50 scroll-mt-20 py-16'>
<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-10'>
<div className='text-center lg:text-left max-w-xl'>
<h1 className='text-4xl sm:text-5xl font-bold text-amber-950 leading-tight mb-4'>
Discover The Best Deals On Top Products
</h1>
<p className='text-gray-700 text-base sm:text-lg mb-6'>
Explore our diverse selection of fragrances, from floral and fruity to woody and oriental. Whether you’re looking for a fresh everyday scent, a romantic evening perfume, or a bold statement fragrance, we have the perfect match for every occasion.
</p>
<div className='flex justify-center lg:justify-start gap-4'>
<a href="/products"
className='px-6 py-3 bg-pink-900 text-white text-sm font-semibold rounded-lg shadow hover:bg-pink-600 transition'>
    Shop Now
</a>
<a href="/offers"
className='px-6 py-3 border border-pink-500 text-pink-600 text-sm font-semibold rounded-lg hover:bg-pink-200 transition'>
View Offers
</a>
</div>
</div>

<div className='w-full lg:w-1/2 flex justify-center'>
  {/* <img src={require('../assets/57061eea-1259-41bd-b128-a67eac88c4f2.jpg')} alt="Perfume bottle" className='max-h-96 rounded-lg shadow-lg' /> */}

 <img 
  src={perfumeImg} 
  alt="Perfume bottle" 
  className='w-3/4 lg:w-100 max-w-md mx-auto rounded-xl shadow-lg transition-transform transform hover:scale-105' 
/>
</div>
</div>
    </section>
  )
}

export default Hero
