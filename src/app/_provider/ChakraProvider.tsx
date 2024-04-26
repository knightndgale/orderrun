"use client";
import React from "react";
import { ChakraBaseProvider, extendBaseTheme, theme as chakraTheme } from "@chakra-ui/react";

const theme = extendBaseTheme({
  components: {
    ...chakraTheme.components,
  },
});

const ChakraProvider = ({ children }: { children: React.ReactNode }) => {
  return <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>;
};

export default ChakraProvider;
