import React from 'react'
import { Weather, Flex, TopBottomParagraph } from './realTimeWeather.styled'


const RealTimeWeather = ({ data }) => {
    console.log(data);
    return (
        <Weather>
            <Flex $alignitemprop="center">
                <div>
                    <TopBottomParagraph $fontweightprop="600" $fontsizeprop="1em" $lineheightprop="1" $linespacingprop="1px" $marginprop="0">
                        {data.city}
                    </TopBottomParagraph>

                    <TopBottomParagraph $fontweightprop="400" $fontsizeprop="0.875em" $lineheightprop="1" $marginprop="0">
                        {data.weather[0].description}
                    </TopBottomParagraph>
                </div>
                <img
                    alt="weather"
                    className="weather-icon"
                    src={`icons/${data.weather[0].icon}.png`}
                />

            </Flex>

            <Flex $alignitemprop="center">

                <TopBottomParagraph $fontweightprop="600" $fontsizeprop="4.375em" $lineheightprop="1" $linespacingprop="-5px" $marginprop="10px 0" $widthprop="auto">
                    {Math.round(data.main.temp)}°C
                </TopBottomParagraph>

                <div className='details'>
                    <Flex>
                        <span className="parameter-label">Température</span>
                        <span className="parameter-value">
                            {Math.round(data.main.feels_like)}°C
                        </span>
                    </Flex>

                    <Flex>
                        <span className="parameter-label">Vent</span>
                        <span className="parameter-value">{data.wind.speed} m/s</span>
                    </Flex>

                    <Flex>
                        <span className="parameter-label">Humidité</span>
                        <span className="parameter-value">{data.main.humidity}%</span>
                    </Flex>

                    <Flex>
                        <span className="parameter-label">Pression</span>
                        <span className="parameter-value">{data.main.pressure} hPa</span>
                    </Flex>
                </div>
            </Flex>
        </Weather>

    )
}

export default RealTimeWeather