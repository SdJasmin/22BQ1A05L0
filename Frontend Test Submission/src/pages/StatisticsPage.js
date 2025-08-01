import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StatisticsPage = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/statistics');
        setStats(res.data);
      } catch (err) {
        console.error('Error:', err);
      }
    };
    fetchStats();
  }, []);

  return (
    <div>
      <h2>URL Statistics</h2>
      <ul>
        {stats.map((item, index) => (
          <li key={index}>
            <p><strong>Original:</strong> {item.originalUrl}</p>
            <p><strong>Short:</strong> {item.shortUrl}</p>
            <p><strong>Clicks:</strong> {item.clicks}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatisticsPage;
