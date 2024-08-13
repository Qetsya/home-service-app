import BusinessCard from "./BusinessCard";
import { businesses } from "@/consts/business";
import styles from "./BusinessList.module.scss";

export const BusinessList = () => {
  return (
    <>
      <h2 className={styles.title}>Popular businesses</h2>
      <div className={styles.list}>
        {businesses.map((business) => {
          return <BusinessCard business={business} key={business.name} />;
        })}
      </div>
    </>
  );
};
