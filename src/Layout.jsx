import styles from "./style";
import { Navbar, Footer } from "./web";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <div className="bg-primary overflow-hidden w-full">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
