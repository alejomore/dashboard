import { useEffect, useState } from 'react';
import type { Root } from '../types/DashboardTypes';

export default function useFetchData(): Root | undefined {

    const URL =
        'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m&timezone=America%2FChicago';

    const [data, setData] = useState<Root>();

    useEffect(() => {

        fetch(URL)
            .then((response) => response.json())
            .then((data: Root) => setData(data))
            .catch((error) => console.error(error));

    }, []);

    return data;
}