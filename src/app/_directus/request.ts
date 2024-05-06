"use server";
import { directus } from ".";
import { DirectusWebsocketClient } from "./webSocket";

interface Authentication {
  email: string;
  password: string;
}

export const login = async ({ email, password }: Authentication) => {
  try {
    await directus.login(email, password);
  } catch (error) {
    return { success: false, message: JSON.parse(JSON.stringify(error)).errors[0]?.message };
  }
};

export const logOut = async () => {
  try {
    await directus.logout();
  } catch (error) {
    return { success: false, message: JSON.parse(JSON.stringify(error)).errors[0]?.message };
  }
};

export const getAPIToken = async () => {
  const token = await directus.getToken();
  if (!token) return;
  new DirectusWebsocketClient(token);
};
