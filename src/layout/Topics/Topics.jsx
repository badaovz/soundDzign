import topicImg from '../../assets/images/soundImg2.png';
import Rect from '../../components/Rect';

const Topics = () => {
    return (
        <section className='bg-black' id='courseDetail'>
            <div className='wrapper py-[80px]'>
                <h2 className='text-[40px] mb-[39px]'>What will you learn?</h2>
                <div className='relative'>
                    <div className='flex'>
                        <ul className='topics flex-1 text-[20px] font-fontSecond'>
                            <li>What are frequencies?</li>
                            <li>Using DAW</li>
                            <li>Vocals Processing</li>
                            <li>Mixing</li>
                            <li>Mixing Console</li>
                            <li>Mastering</li>
                        </ul>
                        <img
                            className='hidden sm:block object-cover w-[385px] lg:w-[558px] h-[287px]'
                            srcSet={topicImg}
                            alt='topic img'
                        />
                    </div>
                    <Rect className='border-yellowColor absolute border-r-8 border-b-8 bottom-[-8px] sm:bottom-[-18px] xl:bottom-[-33px] right-[-8px] sm:right-[-18px] xl:right-[-33px]' />
                </div>
            </div>
        </section>
    );
};

export default Topics;
