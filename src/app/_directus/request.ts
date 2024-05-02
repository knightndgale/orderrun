"use server";
import { directus } from ".";
import { DirectusWebsocketClient } from "./webSocket";

interface Authentication {
  email: string;
  password: string;
}

export const login = async ({ email, password }: Authentication) => {
  await directus.login(email, password);
};

export const logOut = async () => {
  try {
    await directus.logout();
  } catch (error) {
    console.error("Check login failed:", error);
    return { success: false };
  }
};

export const getAPIToken = async () => {
  const token = await directus.getToken();
  if (!token) return;
  new DirectusWebsocketClient(token);
};
