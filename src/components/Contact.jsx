import { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [theme, setTheme] = useState('light');

  // Detect the theme (light or dark) on component mount
  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    setTheme(currentTheme);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert('Please fill in all the fields.');
      return;
    }

    // Proceed to submit the form via GETFORM or any other action
    e.target.submit();
  };

  return (
    <div className="max-w-[1200px] mx-auto sm:py-20 p-5" id="contact">
      <div className="text-center">
        <h2 className="text-4xl font-bold leading-tight text-gray-400">
          Contact Me
          </h2>
      </div>


      <div className="max-w-[800px] mx-auto">
        <div className={`mt-6 rounded-xl border ${theme === 'light' ? 'bg-white border-gray-300' : 'bg-[#333333] border-gray-700'}`}>
          <div className="p-10">
            <form onSubmit={handleSubmit} action="https://getform.io/f/bzylepna" method="POST">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                <div>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className={`w-full px-4 py-4 ${
                        theme === 'light'
                          ? 'bg-gray-100 text-gray-800 border-gray-300'
                          : 'bg-[#535252] text-gray-400 border-gray-700'
                      } rounded-md focus:outline-none focus:border-blue-500`}
                    />
                  </div>
                </div>

                <div>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className={`w-full px-4 py-4 ${
                        theme === 'light'
                          ? 'bg-gray-100 text-gray-800 border-gray-300'
                          : 'bg-[#535252] text-gray-400 border-gray-700'
                      } rounded-md focus:outline-none focus:border-blue-500`}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      className={`w-full px-4 py-4 ${
                        theme === 'light'
                          ? 'bg-gray-100 text-gray-800 border-gray-300'
                          : 'bg-[#535252] text-gray-400 border-gray-700'
                      } rounded-md focus:outline-none focus:border-blue-500`}
                      rows="4"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="px-6 py-3 w-full rounded-xl border border-gray-400 hover:bg-gradient-to-br from-blue-500 to-pink-500 text-white"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;