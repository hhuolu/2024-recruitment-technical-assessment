import { CSSProperties } from "react";
import {
  ChevronDownIcon
} from "@heroicons/react/24/outline";


const SortByBox = () => {
  return (
    <div style={styles.sortByBox}>
      <p style={styles.sortByText}>Sort by</p>
      <ChevronDownIcon style={styles.icon} />
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  sortByBox: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "160px",
    height: "36px",
    border: "1px solid #BABABA",
    borderRadius: "4px",
    paddingLeft: "12px",
  },

  sortByText: {
    fontFamily: "Roboto, sans-serif",
    margin: 0,
    color: "#BABABA",
    fontSize: "10pt",
  },

  icon: {
    width: "12px",
    height: "12px",
    marginRight: "16px",
  },
};

export default SortByBox;
