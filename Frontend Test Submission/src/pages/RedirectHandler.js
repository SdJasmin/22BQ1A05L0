import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RedirectHandler = () => {
  const { shortId } = useParams();

  useEffect(() => {
    const redirect = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/${shortId}`);
        window.location.href = res.data.originalUrl;
      } catch (err) {
        console.error('Redirect error:', err);
        alert('Invalid or expired short URL.');
      }
    };
    redirect();
  }, [shortId]);

  return <p>Redirecting...</p>;
};

export default RedirectHandler;
