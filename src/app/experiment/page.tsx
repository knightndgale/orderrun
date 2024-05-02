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
  }

  useEffect(() => {
    client.onWebSocket("open", async () => {
      console.log("socket was connected");
      setIsConnected(true);
    });

    client.onWebSocket("close", () => {
      console.log("socket was disconnected");
      setIsConnected(false);
    });

    client.onWebSocket("message", function (message) {
      const { type, data, event } = message;

      if (event === "init") {
        console.log("~init: TRIGGERED");
        setData(data);
      }
      if (event === "create") {
        console.log("~create: TRIGGERED");
      }

      if (event === "update") {
        console.log("~update: TRIGGERED");
      }
      if (event === "delete") {
        console.log("~delete: TRIGGERED");
      }
      if (type === "auth" && message.status === "ok") {
        subscribe();
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
