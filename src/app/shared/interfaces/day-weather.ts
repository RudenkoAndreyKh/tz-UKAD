export interface DayWeather {
    code: number
    date: number
    day: string
    high: number
    low: number
    text: 'Sunny' | 'Mostly Sunny' | 'Partly Cloudy' | 'Scattered Showers'
}