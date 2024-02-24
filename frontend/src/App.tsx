import React, { CSSProperties } from "react";
import CourseCard from "./components/CourseCard";
import coursesData from "./courses.json";
import UnilectivesTitle from "./components/UnilectivesTitle";
import SearchBar from "./components/SearchBar";
import SortByBox from "./components/SortByBox";
import NavBar from "./components/NavBar";

const App: React.FC = () => {
  return (
    <div className="App">
      <div style={styles.container}>
        <NavBar />
        <div style={styles.content}>
          <div style={styles.headerText}>
            <p style={styles.devSocFont}>DevSoc presents</p>
            <UnilectivesTitle />
            <p style={styles.oneStopFont}>
              Your one-stop shop for UNSW course and elective reviews.
            </p>
          </div>
          <div style={styles.coursesBoxes}>
            <SearchBar />
            <SortByBox />
          </div>
          <div style={styles.reviewContainer}>
            {coursesData.map((course) => (
              <CourseCard
                key={`${course.course_prefix}${course.course_code}`}
                courseCode={`${course.course_prefix}${course.course_code}`}
                courseName={course.course_title}
                reviewCount={course.total_reviews}
                terms={course.offered_terms}
                rating={course.average_stars}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "row",
    height: "94vh",
  },

  content: {
    flex: 1,
    paddingRight: "200px",
    paddingLeft: "180px",
    paddingTop: "32px",
  },

  reviewContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gridGap: "40px 100px",
    marginTop: "30px",
    width: "100%",
  },

  oneStopFont: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "20px",
    marginTop: "0px",
    fontWeight: "800",
  },

  devSocFont: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "16px",
    margin: "0px",
    fontWeight: "450",
  },

  coursesBoxes: {
    display: "flex",
    flexDirection: "column",
    margin: "44px 0",
    gap: "20px",
  },
};

export default App;
