import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { EmptyBackground, Img } from "./elements";

const phantom_gnome = require("../../assets/img/top_secret.jpg");

export const ImageCache = ({ src, alt, title }) => {
  const [image, setImage] = useState();

  useEffect(() => {
    const img = new Image();
    img.onload = function () {
      setImage(img.src);
    };
    // if src prop isn't exist, add phantom image
    img.onerror = function () {
      setImage(phantom_gnome);
    };
    img.src = src;
  }, [src]);

  // while the image is loading, to show custom background
  return !image ? (
    <EmptyBackground />
  ) : (
    <Img src={image} alt={alt} title={title} />
  );
};

ImageCache.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

ImageCache.defaultProps = {
  src: "",
  alt: "Not Found",
  title: "Image not found",
};
