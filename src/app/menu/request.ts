"use server";
import { readItems, staticToken } from "@directus/sdk";
import { directus } from "../_directus";

export const getToken = async () => {
  try {
    const response = await directus.getToken();
    console.log("🚀 ~ getMenus ~ response:", response);
    return response;
  } catch (e: any) {
    console.log("🚀 ~ getMenus ~ e:", e?.errors[0].message);
    // return { success: false, error: e };
  }
};
