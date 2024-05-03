"use client";
import React, { useEffect, useState } from "react";
import { SubscriptionOutput, WebSocketInterface } from "@directus/sdk";
import { directus } from "../_directus/webSocket";

export type SubscriptionOutputType = SubscriptionOutput<any, any, any, any>;

export type DirectusSubscribe = {
  subscription: AsyncGenerator<any>;
  unsubscribe(): void;
};
const useConnectWebSocket = (
  subscribe: () => Promise<DirectusSubscribe>,
  messageCallback = (message: SubscriptionOutputType) => {}
) => {
  const [webSocket, setWebsocket] = useState<WebSocketInterface>();
  const [socketState, setsocketState] = useState<any>({});
  const [subscription, setSubscription] = useState<DirectusSubscribe>();

  async function connect() {
    const websocketDirectus = await directus.connect();
    setWebsocket(websocketDirectus);
  }
  useEffect(() => {
    connect();

    directus.onWebSocket("close", () => {
      // console.log({ event: "onclose" });
      subscription?.unsubscribe();
      setsocketState((prev: any) => ({ ...prev, open: false }));
    });

    directus.onWebSocket("error", (error: any) => {
      // console.log({ event: "onerror", error });
      setsocketState((prev: any) => ({ ...prev, error }));
    });

    directus.onWebSocket("open", async () => {
      // console.log({ event: "onopen" });
      const sub = await subscribe();
      setSubscription(sub);
      setsocketState((prev: any) => ({ ...prev, open: true }));
    });
    directus.onWebSocket("message", (message: any) => {
      messageCallback(message);
    });

    return () => {
      directus.disconnect();
    };
  }, []);
  return { webSocket, socketState };
};

export default useConnectWebSocket;
