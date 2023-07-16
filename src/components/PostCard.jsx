import PropTypes from 'prop-types';

const PostCard = ({ type, img, title }) => {
    return (
        <div className='rounded-[10px] relative text-black bg-white font-fontSecond sm:[&:nth-child(3)]:col-span-full lg:[&:nth-child(3)]:col-span-1'>
            <img
                src={img}
                alt='postImg'
                className='rounded-[10px] h-[159px] object-cover w-full'
            />
            <p className='py-4 px-6 text-[18px] '>{title}</p>
            <button className='text-[13px] px-4 rounded-full absolute top-2 right-2 bg-white flex items-center justify-center'>
                {type}
            </button>
        </div>
    );
};

PostCard.propTypes = {
    type: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default PostCard;
