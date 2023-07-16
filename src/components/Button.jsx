import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, href, className, ...props }) => {
    let Com = 'button';
    if (href) {
        props.href = href;
        Com = 'a';
    }

    return (
        <Com
            className={`flex items-center justify-center gap-x-4 px-[32px] py-[10px] rounded-[10px] ${className}`}
        >
            {children}
        </Com>
    );
};

Button.propTypes = {
    children: PropTypes.element,
    href: PropTypes.string,
    className: PropTypes.string,
};

export default Button;
