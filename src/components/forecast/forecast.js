import React from 'react'

// La démo présentée par la doc officielle sur la façon d'utiliser peut être 
// trouvé ici: https://react-accessible-accordion.springload.co.nz/
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import { Title, DailyItem, DetailGrid } from './forecast.style';

const Forecast = ({ data }) => {
    const week = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    const day = new Date().getDay();
    const forecastDays = week.slice(day, week.length).concat(week.slice(0, day));

    return (
        <>
            <Title>Journalier</Title>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <DailyItem>
                                    <img src={`icons/${item.weather[0].icon}.png`} className="icon-small" alt="weather" />
                                    <label className="day">{forecastDays[index]}</label>
                                    <label className="description">{item.weather[0].description}</label>

                                    {/* item.main.temp_max et item.main.temp_min sont identique mais c'est ce qui vient de l'API de openWeatherMap */}
                                    <label className="min-max-temperature">{Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C</label>
                                </DailyItem>
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            <DetailGrid>
                                <div className="details-grid-item">
                                    <label>Pression:</label>
                                    <label>{item.main.pressure}</label>
                                </div>
                                <div className="details-grid-item">
                                    <label>Humidité:</label>
                                    <label>{item.main.humidity} %</label>
                                </div>
                                <div className="details-grid-item">
                                    <label>Couverture nuageuse:</label>
                                    <label>{item.clouds.all} %</label>
                                </div>
                                <div className="details-grid-item">
                                    <label>Vitesse du vent:</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className="details-grid-item">
                                    <label>Niveau de la mer:</label>
                                    <label>{item.main.sea_level}m</label>
                                </div>
                                <div className="details-grid-item">
                                    <label>Température:</label>
                                    <label>{item.main.feels_like}°C</label>
                                </div>
                            </DetailGrid>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )
}

export default Forecast