import React from "react";
import { Moment } from 'react-moment';

import './global.scss';
const GlobalDataComponent = (props) => {
    return (
        <div>
            <h2>Données journalières mondiales </h2>
            <div className="row">
                <div className="item col justify-content-between align-items-center flex-column odd">
                    <h3>Nouveaux cas confirmés</h3>
                    <p>{props.datas.NewConfirmed}</p>
                </div>
                <div className="item col justify-content-between align-items-center flex-column even">
                    <h3>Nombre total de cas confirmés</h3>
                    <p>{props.datas.TotalConfirmed}</p>
                </div>
                <div className="item col justify-content-between align-items-center flex-column odd">
                    <h3>Nouveaux cas de décès</h3>
                    <p className="align-self-end">{props.datas.NewDeaths}</p>
                </div>
                <div className="item col justify-content-between align-items-center flex-column even">
                <h3>Nombre total de décès</h3>
                    <p>{props.datas.TotalDeaths}</p>
                </div>
                <div className="item col justify-content-between align-items-center flex-column odd">
                    <h3>Nouvelles guérisons</h3>
                    <p>{props.datas.NewRecovered}</p>
                </div>
                <div className="item col justify-content-between align-items-center flex-column even">
                    <h3>Nombre total de guérisons</h3>
                    <p>{props.datas.TotalRecovered}</p>
                </div>
            </div>
        </div>
    )


}
export default GlobalDataComponent;