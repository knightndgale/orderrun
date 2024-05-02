import React, { useEffect, useState } from "react";
import { WebSocketInterface } from "@directus/sdk";
import { directus } from "../_directus/webSocket";

const useConnectWebSocket = () => {
  const [webSocket, setWebsocket] = useState<WebSocketInterface>();
  const [socketState, setsocketState] = useState({});

  useEffect(() => {
    async function connect() {
      const websocketDirectus = await directus.connect();
      setWebsocket(websocketDirectus);
    }

    connect();
    if (!webSocket) return;
    const onOpen = () => {
      setsocketState((prev) => ({ ...prev, open: true }));
    };
    const onMessage = (message: any) => {
      setsocketState((prev) => ({ ...prev, message }));
    };
    const onClose = () => {
      setsocketState((prev) => ({ ...prev, open: false }));
    };
    const onError = (error: any) => {
      setsocketState((prev) => ({ ...prev, error }));
    };

    webSocket.addEventListener("open", onOpen);
    webSocket.addEventListener("message", onMessage);
    webSocket.addEventListener("close", onClose);
    webSocket.addEventListener("error", onError);

    return () => {
      webSocket.removeEventListener("open", onOpen);
      webSocket.removeEventListener("message", onMessage);
      webSocket.removeEventListener("close", onClose);
      webSocket.removeEventListener("error", onError);
      webSocket.close();
    };
  }, []);
  return { webSocket, socketState };
};

export default useConnectWebSocket;
