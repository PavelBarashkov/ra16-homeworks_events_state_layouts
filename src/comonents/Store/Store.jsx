/* eslint-disable react/prop-types */
import { useState } from "react";
import { IconSwitch } from "../IconSwitch/IconSwitch"
import { CardsView } from "../CardsView/CardsView";
import classes from './Store.module.css';

export const Store = ({data}) => {
    const [icon, setIcon] = useState('view_list');
    const onSwitch =  (e) => e.target.textContent === 'view_list' ? setIcon('view_module') : setIcon('view_list');

    return (
        <>
        <IconSwitch
            icon={icon}
            onSwitch={onSwitch}
        />
        <div className={classes.container}>
            <CardsView data={data} module={icon}/>
        </div>
          
            

        </>
    )
 
}

