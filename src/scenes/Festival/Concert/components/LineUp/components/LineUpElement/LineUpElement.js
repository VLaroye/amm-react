import React, { Component } from 'react';

// STYLES
import styles from './LineUpElement.css';

import ImageLoader from '../../../../../../../components/ImageLoader/ImageLoader';


class LineUpElement extends Component {

    state = {
        loading: true
    }

    componentDidMount() {
        this.setState({loading: false});
    }

    render() {

        if (this.state.loading) {
            return <div>loading</div>
        }

        return (
            <div className={styles.LineUpElement} >
                <ImageLoader src={this.props.artist.imgSrc} imgCssClass={styles.LineUpElementImg} />
                <div className={styles.LineUpElementOverlay} ></div>
                <div className={styles.LineUpElementInfos} >
                    <p className={styles.ArtistName} > {this.props.artist.name} </p>
                    <p className={styles.ArtistStyle} >{this.props.artist.style}</p>
                </div>
            </div>
        )
    }
}

export default LineUpElement;