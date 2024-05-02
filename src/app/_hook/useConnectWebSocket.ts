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

    connect().then(() => {});

    const onClose = () => {
      console.log({ event: "onclose" });
      setsocketState((prev: any) => ({ ...prev, open: false }));
    };
    const onError = (error: any) => {
      console.log({ event: "onerror", error });
      setsocketState((prev: any) => ({ ...prev, error }));
    };

    directus.onWebSocket("open", () => {
      console.log({ event: "onopen" });
      setsocketState((prev: any) => ({ ...prev, open: true }));
    });
    directus.onWebSocket("message", (message: any) => {
      const { type, data } = message;
      setsocketState((prev: any) => ({ ...prev, message }));
    });
    directus.onWebSocket("close", onClose);
    directus.onWebSocket("error", onError);
  }, []);
  return { webSocket, socketState };
};

export default useConnectWebSocket;
