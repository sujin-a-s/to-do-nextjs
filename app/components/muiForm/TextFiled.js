"use client";

import { TextField } from "@mui/material";
import { useField } from "formik";
import React from "react";

const TextFiled = ({ name, ...otherProps }) => {
  const [field, mata] = useField(name);

  const textFiledConfig = {
    ...field,
    ...otherProps, // This ensures `label` is passed properly
    fullWidth: true,
    variant: "outlined",
  };

  if (mata && mata.touched && mata.error) {
    textFiledConfig.error = true;
    textFiledConfig.helperText = mata.error;
  }

  return <TextField {...textFiledConfig} />;
};

export default TextFiled;
