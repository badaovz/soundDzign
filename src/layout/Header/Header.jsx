import Navbar from '../Navbar/Navbar';
import Underline from '../../components/Underline';
import Button from '../../components/Button';

const Header = () => {
    return (
        <header className='bg-headerBg bg-cover bg-center'>
            <div className='wrapper min-h-[100vh] h-full relative '>
                <Navbar />
                <div className='w-full sm:w-fit absolute bottom-0 right-0 px-[40px] pt-[50px] pb-[60px] bg-rgba-5 border-4 border-white border-solid border-b-0 rounded-t-[20px]'>
                    <p className='text-[16px] font-extrabold mb-[5px]'>
                        Sound Design Masterclass
                    </p>
                    <Underline className='w-[60px]' />
                    <h1 className='text-[32px] sm:text-[40px] font-bold mt-[36px] font-fontSecond'>
                        Learn the Art of <br /> Sound Design
                    </h1>
                    <Button className='bg-pinkColor mt-4'>Demo Lesson</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
