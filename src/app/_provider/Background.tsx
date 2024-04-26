"use client";
import { Box } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

const BackgroundProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      height="100vh"
      width="100%"
      backgroundImage={"url('/images/bg.jpg')"}
      style={{
        position: "relative",
        overflow: "auto",
      }}>
      {children}
    </Box>
  );
};

export default BackgroundProvider;
