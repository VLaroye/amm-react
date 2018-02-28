import React, { Fragment } from 'react';

// COMPONENTS
import Header from '../components/Header/Header';
import VideoPlayer from '../../../components/UI/VideoPlayer/VideoPlayer';

// STYLES
import styles from './Mapping.css';

// IMAGES
import mappingHeader from '../../../assets/Festival/mapping-header.jpg';

const mapping = () => {
    return (
        <Fragment>
            <Header />
            <h3 className={styles.SectionTitle} >Mapping</h3>
            <img className={styles.MappingHeader} src={mappingHeader} alt=""/>

            <h3 className={styles.SectionTitle} >Teaser Video Mapping Festival</h3>
            <div className={styles.VideoPlayer} >
                <VideoPlayer 
                    src='https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FVideoMappingFestival%2Fvideos%2F185176878754739%2F' 
                    title='Teaser Video Mapping Festival' 
                />
            </div>
        </Fragment>
    );
}

export default mapping;
