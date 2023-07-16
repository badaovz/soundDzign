import PropTypes from 'prop-types';

const Underline = ({ className }) => {
    return (
        <div className={`h-[4px] bg-pinkColor rounded-lg ${className}`}></div>
    );
};

Underline.propTypes = {
    className: PropTypes.string,
};

export default Underline;
