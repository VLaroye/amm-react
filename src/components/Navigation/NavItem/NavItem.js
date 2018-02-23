import React from 'react';

const navItem = (props) => {
    return (
        <li>
            <a href={ props.path } >{ props.children }</a>
        </li>
    );
}

export default navItem;