import { create } from "zustand";

type User = {
  id?: string;
  address: string;
  email: string;
  firstName: string;
  lastName: string;
  birthday: string;
  gender: "MALE" | "FEMALE" | "OTHER";
  phoneNumber: string;
};
type UsersStore = {
  user: User | null;
  setUser: (user: User) => void;
};

export const userStore = create<UsersStore>((set) => ({
  user: null,
  setUser: (user: User) => set({ user }),
}));
