"use client";

import useHearthMotion from "@/app/hooks/useHearthMotion";
import useLenis from "@/app/hooks/useLenis";

const Animation = () => {
  useLenis();
  useHearthMotion();
  return;
};

export default Animation;
