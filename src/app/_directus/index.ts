import {
  AuthenticationClient,
  DirectusClient,
  RestClient,
  WebSocketClient,
  authentication,
  createDirectus,
  realtime,
  rest,
} from "@directus/sdk";

export class DirectusApiClient {
  private static instance: DirectusClient<any> &
    RestClient<any> &
    WebSocketClient<any> &
    AuthenticationClient<any>;

  public static getInstance(
    rebuild = false
  ): DirectusClient<any> & RestClient<any> & WebSocketClient<any> & AuthenticationClient<any> {
    if (!DirectusApiClient.instance || rebuild) {
      DirectusApiClient.instance = createDirectus(`${process.env.DIRECTUS_BASEURL}`)
        .with(rest())
        .with(realtime())
        .with(authentication());
    }

    return DirectusApiClient.instance;
  }
}

export const directus = DirectusApiClient.getInstance();
