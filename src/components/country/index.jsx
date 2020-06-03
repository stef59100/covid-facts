import React from "react";
import { CartesianGrid, BarChart, Bar, Tooltip, XAxis, YAxis, Legend, ResponsiveContainer } from "recharts";
import Moment from 'react-moment';
import moment from 'moment';
import 'moment/locale/fr';

const CountryComponent = (props) => {
    const countryItemWholePeriod = props.countrydata;
    const countryLast = countryItemWholePeriod.slice(-1);

    let fetchData = [];

    countryItemWholePeriod.map(item => (
        fetchData.push({
            name: moment(item.Date).format('l'),
            confirmés: item.Confirmed,
            décès: item.Deaths,
            guérisons: item.Recovered
        })
    ))

    return (
        <div>
            {countryLast.map((item, schwanz) =>
                (<div key={`conteneur-${schwanz}`} className="col col-12" style={{ height: 300 }}>
                    <div className="mb-3">   
                    <h2 >Données statistiques globales pour {item.Country} depuis le 22/1/2020</h2>
                        <Moment locale="fr" format="ll">{item.Date}</Moment>
                    </div>
                <hr/>

                    {/* <p>{item.Date}</p> */}

                    <div className="row">
                        <div className="item odd col">
                            <h3>Cas confirmés</h3>
                            <p>{item.Confirmed}</p>
                        </div>
                        <div className="item even col">
                            <h3>Décès</h3>
                            <p>{item.Deaths}</p>
                        </div>
                        <div className="item odd col">
                            <h3>Guérisons</h3>
                            <p>{item.Recovered}</p>
                        </div>


                    </div>
                    <ResponsiveContainer>
                        <BarChart
                            width={1200}
                            height={600}
                            data={fetchData}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="confirmés" fill="#8884d8" />
                            <Bar dataKey="décès" fill="#000" />
                            <Bar dataKey="guérisons" fill="green" />

                        </BarChart>
                    </ResponsiveContainer>
                </div>
                )
            )}
            {/* <PieChart width={600} height={600} >
                <Pie
                    data={superdata}
                    dataKey="value"
                    cx={300}
                    cy={300}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    fill="#8884d8"
                    outerRadius={60}>
                    {superdata.map((item, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
            </PieChart> */}
        </div>
    )
}
export default CountryComponent;