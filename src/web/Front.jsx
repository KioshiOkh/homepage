import styles from "../style";
import "../App.css";
import { Page, Footer, AboutMe } from "../web";

const Front = () => (
  <div>
    <div className={`bg-primary ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Page />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <AboutMe />
      </div>
    </div>
  </div>
);

export default Front;
