import React from "react";

export const VideoBg = () => {
  return (
    <video
      autoPlay
      loop
      muted
      className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
    >
      <source src="/website-bg-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
