import React from "react";

import dynamic from "next/dynamic";

const ChakraProvider = dynamic(() => import("./_provider/ChakraProvider"), { ssr: false });
const BackgroundProvider = dynamic(() => import("./_provider/Background"), { ssr: false });

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ChakraProvider>
      <BackgroundProvider>{children}</BackgroundProvider>
    </ChakraProvider>
  );
};

export default Provider;
