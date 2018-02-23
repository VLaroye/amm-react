import React from 'react';

import Nav from '../../components/Navigation/Nav';

const layout = (props) => {
    return (
        <div>
            <Nav navItems={props.navItems} />
            
            { props.children }

            <footer>
                <h3>Footer</h3>
            </footer>
        </div>
    );
}

export default layout;