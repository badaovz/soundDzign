import Underline from '../../components/Underline';
import { testimonials } from '../../assets/data';
import Testimonial from '../../components/Testimonial';

const Testimonials = () => {
    return (
        <section className='py-[80px]' id='testimonials'>
            <div className='wrapper'>
                <h2 className='text-[40px]'>What our students say?</h2>
                <Underline className='w-[80px]' />
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-[116px] mt-[50px]'>
                    {testimonials.map((test) => (
                        <Testimonial key={test.id} {...test} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
