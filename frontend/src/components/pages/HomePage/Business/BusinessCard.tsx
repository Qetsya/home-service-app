import { Button } from "@/components/common/Button";
import { BusinessModel } from "@/types/BusinessModel";
import styles from "./BusinessCard.module.scss";

interface BusinessCardProps {
  business: BusinessModel;
}

const BusinessCard = ({ business }: BusinessCardProps) => {
  const { images, name, category, contactPerson, address } = business;

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
          <Button>Book Now</Button>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
