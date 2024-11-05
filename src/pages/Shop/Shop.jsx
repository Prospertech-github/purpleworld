import Navbar from "../../components/Navbar";
import DarkBG from "../../components/DarkBG";
import Footer from "../../components/Footer";
import styles from "./Shop.module.css";
import { Link, NavLink, Outlet, useLocation} from "react-router-dom";
import { useEffect, useState } from "react";

export default function Shop() {
  const {pathname} = useLocation();
  const [path, setPath] = useState('')

  useEffect(()=>{
    const currentLocation = pathname.split("/");
    if(currentLocation[2]) setPath(currentLocation[2]);
  },[pathname])
  return (
    <>
      <Navbar />
      <DarkBG text="Shop">
        <div>
          <NavLink to="/shop/groceries" className={path === 'groceries' ? styles.active : ''}>Groceries</NavLink>
          <p> &#62; </p>
          <NavLink to="/shop/skincare" className={path === 'skincare' ? styles.active : ''}>Skin Care</NavLink>
        </div>
      </DarkBG>

      <section className={styles.productArea}>
        <Outlet />
      </section>
      <Footer />
    </>
  );
}
