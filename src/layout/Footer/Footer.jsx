import faceLogo from '../../assets/icons/facebookLogo.svg';
import twitterLogo from '../../assets/icons/twitterLogo.svg';
import instagramLogo from '../../assets/icons/instagramLogo.svg';

const Footer = () => {
    return (
        <section className='py-[50px] bg-black font-fontSecond'>
            <div className='wrapper '>
                <div className=' grid grid-cols-1 sm:grid-cols-3 gap-[40px]'>
                    <div className=''>
                        <a href='' className='font-fontPrimary'>
                            Sound<span className='text-pinkColor'>DZign</span>
                        </a>
                        <div className='flex gap-[16px] mt-[36px]'>
                            <a href=''>
                                <img src={faceLogo} alt='faceLogo' />
                            </a>
                            <a href=''>
                                <img src={twitterLogo} alt='twitterLogo' />
                            </a>
                            <a href=''>
                                <img src={instagramLogo} alt='instagramLogo' />
                            </a>
                        </div>
                    </div>
                    <div className=''>
                        <h3 className='text-pinkLight mb-[36px]'>
                            Quick Links
                        </h3>
                        <ul>
                            <li>
                                <a href=''>Quick Links</a>
                            </li>
                            <li>
                                <a href=''>Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div className=''>
                        <h3 className='text-pinkLight mb-[36px]'>Contact Us</h3>
                        <ul>
                            <li>
                                <a href=''>contact@email.com</a>
                            </li>
                            <li>
                                <a href=''>+1 999 9999 999</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className='mt-[28px]'>
                    This website is designed by GTCoding Ⓒ 2023
                </p>
            </div>
        </section>
    );
};

export default Footer;
