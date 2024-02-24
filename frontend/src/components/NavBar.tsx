import React, { CSSProperties } from "react";
import unilectivesLogo from "../assets/unilectives.svg";

import {
  BookOpenIcon,
  ShieldCheckIcon,
  BarsArrowUpIcon,
  UserCircleIcon,
  MoonIcon,
  ArrowRightEndOnRectangleIcon,
} from "@heroicons/react/24/outline";

const NavBar: React.FC = () => {
  return (
    <div style={styles.mainContainer}>
      <div style={styles.topContainer}>
        <div style={styles.logoContainer}>
          <img src={unilectivesLogo} style={styles.logoStyles}></img>
        </div>
        <div style={styles.iconsContainer}>
          <BookOpenIcon style={styles.icon} />
          <ShieldCheckIcon style={styles.icon} />
        </div>
      </div>
      <div style={styles.bottomContainer}>
        <div style={styles.iconsContainer}>
          <BarsArrowUpIcon style={styles.icon} />
          <UserCircleIcon style={styles.icon} />
          <MoonIcon style={styles.icon} />
          <ArrowRightEndOnRectangleIcon style={styles.icon} />
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "60px",
    backgroundColor: "#F9FAFB",
    margin: "0",
    alignItems: "center",
    padding: "8px",
    position: "fixed",
    top: 0,
    left: 0,
    justifyContent: "space-between",
  },

  logoStyles: {
    width: "40px",
    height: "36px",
  },

  logoContainer: {
    borderBottom: "2px solid #E8E8E8",
    paddingBottom: "12px",
  },

  iconsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  icon: {
    width: "24px",
    height: "24px",
    marginBottom: "40px",
  },

  topContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    paddingTop: "20px",
  },

  bottomContainer: {
    paddingBottom: "8px",
  },
};

export default NavBar;
