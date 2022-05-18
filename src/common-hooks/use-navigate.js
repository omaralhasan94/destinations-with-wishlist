import React from "react";
import { useNavigate } from "react-router-dom";

const useNavigateHook = () => {
  const navigate = useNavigate();
  return { navigate };
};

export { useNavigateHook };
