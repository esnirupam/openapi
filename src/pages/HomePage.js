import React, { useEffect, useState } from 'react';
import ApiCard from '../components/Apicard';
import { fetchApis } from '../api/apiservice';

function HomePage() {
    const [apis, setApis] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadApis = async () => {
            try {
                const data = await fetchApis();
                setApis(data);
            } catch (err) {
                setError(err.message);
            }
        };
        loadApis();
    }, []);

    return (
        <div>
            <h2>Available APIs</h2>
            {error && <p>Error: {error}</p>}
            <div className="api-list">
                {apis.map(api => (
                    <ApiCard key={api.id} api={api} />
                ))}
            </div>
        </div>
    );
}

export default HomePage;
