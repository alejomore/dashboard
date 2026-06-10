import './App.css'
import Grid from '@mui/material/Grid';

import HeaderUI from './components/HeaderUI.tsx';
import AlertUI from './components/AlertUI.tsx';
import SelectorUI from './components/SelectorUI.tsx';
import IndicatorUI from './components/IndicatorUI .tsx';

import useFetchData from './hooks/useFetchData';

function App() {

    const dataFetcherOutput = useFetchData();

    return (
        <Grid
            container
            spacing={5}
            sx={{
                justifyContent: "center",
                alignItems: "center"
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
                    justifyContent: "right",
                    alignItems: "center"
                }}
            >
                <AlertUI description="No se preveen lluvias" />
            </Grid>

            {/* Selector */}
            <Grid size={{ xs: 12, md: 3 }}>
                <SelectorUI />
            </Grid>

            {/* Indicadores */}
            <Grid container size={{ xs: 12, md: 9 }}>

                <Grid size={{ xs: 12, md: 3 }}>
                    {dataFetcherOutput && (
                        <IndicatorUI
                            title="Temperatura (2m)"
                            description={`${dataFetcherOutput.current.temperature_2m} ${dataFetcherOutput.current_units.temperature_2m}`}
                        />
                    )}
                </Grid>

                <Grid size={{ xs: 12, md: 3 }}>
                    <IndicatorUI
                        title="Temperatura Aparente"
                        description="XX°C"
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 3 }}>
                    <IndicatorUI
                        title="Velocidad del Viento"
                        description="XX km/h"
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 3 }}>
                    <IndicatorUI
                        title="Humedad Relativa"
                        description="XX%"
                    />
                </Grid>

            </Grid>

            {/* Gráfico */}
            <Grid
                size={{ xs: 12, md: 6 }}
                sx={{ display: { xs: "none", md: "block" } }}
            >
                Elemento: Gráfico
            </Grid>

            {/* Tabla */}
            <Grid
                size={{ xs: 12, md: 6 }}
                sx={{ display: { xs: "none", md: "block" } }}
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