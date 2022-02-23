import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();

  // Navigera användaren tillbaka till startsidan om sidan inte hittas
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 3000);
  }, [navigate]);

  return (
    <div>
      <h1>Sidan hittades inte</h1>
      <p>Du kommer att komma tillbaka till startsidan</p>
    </div>
  );
};
