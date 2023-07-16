import Rect from '../../components/Rect';
import studentImg from '../../assets/images/studentImg.svg';
import videoImg from '../../assets/images/videoImg.svg';

const Info = () => {
    return (
        <section id='about'>
            <div className='wrapper py-[80px]'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center relative'>
                    <Rect className='border-pinkColor absolute border-t-8 border-l-8 top-[-8px] sm:top-[-18px] xl:top-[-33px] left-[-8px] sm:left-[-18px] xl:left-[-33px]' />
                    <div className='text-center'>
                        <img
                            src={studentImg}
                            alt='info img'
                            className='mx-auto'
                        />
                        <h3 className='text-[32px] md:text-[40px]'>23,000+</h3>
                        <p className='text-[24px] md:text-[30px] font-fontSecond'>
                            Students
                        </p>
                    </div>
                    <div className='text-center'>
                        <img
                            src={videoImg}
                            alt='info img'
                            className='mx-auto'
                        />
                        <h3 className='text-[32px] md:text-[40px]'>26 Hrs</h3>
                        <p className='text-[24px] md:text-[30px] font-fontSecond'>
                            Video Content
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Info;
