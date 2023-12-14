import React, { useState } from 'react';
import paris from '../images/eiffel tower.jpg';
import giza from '../images/giza.jpg';
import kaaba from '../images/kaaba.jpg';
import medina from '../images/medina.jpg';
import mekka from '../images/mekkah.jpg';
import tajmahal from '../images/taj mahal.jpg';
import timbuktu from '../images/timbuktu.jpg';
import venice from '../images/venice.jpg';
import zanzibar from '../images/zanzibar.jpg';
import ImageDownloader from '../components/ImageDownloader';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <section className="dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <div className="dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                zanzibar,
                giza,
                kaaba,
                medina,
                mekka,
                tajmahal,
                timbuktu,
                venice,
                paris,
              ].map((image, index) => (
                <div key={index}>
                  <button onClick={() => openModal(image)}>
                    <img className="h-auto max-w-full rounded-lg" src={image} alt="" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          id="image-modal"
          className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <div className="relative bg-white rounded-lg shadow w-1/2">
            {/* Modal content */}
            <div className="relative p-4">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 border-b">
                <button
                  type="button"
                  className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                  onClick={closeModal}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <div className="p-4 space-y-4">
                {/* Your modal content goes here */}
                <img className="h-auto max-w-full rounded-lg" src={selectedImage} alt="Selected" />
                <button
                  className="text-blue-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  onClick={closeModal}
                >
                  <ImageDownloader imageUrl={selectedImage} filename={selectedImage}/><span className='bg-green text-dark'>Download</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
