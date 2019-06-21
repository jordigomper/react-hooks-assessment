import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const phantom_gnom = require("../../assets/img/top_secret.jpg");

const Img = styled.img`
  object-fit: cover;
  height: 130px;
`;

const EmptyBackground = styled.img`
  height: 130px;
  background-color: gray;
`;

const ImageCache = ({ src, alt, title }) => {
  const [image, setImage] = useState();

  useEffect(() => {
    const img = new Image();
    img.onload = function() {
      setImage(img.src);
    };
    // if src prop isn't exist, add phantom image
    img.onerror = function() {
      setImage(phantom_gnom);
    };
    img.src = src;
  }, []);

  // while the image is loading, to show custom background
  return !image ? (
    <EmptyBackground />
  ) : (
    <Img src={image} alt={alt} title={title} />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

Image.defaultProps = {
  src: "",
  alt: "Not Found",
  title: "Image not found"
};

export default ImageCache;
