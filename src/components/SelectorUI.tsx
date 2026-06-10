import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

export default function SelectorUI() {
    const [cityInput, setCityInput] = useState('');
    
    const handleChange = (event: SelectChangeEvent<string>) => {
        setCityInput(event.target.value);
    };

    return (
        /* Envolvemos todo en un Fragmento de React */
        <>
            <FormControl fullWidth>
                <InputLabel id="city-select-label">Ciudad</InputLabel>
                <Select
                    labelId="city-select-label"
                    id="city-simple-select"
                    label="Ciudad"
                    onChange={handleChange}
                    value={cityInput}
                >
                    {/* Le agregamos value="" al placeholder para que coincida con tu estado inicial */}
                    <MenuItem value="" disabled><em>Seleccione una ciudad</em></MenuItem>
                    <MenuItem value={"guayaquil"}>Guayaquil</MenuItem>
                    <MenuItem value={"quito"}>Quito</MenuItem>
                    <MenuItem value={"manta"}>Manta</MenuItem>
                    <MenuItem value={"cuenca"}>Cuenca</MenuItem>
                </Select>
            </FormControl>
            
            {/* Ahora la condición está correctamente dentro del return */}
            {cityInput && (
                <p>
                    información del clima en <span style={{ textTransform: 'capitalize', fontWeight: 'bold' }}>{cityInput}</span>
                </p>
            )}
        </>
    );
}