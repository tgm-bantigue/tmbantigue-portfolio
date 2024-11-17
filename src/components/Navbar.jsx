import { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-scroll'; // Import Link from react-scroll

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [theme, setTheme] = useState('light');

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') || 'light';
        setTheme(storedTheme);
        document.body.className = storedTheme;
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.body.className = newTheme;
    };

    return (
        <div className='text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center'>
            <a href="/">
                <h1 className='text-3xl font-bold primary-color ml-4'>TGM-BANTIGUE</h1>
            </a>  
            <ul className='hidden md:flex'>
    <li className='p-5 hover:bg-blue-500 rounded-lg transition-colors duration-300'>
        <Link to='about' smooth={true} duration={500} className='hover:text-gray-300 hover:underline'>
            About
        </Link>
    </li>
    <li className='p-5 hover:bg-blue-500 rounded-lg transition-colors duration-300'>
        <Link to='work' smooth={true} duration={500} className='hover:text-gray-300 hover:underline'>
            Work
        </Link>
    </li>
    <li className='p-5 hover:bg-blue-500 rounded-lg transition-colors duration-300'>
        <Link to='certifications' smooth={true} duration={500} className='hover:text-gray-300 hover:underline'>
            Certifications and Trainings
        </Link>
    </li>
    <li className='p-5 hover:bg-blue-500 rounded-lg transition-colors duration-300'>
        <Link to='contact' smooth={true} duration={500} className='hover:text-gray-300 hover:underline'>
            Contact
        </Link>
    </li>
    
</ul>

<button
  onClick={toggleTheme}
  className={`hidden md:block text-sm rounded-xl border px-3 py-2 ml-4 ${
    theme === 'light'
      ? 'border-gray-400 bg-white text-black'
      : 'border-gray-700 bg-gray-800 text-white'
  } hover:bg-gradient-to-br from-blue-500 to-pink-500`}
>
  Switch to {theme === 'light' ? 'dark' : 'light'} mode
</button>

            <div onClick={handleNav} className='block md:hidden mr-6'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='text-3xl primary-color m-4'>TGM-BANTIGUE</h1>
                <ul className='p-8 text-2xl'>
                    <li className='p-2'>
                        <Link to='about' smooth={true} duration={500} onClick={handleNav}>
                            About
                        </Link>
                    </li>
                    <li className='p-2'>
                        <Link to='work' smooth={true} duration={500} onClick={handleNav}>
                            Work
                        </Link>
                    </li>
                    <li className='p-2'>
                        <Link to='certifications' smooth={true} duration={500} onClick={handleNav}>
                            Certifications and Trainings
                        </Link>
                    </li>
                    <li className='p-2'>
                        <Link to='contact' smooth={true} duration={500} onClick={handleNav}>
                            Contact
                        </Link>
                    </li>
                </ul>

                <button 
                    onClick={toggleTheme} 
                    className={`text-sm px-3 py-2 rounded mt-4 flex items-center transition-colors duration-300 ${
                        theme === 'light' ? 'bg-gray-300 text-black' : 'bg-gray-800 text-white'
                    }`}
                >
                    {theme === 'light' ? <FaMoon className="mr-2" /> : <FaSun className="mr-2" />}
                    {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </button>
            </div>
        </div>
    );
};

export default Navbar;