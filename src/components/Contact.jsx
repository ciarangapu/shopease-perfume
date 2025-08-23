import React from 'react'
import { FaEnvelope, FaFacebookF, FaLinkedinIn, FaMapMarkedAlt, FaPhone, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  return (
   <section id='contact' className='min-h-screen scroll-mt-20 bg-pink-950 py-12 px-4 sm:px-6 lg:px-8'>
<div className='max-w-7xl mx-auto'>
<div className='text-center mb-16'>
<h1 className='text-4xl font-serif font-bold text-white mb-4'>Contact Us</h1>
<p className='text-lg text-gray-200 max-w-2xl mx-auto'>We’re here to help! Reach out with any questions, feedback, or inquiries, and our team will get back to you as soon as possible.</p>
</div>

<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>



<div className='bg-white p-8 rounded-lg shadow-xl border border-gray-100'>
<h2 className='text-2xl font-serif font-semibold text-gray-900 mb-6'>Send Us a Message</h2>

<form className='space-y-6'>
    <div>
        <label className='block text-sm font-medium text-gray-800 mb-1'>Your Name</label>
        <input type="text" className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent' placeholder='Your name'/>
    </div>

<div>
        <label className='block text-sm font-medium text-gray-800 mb-1'>Your Email</label>
        <input type="email" className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent' placeholder='Your@gmail.com'/>
    </div>

<div>
  
<label className='block text-sm font-medium text-gray-800 mb-1'>Your Email</label>
        <textarea rows="5" className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent' placeholder='Tell us about your fragrance needs ...'/>

</div>
<button className='w-full bg-pink-700 hover:bg-pink-800 text-white py-3 px-6 rounded-lg transition duration-300 font-medium shadow-md'>
Send Message
</button>
</form>
</div>

<div className='space-y-8'>
<div className='bg-white p-8 rounded-lg shadow-xl border border-gray-100'>
<h2 className='text-2xl font-serif font-semibold text-gray-900 mb-6'>Contact Information</h2>
<div className='space-y-6'>
<div className='flex items-start'>
<div className='bg-pink-200 p-3 rounded-full mr-4'>
     <FaPhone className='text-pink-950 text-lg'/>
</div>
<div>
  <h3 className='text-lg font-medium text-gray-900'>Phone</h3>
  <p className='text-gray-800'>+1 (234) 567-8888</p>
  <p className='text-gray-600 text-sm'>Mon-Fri: 9am-6pm</p>
</div>
</div>

<div className='flex items-start'>
<div className='bg-pink-200 rounded-full p-3 mr-4'>
<FaEnvelope className='text-pink-900 text-lg'/>
</div>
{/* </div> */}


<div>
  <h3 className='text-lg font-medium text-gray-900'>Email</h3>
  <p className='text-gray-800'>contact@perfume.com</p>
  <p className='text-gray-600 text-sm'>support@perfume.com</p>
</div>
</div>

<div className='flex items-start'>
<div className='bg-pink-200 rounded-full p-3 mr-4'>
<FaMapMarkedAlt className='text-pink-900 text-lg'/>
</div>

<div>
  <h3 className='text-lg font-medium text-gray-900'>Our Boutique</h3>
  <p className='text-gray-800'>123 Perfume Street</p>
  <p className='text-gray-600 text-sm'>Paris, France 75001</p>
</div>
</div>
</div>

<div className='mt-24'>
<h3 className='text-lg font-medium text-gray-900 mb-4'>Follow Us</h3>
<div className='flex space-x-4'>
<a href="#" className='bg-pink-200 hover:bg-gray-200 p-3 rounded-full transition duration-300'>
  <FaLinkedinIn className='text-pink-950'/>
</a>

<a href="#" className='bg-pink-200 hover:bg-gray-200 p-3 rounded-full transition duration-300'>
  <FaFacebookF className='text-pink-950'/>
</a>

<a href="#" className='bg-pink-200 hover:bg-gray-200 p-3 rounded-full transition duration-300'>
  <FaTwitter className='text-pink-950'/>
</a>

</div>
</div>
</div>
</div>
</div>
</div>
   </section>
  );
};

export default Contact
