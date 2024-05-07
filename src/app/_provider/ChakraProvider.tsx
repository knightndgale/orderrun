"use client";
import React from "react";
import {
  ChakraBaseProvider,
  theme as chakraTheme,
  withDefaultColorScheme,
  extendTheme,
} from "@chakra-ui/react";

const customTheme = extendTheme(
  {
    colors: {
      brand: chakraTheme.colors.purple,
    },
  },
  withDefaultColorScheme({ colorScheme: "brand" })
);

const ChakraProvider = ({ children }: { children: React.ReactNode }) => {
  return <ChakraBaseProvider theme={customTheme}>{children}</ChakraBaseProvider>;
};

export default ChakraProvider;
