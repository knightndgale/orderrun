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
  const [data, setData] = useState<[]>([]);
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
    client.sendMessage({
      type: "subscribe",
      collection: "menu_item",
      query: {
        fields: ["*"],
      },
    });
  }

  useEffect(() => {
    client.onWebSocket("open", async () => {
      console.log("socket was connected");
      client.sendMessage({
        type: "subscribe",
        collection: "menu_item",
        query: {
          fields: ["*"],
        },
      });
      setIsConnected(true);
    });

    client.onWebSocket("close", () => {
      console.log("socket was disconnected");
      setData([]);
      setIsConnected(false);
    });

    client.onWebSocket("message", function (message) {
      const { type, data } = message;

      // if (type === "auth" && message.status === "ok") {
      //   subscribe();
      // }
      if (!!data) {
        setData(data);
      }
    });
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
