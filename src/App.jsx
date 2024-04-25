import styles from "./style";
import "./App.css"
import { Navbar, Page, Footer, AboutMe } from "./web";

const App = () => (

    <div className="bg-primary overflow-hidden w-full">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
        </div>


      <div className={`bg-primary ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Page />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>

          <AboutMe />
          <Footer />
        </div>
      </div>

    </div>
  );


export default App;
