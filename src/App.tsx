import React, {useState} from 'react';
import './App.module.css';
import Accordion from "./components/Accordion/Accordion";
import Rating, {RatingValueType} from "./components/Rating/Rating";
import AppTitle from "./components/AppTitle/AppTitle"
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import s from './App.module.css'
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {Select} from "./components/Select/Select";
import OutsideAlerter from "./common/HookComponents/CloseOnClick";

function App() {
    console.log('App rendering')

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    const [value, setValue] = useState('2')

    return (
        <div className={s.item}>
            <AppTitle title={"This is App component"}/>
            <hr/>

            <UncontrolledAccordion titleValue={'UncontrolledAccordion'}/>
            <hr/>


            <hr/>
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            <hr/>
            <hr/>
            <Rating value={ratingValue} onClick={setRatingValue}/>


            <Select value={value} onChange={setValue}
                    items={
                        [{title: "Artem", value: '1'},
                            {title: "Vlad", value: '2'},
                            {title: "Kate", value: '3'},]}/>

        </div>
    )
}

export default App