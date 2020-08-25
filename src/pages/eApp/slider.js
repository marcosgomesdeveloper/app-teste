import React, {useState} from 'react';
import './slider.css';
import imgSlider from '../eApp/imgSlider.js';
import i1 from "../eApp/imgSliders/i1.jpg";

    function slider (){
        let sliderArr = [<imgSlider src={i1}/>, 2, 3, 4, 5];
        const [x, setX] = useState(0);
        const goLeft = () => {
            console.log(x);
            x === 0 ? setX(-100*(sliderArr.length - 1)) : setX(x + 100);
        };
        const goRight = () => {
            console.log(x);
            x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
        };
        return(
            <div className="slider">
                {
                    sliderArr.map((item, index) => {
                        return(
                            <div style={{transform: `translateX(${x}%)`}} key={index} className="slide">
                                {item}
                            </div>
                        );
                    })
                }
                <button className="btn-styles" id="irEsquerda" onClick={goLeft}></button>
                <button className="btn-styles" id="irDireita"  onClick={goRight}></button>
            </div>
        );
    }
export default slider;