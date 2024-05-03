"use client";
import {
  DirectusClient,
  StaticTokenClient,
  WebSocketClient,
  createDirectus,
  realtime,
  staticToken,
} from "@directus/sdk";
import React, { useEffect, useMemo, useState } from "react";

const page = () => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);

  const [menuItemSubs, setMenuItemSubs] = useState<{
    subscription: AsyncGenerator<any>;
    unsubscribe(): void;
  }>();
  const client: DirectusClient<any> & WebSocketClient<any> & StaticTokenClient<any> =
    useMemo(() => {
      const socketURL = process.env.WEBSOCKET_URL || "localhost:8055";
      const _client = createDirectus(`ws://${socketURL}/websocket`)
        .with(staticToken("DJr6jJexpagd40Gu-HrtFsF-zYdNQCIF"))
        .with(realtime());
      _client.connect();
      return _client;
    }, []);

  async function subscribe() {
    const menuItemSub = await client.subscribe("menu_item");

    setMenuItemSubs(menuItemSub);
    for await (const message of menuItemSub.subscription) {
      if (message.event === "init") {
        setData(message.data);
      }
      if (message.event === "update") {
        console.log("🚀 ~ update ~ message:", message);
        setData(message.data);
      }
      if (message.event === "delete") {
        console.log("🚀 ~ delete ~ message:", message);
        setData(message.data);
      }
      if (message.event === "create") {
        console.log("🚀 ~ create ~ message:", message);
        setData(message.data);
      }
    }
  }

  useEffect(() => {
    client.onWebSocket("open", async () => {
      subscribe();
      setIsConnected(true);
    });

    client.onWebSocket("close", () => {
      console.log("socket was disconnected");
      menuItemSubs?.unsubscribe();
      setIsConnected(false);
    });

    client.onWebSocket("error", function (error) {
      console.error({ event: "onerror", error });
    });

    client.onWebSocket("message", function (message) {
      const { type, data, event } = message;
      // All subscription event will trigger message event
      // you can get the event type, data, status etc... from here
      // The caviat of using this is when you are using this subscription it'll will trigger it 4 times
      if (type === "auth" && message.status === "ok") {
        // you can disconnect all subs and socket when user is authenticated
      }
    });

    return () => {
      menuItemSubs?.unsubscribe();
      client.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Status: {isConnected ? "Connected" : "Disconnected"}</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}>
        <button onClick={() => client.disconnect()}>Disconnect</button>
        <button onClick={() => client.connect()}>Connect</button>
        <button onClick={() => client.sendMessage({ type: "ping" })}>Ping</button>
        <button
          onClick={() =>
            client.sendMessage({ type: "auth", access_token: "DJr6jJexpagd40Gu-HrtFsF-zYdNQCIF" })
          }>
          Auth
        </button>
        {JSON.stringify(data)}
      </div>
    </div>
  );
};

export default page;
