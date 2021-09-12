import React from 'react';
import useData from './useData';
import './style.scss';
import Spinner from '../Common/Loaders/Spinner/index';
import Error from '../Common/Notifications/Error/index';

export default function VehicleList() {
  // eslint-disable-next-line no-unused-vars
  const [loading, error, vehicles] = useData();
  if (loading) {
    return (
      <div data-testid="loading" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <div data-testid="error" style={{ margin: '0 10px ' }}><Error message={error} /></div>;
  }

  if (vehicles) {
    return (
      <div data-testid="results" className="results-wrapper">
        {vehicles.map((e) => {
          return (
            <div key={e.id} className="vehicle-details">
              <img src={e.media[0].url} alt={`Jaguar ${e.id}.`} />
              <div className="details">
                <h2>{`JAGUAR ${e.id.toUpperCase()}`}</h2>
                <div className="price-wrapper"><span id="price">{`From ${e.details.price}`}</span></div>
                <div className="details-wrapper">
                  <p>{e.details.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
