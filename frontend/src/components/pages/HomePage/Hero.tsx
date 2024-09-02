import styles from './Hero.module.scss';
import { SearchInput } from '@/components/common/inputs/SearchInput';
import { CiSearch } from 'react-icons/ci';
import { Button } from '@/components/common/buttons/Button';

export const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <h1 className={styles.title}>
        Find Home <span className={styles.colorChange}>Service/Repair</span>
        <br />
        Near You
      </h1>
      <p className={styles.subtitle}>Explore Best Home Service & Repair near you</p>
      <div className={`${styles.searchContainer} md:flex-row md:w-1/3`}>
        <SearchInput />
        <Button simple rounded>
          <div>
            <CiSearch fontSize={24} />
          </div>
        </Button>
      </div>
    </div>
  );
};
