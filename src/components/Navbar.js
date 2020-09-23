import React from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {
    
        return (
            <nav className="Navbar bg-primary">
                <h2 >
                <i className={props.icon}/>  {props.title}
              </h2>
            </nav>
        )
   
}
Navbar.defaultProps = {

    title:"Github Users",
    icon: "fab fa-github"
};
Navbar.propTypes = {

    
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar
