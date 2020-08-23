import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);
  const getLogs = async () => {
    setLoading(true);
    const res = await fetch('/logs');
    const data = await res.json();

    setLogs(data);
    setLoading(false);
  };

  if (loading || logs === null) {
    return <h4>Loading...</h4>;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header' style={{ margin: '30px' }}>
        <h4 className='center'>System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className='center'>No logs to show...</p>
      ) : (
        logs.map((log) => (
          <li
            key={log.id}
            style={{ color: 'red', padding: '10px', fontSize: '24px' }}
          >
            {log.message}
          </li>
        ))
      )}
    </ul>
  );
};

// Logs.propTypes = {
//   log: PropTypes.object.isRequired,
//   getLogs: PropTypes.func.isRequired
// };

export default Logs;
