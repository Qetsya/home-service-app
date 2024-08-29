import { useParams } from 'react-router-dom';

export const BusinessPage: React.FC = () => {
  const { business } = useParams<{ business: string }>();
  return (
    <div>
      <h1>Business Page for {business}</h1>
      <div className="detail">yo</div>
    </div>
  );
};
