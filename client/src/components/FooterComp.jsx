import React from 'react';

const FooterComp = () => {
  return (
    <>
      <footer className="text-gray-600 h-full body-font">
        <div className=" px-5  border-t-2 bg-white mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex  title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src="carwash.png" alt="logo" className="w-[55%]" />
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Hasim Car Wash —{' '}
            <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">
              @Hyderabad
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a target='_blank' href='https://www.facebook.com/profile.php?id=61568254983722' className="text-gray-500 hover:text-blue-700 transition-colors duration-300">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
             
          </span>
        </div>
      </footer>
    </>
  );
};

export default FooterComp;
