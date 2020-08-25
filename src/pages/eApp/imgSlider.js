import React from 'react';

    function imgSlider({src}){
        let imgStyles = {
            width: 100 + "%",
            height: "auto"
        };
        return <img src={src} alt="slider.js" style={imgStyles}></img>
    }

export default imgSlider;