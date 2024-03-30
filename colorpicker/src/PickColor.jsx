import React, {useState} from 'react';

function PickColor(){

    const [color, setColor] = useState("#414141");

    const handleColorChange = (e)=> {
        setColor(e.target.value);
    }

    return (
        <div id="pickColor" style={{backgroundColor: color}}>
            <h1 id="header">Pick Color</h1>
            <form id="form">
                <label htmlFor="colorpicker">Selected Color: {color}</label>
                <input
                    type="color"
                    value={color}
                    id="colorpicker"
                    onChange={handleColorChange}
                 ></input>
            </form>
        </div>
    );
}
export default PickColor;