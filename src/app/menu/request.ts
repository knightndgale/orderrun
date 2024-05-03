"use server";

import { readItems } from "@directus/sdk";
import { directus } from "../_directus";

export const searchMenu = async (searchText: string) => {
  try {
    const response = await directus.request(
      readItems("menu_item" as any, {
        search: searchText,
      })
    );

    return response;
  } catch (error) {
    console.error("Check login failed:", error);
    return { success: false };
  }
};
