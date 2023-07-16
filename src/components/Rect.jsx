import PropTypes from 'prop-types';

const Rect = ({ children, className }) => {
    console.log('className', className);
    return <div className={`w-[88px] h-[60px] ${className}`}>{children}</div>;
};

Rect.propTypes = {
    children: PropTypes.element,
    className: PropTypes.string,
};

export default Rect;
