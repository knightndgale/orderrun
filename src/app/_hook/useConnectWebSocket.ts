"use client";
import React, { useEffect, useState } from "react";
import { WebSocketInterface } from "@directus/sdk";
import { directus } from "../_directus/webSocket";

const useConnectWebSocket = () => {
  const [webSocket, setWebsocket] = useState<WebSocketInterface>();
  const [socketState, setsocketState] = useState<any>({});

  useEffect(() => {
    async function connect() {
      const websocketDirectus = await directus.connect();
      setWebsocket(websocketDirectus);
    }

    connect();

    const onOpen = () => {
      console.log({ event: "onopen" });
      setsocketState((prev: any) => ({ ...prev, open: true }));
    };
    const onMessage = (message: any) => {
      const { type, data } = message;
      console.log({ event: "onmessage", data, type });
      if (message.type === "ping") {
        directus.sendMessage({
          type: "pong",
        });
      }
      setsocketState((prev: any) => ({ ...prev, message }));
    };
    const onClose = () => {
      console.log({ event: "onclose" });
      setsocketState((prev: any) => ({ ...prev, open: false }));
    };
    const onError = (error: any) => {
      console.log({ event: "onerror", error });
      setsocketState((prev: any) => ({ ...prev, error }));
    };

    directus.onWebSocket("open", onOpen);
    directus.onWebSocket("message", onMessage);
    directus.onWebSocket("close", onClose);
    directus.onWebSocket("error", onError);
  }, []);
  return { webSocket, socketState };
};

export default useConnectWebSocket;
