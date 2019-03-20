import React from 'react';
import {apiURL} from '../../constants'

const styles = {
    width: '100px',
    height: '100px',
    marginRight: '10px'
}

const PictureThumbnail = (props) => {
    let image = null;

    if (props.image) {
       image = apiURL + '/uploads/' + props.image;
    }

    return (
        image && <img alt='message' src={image} style={styles} className='img-thumbnail' />
    );
};

export default PictureThumbnail;
