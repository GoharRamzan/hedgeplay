import React, { useState } from 'react';
import image1 from  '../assets/dash1.jpeg'
import image2 from  '../assets/dash2.jpeg'
import image3 from  '../assets/dash3.jpeg'
import image4 from  '../assets/dash4.jpeg'
import image5 from  '../assets/dash5.jpeg'

const images = [
 
  image1,
  image2,
  image3,
  image4,
  image5
];

const ProductGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const nextImage = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className='py-12 w-full h-full flex flex-col justify-center items-center overflow-hidden bg-[#a9a9b9]'>
     <h1 className='bg-[#1C52CB] text-white font-bold h-12 mb-10   px-10 text-2xl flex items-center justify-center mt-7 rounded-3xl'>PRODUCT IMAGES</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 h-[90%] px-6 md:px-0'>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Product ${index}`}
            className='cursor-pointer rounded-lg shadow hover:scale-105 transition duration-300'
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {/* Modal */}
      {isOpen && (
        <div className='fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center'>
          <div className='relative max-w-3xl w-full p-4'>
            <button
              className='absolute top-2 right-4 text-white text-2xl'
              onClick={closeModal}
            >
              ✕
            </button>
            <img
              src={images[currentIndex]}
              alt='Product Full'
              className='rounded-lg w-full max-h-[80vh] object-contain'
            />
            <div className='flex justify-between mt-4'>
              <button
                className='text-white bg-gray-700 px-4 py-2 rounded hover:bg-gray-600'
                onClick={prevImage}
              >
                ← Prev
              </button>
              <button
                className='text-white bg-gray-700 px-4 py-2 rounded hover:bg-gray-600'
                onClick={nextImage}
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
