import { SearchInput } from "@/components/common/SearchInput";
import { CiSearch } from "react-icons/ci";
import { Button } from "@/components/common/Button";

import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <h1 className={styles.title}>
        Find Home <span className={styles.colorChange}>Service/Repair</span>
        <br />
        Near You
      </h1>
      <p className={styles.subtitle}>
        Explore Best Home Service & Repair near you
      </p>
      <div className={styles.searchContainer}>
        <SearchInput />
        <Button rounded>
          <div>
            <CiSearch fontSize={24} />
          </div>
        </Button>
      </div>
    </div>
  );
};
