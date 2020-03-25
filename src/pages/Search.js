import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import fetch from 'isomorphic-unfetch';

import { Input, Button } from '../components/FormComponents';
import Spinner from '../components/Spinner';
import ErrorContainer from '../components/ErrorContainer';
import WeatherItem from '../components/WeatherItem';

// const API_KEY = process.env.API_KEY;

function Search({ query }) {
    const [ inputQuery, setInputQuery ] = useState(query || "");
    const [ weatherData, setData ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(false);
    const history = useHistory();

    useEffect(() => {
        if (query) {
            let ignore = false;
            const controller = new AbortController();

            async function fetchSearchResults() {
                let responseBody = {};
                setLoading(true);
                try {
                    const response = await fetch(
                        `http://api.openweathermap.org/data/2.5/forecast?APPID=18f63e4d726f1a9a58e7cf745cd76824&q=${query}`,
                        { signal:  controller.signal }
                    );
                    responseBody = await response.json();
                } catch (e) {
                    if (e instanceof DOMException) {
                        console.log("HTTP failed");
                    } else {
                        setError(true);
                        console.log(e);
                    }
                }

                if (!ignore) {
                    setError(false);
                    setLoading(false);
                    setData(responseBody.list);
                } else {
                    console.log("ignoring results");
                }
                console.log("resp: ", responseBody);
            }

            fetchSearchResults();
            return() => {
                controller.abort();
                ignore = true;
            };
        }
    }, [ query ]);

    return (
        <div class="">
            <form onSubmit={(event) => {
                event.preventDefault();
                history.push(`?q=${inputQuery}`);
            }}>
                <Input
                    value={inputQuery}
                    onChange={event => setInputQuery(event.target.value)}
                />
                <Button type="submit">Search</Button>
            </form>
            {error && <ErrorContainer>Error!</ErrorContainer>}
            {loading ? (
                <Spinner />
            ) : 
                <ul>
                    {weatherData && weatherData.map(data => (
                        <li key={data.dt}>
                            <WeatherItem data={data}/>
                        </li>
                    ))}
                </ul>
            }
        </div>
    );
}

export default Search;