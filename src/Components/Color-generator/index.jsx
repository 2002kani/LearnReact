import { useState } from "react"


export default function RandomColor(){

    const [colorType, setColorType] = useState("hex");
    const [color, setColor] = useState("#000000")

    function handleCreateRandomHexColor(){
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";

        for(let i = 0; i < 6; i++){
            const randomIndex = Math.floor(Math.random() * hex.length);
            hexColor += hex[randomIndex];
        }

        setColor(hexColor);
        console.log(color);
    }

    function handleCreateRandomRgbColor(){
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        setColor(`rgb(${r}, ${g}, ${b})`);
        console.log(color);
    }

    return(
        <div className="container" style={{width: "100vw", height: "100vh", background: color,}}>
            <button onClick={() => setColorType("hex")}> Create HEX Color </button>
            <button onClick={() => setColorType("rgb")}> Create RGB Color </button>
            <button onClick={colorType === "hex" ? handleCreateRandomHexColor : handleCreateRandomRgbColor}> Create Random Color </button> 
        </div>
    )
}