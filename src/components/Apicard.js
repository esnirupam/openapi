import React from 'react';
import './ApiCard.css';

function ApiCard({ api }) {
    return (
        <div className="api-card">
            <h3>{api.name}</h3>
            <p>{api.description}</p>
        </div>
    );
}

export default ApiCard;
