/** @format */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog, faVideo } from "@fortawesome/free-solid-svg-icons";
import "../Styles/blogandVideos.css";

const BlogAndVideos = () => {
  return (
    <div className="blog-videos-container">
      <div className="blog-section">
        <h2>
          <FontAwesomeIcon icon={faBlog} style={{ marginRight: "10px" }} />
          Fitness Blogs
        </h2>
        <div className="blog-card">
          <h3>Healthy Lifestyle: Fitness Myths Debunked</h3>
          <p>
            Read our latest blog post to uncover the truth about common fitness
            myths. From nutrition tips to the best workout routines, we cover it
            all!
          </p>
          <a
            href="https://www.exampleblog.com/fitness-myths"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-read-more"
          >
            Read More
          </a>
        </div>
        <div className="blog-card">
          <h3>Top 5 Exercises for Building Muscle</h3>
          <p>
            Looking to build muscle? Our blog post provides you with the best
            exercises to add to your routine for optimal results.
          </p>
          <a
            href="https://www.exampleblog.com/building-muscle"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-read-more"
          >
            Read More
          </a>
        </div>
      </div>

      <div className="videos-section">
      </div>
    </div>
  );
};

export default BlogAndVideos;
