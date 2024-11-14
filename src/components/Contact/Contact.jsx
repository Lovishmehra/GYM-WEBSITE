// import React from 'react';
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
// import './ContactUs.css';
// import { addHoverEffect, removeHoverEffect, handleClick } from './contactHandlers';

// const ContactUs = () => {
//   return (
//     <div className="contact-us-page" id="contact">
//       <header className="navbar">
//         <div className="logo">
//           <h1>TCJ Fitness</h1>
//         </div>
//       </header>

//       <section className="contact-section">
//         <h2 className="section-title">Contact Us</h2>
//         <div className="contact-content">
//           <div className="contact-form">
//             <h3>Message</h3>
//             <textarea placeholder="Your Message" className="message-input"></textarea>
//             <button className="submit-btn">Submit</button>
//           </div>

//           <div className="contact-options">
//             {/* Phone Option */}
//             <div 
//               className="contact-option" 
//               onMouseEnter={addHoverEffect} 
//               onMouseLeave={removeHoverEffect} 
//               onClick={(event) => handleClick(event, 'tel:+917986721870')}
//             >
//               <FaPhoneAlt className="contact-icon" />
//               <h4>Text Us</h4>
//               <p>+91 7986721870</p>
//             </div>

//             {/* Email Option */}
//             <div 
//               className="contact-option" 
//               onMouseEnter={addHoverEffect} 
//               onMouseLeave={removeHoverEffect} 
//               onClick={(event) => handleClick(event, 'mailto:director@tcjfitness.com')}
//             >
//               <FaEnvelope className="contact-icon" />
//               <h4>Email Us</h4>
//               <a href="mailto:director@tcjfitness.com" className="email-link">director@tcjfitness.com</a>
//             </div>

//             {/* Location Option */}
//             <div 
//               className="contact-option" 
//               onMouseEnter={addHoverEffect} 
//               onMouseLeave={removeHoverEffect} 
//               onClick={(event) => handleClick(event, 'https://www.google.com/maps/place/5406-A+Inker,+Houston,+TX,+77007')}
//             >
//               <FaMapMarkerAlt className="contact-icon" />
//               <h4>Visit Us</h4>
//               <p>5406-A Inker, Houston, TX, 77007</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <footer className="footer">
//         {/* Social icons can be added here */}
//       </footer>
//     </div>
//   );
// };

// export default ContactUs;

// import React from 'react';
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
// import './ContactUs.css';
// import { addHoverEffect, removeHoverEffect, handleClick } from './contactHandlers';

// const ContactUs = () => {
//   return (
//     <div className="contact-us-page" id="contact">
//       <header className="navbar">
//         <div className="logo">
//           <h1>TCJ Fitness</h1>
//         </div>
//       </header>

//       <section className="contact-section">
//         <h2 className="section-title">Contact Us</h2>
//         <div className="contact-content">
//           {/* Message Form */}
//           <div className="contact-form">
//             <h3>Message Us</h3>
//             <textarea placeholder="Your Message" className="message-input"></textarea>
//             <button className="submit-btn">Submit</button>
//           </div>

//           {/* Contact Options */}
//           <div className="contact-options">
//             <div className="contact-card" onMouseEnter={addHoverEffect} onMouseLeave={removeHoverEffect} onClick={(event) => handleClick(event, 'tel:+917986721870')}>
//               <FaPhoneAlt className="contact-icon" />
//               <h4>Text Us</h4>
//               <p>+91 7986721870</p>
//             </div>
//             <div className="contact-card" onMouseEnter={addHoverEffect} onMouseLeave={removeHoverEffect} onClick={(event) => handleClick(event, 'mailto:director@tcjfitness.com')}>
//               <FaEnvelope className="contact-icon" />
//               <h4>Email Us</h4>
//               <a href="mailto:director@tcjfitness.com" className="email-link">director@tcjfitness.com</a>
//             </div>
//             <div className="contact-card" onMouseEnter={addHoverEffect} onMouseLeave={removeHoverEffect} onClick={(event) => handleClick(event, 'https://www.google.com/maps/place/5406-A+Inker,+Houston,+TX,+77007')}>
//               <FaMapMarkerAlt className="contact-icon" />
//               <h4>Visit Us</h4>
//               <p>5406-A Inker, Houston, TX, 77007</p>
//             </div>
//           </div>
//         </div>

//         {/* Business Hours */}
//         <div className="business-hours">
//           <h4>Business Hours</h4>
//           <ul>
//             <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
//             <li>Saturday: 9:00 AM - 4:00 PM</li>
//             <li>Sunday: Closed</li>
//           </ul>
//         </div>

//         {/* Location Map */}
//         <div className="location-map">
//           <h4>Our Location</h4>
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18..."
//             width="100%"
//             height="250"
//             style={{ border: "0", borderRadius: "10px" }}
//             allowFullScreen=""
//             loading="lazy"
//             title="Location Map"
//           ></iframe>
//         </div>

//         {/* FAQ Section */}
//         <div className="faq-section">
//           <h4>Frequently Asked Questions</h4>
//           <ul>
//             <li><strong>Do you offer personal training?</strong> Yes, we have certified trainers available.</li>
//             <li><strong>What are your membership options?</strong> We offer monthly, quarterly, and annual memberships.</li>
//             <li><strong>Is there a trial period?</strong> Yes, we offer a free one-week trial for new members.</li>
//           </ul>
//         </div>

//         {/* Social Media Links */}
//         <div className="social-media-links">
//           <h4>Connect with Us</h4>
//           <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a>
//           <a href="https://www.linkedin.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
//           <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
//         </div>
//       </section>

//       <footer className="footer">
//         <p>© 2024 TCJ Fitness. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default ContactUs;


import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './ContactUs.css';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'YOUR_SERVICE_ID', // replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // replace with your EmailJS template ID
        formData,
        'YOUR_USER_ID' // replace with your EmailJS user ID
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message, please try again.");
        }
      );

    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      mobile: '',
      message: ''
    });
  };

  return (
    <div className="contact-us-page" id="contact">
      <header className="navbar">
        <div className="logo">
          <h1>TCJ Fitness</h1>
        </div>
      </header>

      <section className="contact-section">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-content">
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <h3>Get in Touch</h3>
              
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              
              <input
                type="tel"
                name="mobile"
                placeholder="Your Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
              
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
