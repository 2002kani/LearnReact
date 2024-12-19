import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {

    const [selected, setSelected] = useState(null);
    const [multiSelection, setMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultipleSelection(getCurrentId) {
        let copyMultiple = [...multiple];
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

        if(findIndexOfCurrentId === -1){
            copyMultiple.push(getCurrentId);
        } else{
            copyMultiple.splice(findIndexOfCurrentId, 1)
        }
        setMultiple(copyMultiple);
    }

    return (
        <div className="wrapper">
            <button onClick={() => setMultiSelection(!multiSelection)}> Multi Selection </button>
            <div className="accordian">
                {
                    data && data.length > 0 ? (
                        data.map(dataItem => (
                            <div className="item" key={dataItem.id}>
                                <div className="title" onClick={multiSelection ? () => handleMultipleSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)}>
                                    <h3> {dataItem.question} </h3>
                                    <span>+</span>
                                </div>
                                {
                                    selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? (
                                        <div className="answer">
                                            <p> {dataItem.answer}</p>
                                        </div>) : null
                                }
                            </div>
                        ))) : (
                        <div className="fail"> Keine Daten gefunden! </div>
                    )}
            </div>
        </div>
    )
}