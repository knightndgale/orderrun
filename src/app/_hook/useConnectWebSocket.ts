import React, { useEffect, useState } from "react";
import { WebSocketInterface } from "@directus/sdk";
import { directus } from "../_directus/webSocket";

const useConnectWebSocket = () => {
  const [webSocket, setWebsocket] = useState<WebSocketInterface>();
  const [socketState, setsocketState] = useState();

  useEffect(() => {
    async function connect() {
      const websocketDirectus = await directus.connect();
      setWebsocket(websocketDirectus);
    }

    connect();

    if (!!webSocket) {
      webSocket.addEventListener("open", function () {
        console.log({ event: "onopen" });
      });

      webSocket.addEventListener("message", function (message) {
        const { type, data } = message;
        console.log({ event: "onmessage", data, type });
      });

      webSocket.addEventListener("close", function () {
        console.log({ event: "onclose" });
      });

      webSocket.addEventListener("error", function (error) {
        console.log({ event: "onerror", error });
      });
    }

    return () => {
      setWebsocket(undefined);
    };
  }, []);
};

export default useConnectWebSocket;
