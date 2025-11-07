
import React from 'react';

const Contact: React.FC = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send data to an API.
    // For this example, we'll just log it and show an alert.
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log('Form submitted:', data);
    alert('Thank you for your message!');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Contact <span className="text-accent">Me!</span></h2>
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
              type="text" 
              name="fullName"
              placeholder="Full Name" 
              required 
              className="w-full bg-secondary border border-transparent focus:border-accent rounded-lg p-3 text-text-primary outline-none transition-all"
            />
            <input 
              type="email"
              name="email"
              placeholder="Email Address" 
              required 
              className="w-full bg-secondary border border-transparent focus:border-accent rounded-lg p-3 text-text-primary outline-none transition-all"
            />
            <input 
              type="tel" 
              name="phone"
              placeholder="Mobile Number" 
              className="w-full bg-secondary border border-transparent focus:border-accent rounded-lg p-3 text-text-primary outline-none transition-all"
            />
            <input 
              type="text" 
              name="subject"
              placeholder="Email Subject" 
              required 
              className="w-full bg-secondary border border-transparent focus:border-accent rounded-lg p-3 text-text-primary outline-none transition-all"
            />
            <textarea 
              name="message"
              placeholder="Your Message" 
              required 
              rows={6}
              className="md:col-span-2 w-full bg-secondary border border-transparent focus:border-accent rounded-lg p-3 text-text-primary outline-none transition-all"
            ></textarea>
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="inline-block bg-accent text-primary font-semibold px-8 py-3 rounded-lg hover:bg-opacity-80 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
