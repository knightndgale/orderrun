"use server";
import { directus } from ".";

interface Authentication {
  email: string;
  password: string;
}

export const login = async ({ email, password }: Authentication) => {
  try {
    await directus.login(email, password);
  } catch (e: any) {
    return { success: false, message: e?.errors?.[0]?.message };
  }
};

export const logOut = async () => {
  try {
    await directus.logout();
  } catch (error) {
    console.error("Check login failed:", error);
    return { success: false };
  }
};
