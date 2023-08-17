import { rest } from 'msw'
import { openWeatherApiURL } from '../App'

export const handlers = [
    rest.get(`${openWeatherApiURL}/weather?lat=3.8667&lon=11.5167&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}&units=metric&lang=fr`), (req, res, ctx) => {
        return res(ctx.status(200)),
            ctx.json([
                {
                    id: 2220957
                }
            ])
    }
]