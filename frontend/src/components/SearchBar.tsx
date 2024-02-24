import { CSSProperties, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = ({ }) => {
  const [showDiv, setShowDiv] = useState(false);

  const handleSearchBarClick = () => {
    setShowDiv(!showDiv);
  };

  const handleDismissButtonClick = () => {
    setShowDiv(false);
  };

  return (
    <div style={styles.searchContainer}>
      <form onSubmit={handleSearchBarClick}>
        <div style={styles.inputContainer}>
          <MagnifyingGlassIcon style={styles.icon} />
          <input
            type="text"
            placeholder="Search for a course e.g. COMP1511"
            style={styles.input}
            onClick={handleSearchBarClick}
          />
        </div>
      </form>

      {showDiv && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <button onClick={handleDismissButtonClick}>Dismiss</button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    background: "#FFF",
    padding: "100px",
    border: "1px solid #000",
  },
  inputContainer: {
    position: "relative",
    display: "flex",
    width: "100%",
    padding: "10px",
    border: "2px solid #A8B7EB",
    borderRadius: "4px",
    fontSize: "12px",
    paddingLeft: "52px",
  },
  input: {
    flex: 1,
    border: "none",
    outline: "none",
  },
  icon: {
    position: "absolute",
    width: "24px",
    height: "24px",
    left: "10px",
    top: "20%",
    color: "#A8B7EB",
  },
};

export default SearchBar;
