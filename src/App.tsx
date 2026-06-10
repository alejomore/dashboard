import './App.css';
import Grid from '@mui/material/Grid';

import HeaderUI from './components/HeaderUI.tsx';
import AlertUI from './components/AlertUI.tsx';
import SelectorUI from './components/SelectorUI.tsx';
import IndicatorUI from './components/IndicatorUI .tsx';

import useFetchData from './hooks/useFetchData';

function App() {
  const dataFetcherOutput = useFetchData();

  if (!dataFetcherOutput) {
    return <h2>Cargando datos meteorológicos...</h2>;
  }

  const temperature =
    dataFetcherOutput.hourly.temperature_2m[0];

  const apparentTemperature =
    dataFetcherOutput.hourly.apparent_temperature[0];

  const humidity =
    dataFetcherOutput.hourly.relative_humidity_2m[0];

  const windSpeed =
    dataFetcherOutput.hourly.wind_speed_10m[0];

  return (
    <Grid
      container
      spacing={5}
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Encabezado */}
      <Grid size={{ xs: 12, md: 12 }}>
        <HeaderUI />
      </Grid>

      {/* Alertas */}
      <Grid
        size={{ xs: 12, md: 12 }}
        container
        sx={{
          justifyContent: 'right',
          alignItems: 'center',
        }}
      >
        <AlertUI description="No se prevén lluvias" />
      </Grid>

      {/* Selector */}
      <Grid size={{ xs: 12, md: 3 }}>
        <SelectorUI />
      </Grid>

      {/* Indicadores */}
      <Grid container size={{ xs: 12, md: 9 }}>
        <Grid size={{ xs: 12, md: 3 }}>
          <IndicatorUI
            title="Temperatura (2m)"
            description={`${temperature}°C`}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <IndicatorUI
            title="Temperatura Aparente"
            description={`${apparentTemperature}°C`}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <IndicatorUI
            title="Velocidad del Viento"
            description={`${windSpeed} km/h`}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <IndicatorUI
            title="Humedad Relativa"
            description={`${humidity}%`}
          />
        </Grid>
      </Grid>

      {/* Gráfico */}
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{
          display: { xs: 'none', md: 'block' },
        }}
      >
        Elemento: Gráfico
      </Grid>

      {/* Tabla */}
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{
          display: { xs: 'none', md: 'block' },
        }}
      >
        Elemento: Tabla
      </Grid>

      {/* Información adicional */}
      <Grid size={{ xs: 12, md: 12 }}>
        Elemento: Información adicional
      </Grid>
    </Grid>
  );
}

export default App;