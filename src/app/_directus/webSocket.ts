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

type InstanceType = DirectusClient<any> &
  WebSocketClient<any> &
  // StaticTokenClient<any> &
  AuthenticationClient<any>;
export class DirectusWebsocketClient {
  private static instance: InstanceType;

  public static getInstance(rebuild = false): InstanceType {
    const socketURL = process.env.WEBSOCKET_URL || "localhost:8055";
    if (!DirectusWebsocketClient.instance || rebuild) {
      DirectusWebsocketClient.instance = createDirectus(`ws://${socketURL}/websocket`)
        // .with(staticToken(process.env.STATIC_TOKEN || ""))
        .with(realtime())
        .with(authentication());
    }

    return DirectusWebsocketClient.instance;
  }
}

export const directus = DirectusWebsocketClient.getInstance();
