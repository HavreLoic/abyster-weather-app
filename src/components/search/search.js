import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { GeoDBCitiesUrl } from '../../apiSetups'
import { GeoDBCitiesOptions } from '../../apiSetups'

const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null)

    const handleOnChange = (searchData) => {
        setSearch(searchData)
        onSearchChange(searchData)
    }

    // Valeur du prop loadOptions à passer dans le composant AsyncPaginate. 
    // L'implémentation de cette fonction fournie par la doc officielle sur le npm montrant comment l'utiliser 
    // se trouve dans leur codesandboxsur l'utilisation de la loadOptions https://codesandbox.io/s/o75rno2w65?file=/src/loadOptions.ts
    const loadOptions = async (inputValue) => {
        const response = await fetch(
            `${GeoDBCitiesUrl}/cities?namePrefix=${inputValue}&languageCode=fr`,
            GeoDBCitiesOptions
        )
        const countriesInformation = await response.json()
        return {
            options: countriesInformation.data.map((city) => {
                return {
                    value: `${city.latitude} ${city.longitude}`,
                    label: `${city.name}, ${city.countryCode}`,
                }
            }),
        }
    };

    return (
        // Documentation sur l'utilisation du composant AsyncPaginate et les options supplémentaires https://www.npmjs.com/package/react-select-async-paginate
        <AsyncPaginate
            value={search}
            onChange={handleOnChange}
            placeholder="Rechercher la ville"
            loadOptions={loadOptions}
            debounceTimeout={600}
        />
    )
}

export default Search