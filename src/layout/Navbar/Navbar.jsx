import { useState } from 'react';
import { navs } from '../../assets/data';
import MenuIcon from '../../assets/icons/MenuIcon';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleShowMenu = () => {
        setIsMenuOpen(true);
    };
    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };
    console.log('IsMenuOpen: ', isMenuOpen);
    return (
        <div className='wrapper fixed top-6 z-10 backdrop-blur-xl flex justify-between h-[80px] items-center px-[32px] py-[30px] bg-rgba-5 rounded-b-[10px]'>
            <p className='cursor-pointer'>
                Sound<span className='text-pinkColor'>DZign</span>
            </p>
            <ul className='hidden sm:flex gap-x-[50px]'>
                {navs.map((nav) => (
                    <li className='nav__item' key={nav.id}>
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>
            <button className='sm:hidden' onClick={handleShowMenu}>
                <MenuIcon />
            </button>
            <div
                className={` bg-blackLight px-[33px] py-[58px] fixed top-0 left-0 w-full translate-y-[-100%] sm:hidden transition-all ease-linear delay-300 ${
                    isMenuOpen ? 'translate-y-[0] ' : ''
                }`}
            >
                <ul className='flex flex-col gap-[30px]'>
                    {navs.map((nav) => (
                        <li
                            className='nav__item'
                            key={nav.id}
                            onClick={handleCloseMenu}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
                <button
                    className='absolute top-[32px] right-[58px] '
                    onClick={handleCloseMenu}
                >
                    <img srcSet='/timesIcon.svg 2x' alt='close' />
                </button>
            </div>
        </div>
    );
};

export default Navbar;
