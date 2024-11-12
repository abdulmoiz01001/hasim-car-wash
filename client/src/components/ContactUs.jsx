import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactUs = () => {
  // Formik setup
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      message: Yup.string()
        .required('Message is required')
        .min(10, 'Message must be at least 10 characters'),
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log("values: ", values)

      const localhost = "https://hasim-server-967rg8a80-abdul-moizs-projects-a24e34a8.vercel.app" || "http://localhost:5000" 
      
      try {
        const response = await fetch(`https://hasim-server.vercel.app/api/contact`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            message: values.message,
          }),
        });
        const result = await response.json();
        if (result.success) {
          alert(result.message);
          resetForm();
        } else {
          alert('Failed to send message. Please try again later.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again later.');
      }
    },
  });

  return (
    <>
    <section id="contact" className="text-gray-600 body-font mobile:w-full flex flex-col justify-center items-center relative">
      <div className="w-[80%] tablet:flex tablet:justify-center mobile:flex mobile:justify-center">
        <h1 className="text-6xl tablet:text-4xl mobile:text-3xl inline border-b-[var(--red-color)] border-b-4 text-[var(--red-color)] font-bold">Contact Us</h1>
      </div>
      
      <div className="desktop:container laptop:container mobile:w-full px-5 py-24 mx-auto flex sm:flex-nowrap tablet:flex-col mobile:flex-col flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.444914383567!2d68.37508492538815!3d25.38991367758745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c70e30e256ce9%3A0xe1a42308001f0e87!2sPakka%20Qilla%2C%20Hyderabad%2C%20Sindh%2017000!5e0!3m2!1sen!2s!4v1731327279965!5m2!1sen!2s"
            style={{
              filter: 'grayscale(1) contrast(1.2) opacity(0.4)',
            }}
          ></iframe>
         <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
              <p className="mt-1">Hyderabad , Sindh , Pakistan</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
              <a className="text-red-500 leading-relaxed">hasimwash@gmail.com</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
              <p className="leading-relaxed">0303 2485138</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 md:w-1/2 mobile:w-full bg-white flex flex-col p-4 md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
          <p className="leading-relaxed mb-5 text-gray-600">You Feed Back is curious to know for us</p>
          <form onSubmit={formik.handleSubmit}>
            {/* Name Input */}
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500 text-xs">{formik.errors.name}</div>
              ) : null}
            </div>

            {/* Email Input */}
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-xs">{formik.errors.email}</div>
              ) : null}
            </div>

            {/* Message Input */}
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
              <textarea
                id="message"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
              {formik.touched.message && formik.errors.message ? (
                <div className="text-red-500 text-xs">{formik.errors.message}</div>
              ) : null}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
            >
              Submit
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
        </div>
      </div>
    </section>
  </>
  );
};

export default ContactUs;
