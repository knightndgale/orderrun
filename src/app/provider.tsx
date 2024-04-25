import React, { PropsWithChildren } from "react";
import { ChakraBaseProvider, extendBaseTheme, theme as chakraTheme } from "@chakra-ui/react";

const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
  },
});
const Provider: React.FC<PropsWithChildren> = ({ children }) => {
  return <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>;
};

export default Provider;
