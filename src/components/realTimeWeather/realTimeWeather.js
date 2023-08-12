import React from 'react'
import { Weather, Flex, TopBottomParagraph } from './realTimeWeather.styled'


const RealTimeWeather = () => {
    return (
        <Weather>
            <Flex alignitemprop="center">
                <div>
                    <TopBottomParagraph fontweightprop="600" fontsizeprop="16px" lineheightprop="1" linespacingprop="1px" marginprop="0">
                        Yaounde
                    </TopBottomParagraph>

                    <TopBottomParagraph fontweightprop="400" fontsizeprop="14px" lineheightprop="1" marginprop="0">
                        Chaud
                    </TopBottomParagraph>
                </div>
                <img
                    alt="weather"
                    className="weather-icon"
                    src={`icons/01d.png`}
                />

            </Flex>

            <Flex alignitemprop="center">

                <TopBottomParagraph fontweightprop="600" fontsizeprop="70px" lineheightprop="1" linespacingprop="-5px" marginprop="10px 0" widthprop="auto">
                    29°C
                </TopBottomParagraph>

                <div className='details'>
                    <Flex>
                        <span className="parameter-label">Température</span>
                        <span className="parameter-value">
                            28°C
                        </span>
                    </Flex>

                    <Flex>
                        <span className="parameter-label">Vent</span>
                        <span className="parameter-value">m/s</span>
                    </Flex>

                    <Flex>
                        <span className="parameter-label">Humidité</span>
                        <span className="parameter-value">%</span>
                    </Flex>

                    <Flex>
                        <span className="parameter-label">Pression</span>
                        <span className="parameter-value">hPa</span>
                    </Flex>
                </div>
            </Flex>
        </Weather>

    )
}

export default RealTimeWeather