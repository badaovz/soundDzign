import PropTypes from 'prop-types';
const Testimonial = ({ img, title, desc }) => {
    return (
        <div className=' text-center sm:text-start font-fontSecond'>
            <img src={img} alt='img' className='mx-auto sm:mx-0' />
            <p className='text-[20px] mt-4'>{title}</p>
            <p className='text-[16px] mt-[7px]'>{desc}</p>
        </div>
    );
};

Testimonial.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
};

export default Testimonial;
