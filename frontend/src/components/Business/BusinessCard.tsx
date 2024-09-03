import styles from './BusinessCard.module.css';
import { Button } from '@/components/common/buttons/Button';
import { BusinessModel } from '@/types/BusinessModel';
import { generatePath, useNavigate } from 'react-router-dom';
import routes from '@/consts/routes';

interface BusinessCardProps {
  business: BusinessModel;
}

const BusinessCard = ({ business }: BusinessCardProps) => {
  const { images, name, category, contactPerson, address, _id } = business;

  const navigate = useNavigate();
  const pagePath = generatePath(routes.BUSINESS_PAGE, { id: _id });

  return (
    <div className={styles.card}>
      <img className={styles.image} src={images[0].url} alt={name} />
      <div className={styles.container}>
        <div>
          <span className={styles.category}>{category}</span>
        </div>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.contactPerson}>{contactPerson}</p>
        <p className={styles.address}>{address}</p>
        <div>
          <Button simple onClick={() => navigate(pagePath)}>
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
