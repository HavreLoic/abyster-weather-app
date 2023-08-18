import React, { useState, useEffect } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { GeoDBCitiesUrl } from '../../apiSetups'
import { GeoDBCitiesOptions } from '../../apiSetups'

const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null)
    const [inputValue, setInputValue] = useState(null)
    const [option, setOption] = useState({})

    const handleOnChange = (searchData) => {
        setSearch(searchData)
        onSearchChange(searchData)
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `${GeoDBCitiesUrl}/cities?namePrefix=${inputValue}&languageCode=fr`,
                GeoDBCitiesOptions
            )
            const countriesInformation = await response.json()
            setOption(countriesInformation)
        }
        fetchData()
    }, [inputValue])


    // Valeur du prop loadOptions à passer dans le composant AsyncPaginate. 
    // L'implémentation de cette fonction fournie par la doc officielle sur le npm montrant comment l'utiliser 
    // se trouve dans leur codesandboxsur l'utilisation de la loadOptions https://codesandbox.io/s/o75rno2w65?file=/src/loadOptions.ts
    const loadOptions = (inputValue) => {
        setInputValue(inputValue)
        return {
            options: option.data?.map((city) => {
                return {
                    value: `${city.latitude} ${city.longitude}`,
                    label: `${city.name}, ${city.countryCode}`,
                }
            })
        }
    };

    console.log(loadOptions);

    return (
        // Documentation sur l'utilisation du composant AsyncPaginate et les options supplémentaires https://www.npmjs.com/package/react-select-async-paginate
        <AsyncPaginate
            value={search}
            onChange={handleOnChange}
            placeholder="Rechercher la ville"
            loadOptions={loadOptions}
            debounceTimeout={1000}
        />
    )
}

export default Search