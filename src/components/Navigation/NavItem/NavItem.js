import React from 'react';

import { Link } from 'react-router-dom';

const navItem = (props) => {
    return (
        <li className={props.style} >
            <Link to={props.path} onClick={props.toggleSideBar}>
                { props.children }
            </Link>
        </li>
    );
}

export default navItem;