import { StateCreator, create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import PersistorGate from "./persistorGate";

enum Status {
  Published,
  Draft,
  Archive,
}

type Menu = {
  id: string;
  status: Status;
  title: string;
  description: string;
  image: string;
  price: string;
};
type MenuItem = {
  id: string | Omit<Menu, "id">;
  quantity: number;
};

type Cart = {
  menu_item: MenuItem[];
  total_price: 0;
};

interface ICart {
  cart: Cart;
  addCart: (by: Menu, quantity: number) => void;
  // deleteCart: (id: string) => void;
  // updateCart: (id: string, item: MenuItem) => void;
}

const cartStore = create<ICart>()(
  PersistorGate<ICart>(
    (set) => ({
      cart: {
        menu_item: [],
        total_price: 0,
      },
      addCart: (by, quantity) =>
        set((state) => ({
          cart: {
            menu_item: [...state.cart.menu_item, { id: by.id, quantity: quantity }],
            total_price: 0,
          },
        })),
    }),
    { name: "cart" }
  )
);

export default cartStore;
