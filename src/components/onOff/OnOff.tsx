import React, {useState} from "react";
import s from "./onOff.module.css"

type OnOffType = {
    On: boolean
    onChange:(On: boolean)=>void
}


const OnOff = (props: OnOffType) => {

    console.log('On:'+props.On)

    const onOffStyle = {
        width: "170px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gold",
    }
    const onStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "50px",
        height: "40px",
        border: "1px solid black",
        borderRadius: "10px",
        backgroundColor: props.On ? "green" : "white",

    }
    const offStyle = {
        width: "50px",
        height: "40px",
        border: "1px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "5px",
        backgroundColor: props.On ? "white" : "red",
        borderRadius: "10px"

    }
    const indicatorStyle = {
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        backgroundColor: props.On ? "green" : "red",

    }

    return (
        <div style={onOffStyle}>
            <div style={onStyle} onClick={() => {
                props.onChange(true)
            }}>On
            </div>
            <div style={offStyle} onClick={() => {
                props.onChange(false)
            }}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default OnOff

