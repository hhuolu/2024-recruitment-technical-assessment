import React, { CSSProperties } from "react";

type CourseCardProps = {
  courseCode: string;
  courseName: string;
  reviewCount: number;
  terms: string[];
  rating: number;
};

const CourseCard: React.FC<CourseCardProps> = ({
  courseCode,
  courseName,
  reviewCount,
  terms,
  rating,
}) => {
  return (
    <div style={styles.courseCard}>
      <div style={styles.courseHeader}>
        <div style={styles.mainCourseHeader}>
          <p style={styles.courseCodeFont}>{courseCode}</p>
          <div style={styles.courseRating}>
            <div style={styles.courseRatingStars}>
              {"★".repeat(Math.round(rating))}
              {"☆".repeat(5 - Math.round(rating))}
            </div>
            <div style={styles.courseRatingReviews}>
              <p style={styles.reviewFont}>{reviewCount} reviews</p>
            </div>
          </div>
        </div>
        <p style={styles.courseNameFont}>{courseName}</p>
      </div>
      <div style={styles.courseTerms}>
        {terms.map((term) => (
          <button key={term} style={styles.courseTermsButton}>
            {term}
          </button>
        ))}
      </div>
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  courseCard: {
    fontFamily: "Roboto, sans-serif",
    border: "none",
    borderRadius: "8px",
    padding: "20px",
    width: "100%",
    height: "160px",
    backgroundColor: "#FAFAFA",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  mainCourseHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: "12px",
  },

  courseCodeFont: {
    fontSize: "22px",
    fontWeight: "600",
    margin: "0",
  },

  courseNameFont: {
    fontSize: "14px",
    fontWeight: "400",
    margin: "0",
  },

  reviewFont: {
    fontSize: "10px",
    fontWeight: "400",
    margin: "0",
    color: "#989898",
  },

  courseHeader: {
    display: "flex",
    flexDirection: "column",
  },

  courseRating: {
    display: "flex",
    flexDirection: "column",
  },

  courseRatingStars: {
    fontSize: "20px",
    color: "#B789E5",
  },

  courseRatingReviews: {
    fontSize: "8px",
  },

  courseTerms: {
    display: "flex",
    flexDirection: "row",
  },

  courseTermsButton: {
    width: "54px",
    height: "23px",
    backgroundColor: "#CCEBF6",
    borderRadius: "16px",
    border: "none",
    marginRight: "12px",
    fontSize: "10px",
  },
};

export default CourseCard;
