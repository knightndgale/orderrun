"use client";
import {
  AuthenticationClient,
  DirectusClient,
  StaticTokenClient,
  WebSocketClient,
  authentication,
  createDirectus,
  realtime,
  staticToken,
} from "@directus/sdk";

type InstanceType = DirectusClient<any> & WebSocketClient<any>;
export class DirectusWebsocketClient {
  private static instance: InstanceType;
  private static token: string;

  constructor(token: string) {
    DirectusWebsocketClient.token = token;
  }

  public static getInstance(rebuild = false): InstanceType {
    const socketURL = process.env.WEBSOCKET_URL || "localhost:8055";
    if (!DirectusWebsocketClient.instance || rebuild) {
      DirectusWebsocketClient.instance = createDirectus(`ws://${socketURL}/websocket`)
        .with(staticToken("DJr6jJexpagd40Gu-HrtFsF-zYdNQCIF"))
        .with(realtime({ authMode: "public" }));
    }

    return DirectusWebsocketClient.instance;
  }
}

export const directus = DirectusWebsocketClient.getInstance();
