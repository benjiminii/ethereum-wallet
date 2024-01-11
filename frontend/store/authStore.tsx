import axios from "axios";
import { create } from "zustand";
import { SiweMessage } from "siwe";
import Cookies from "js-cookie";
import { ethers } from "ethers";
import { postUser } from "@/services/userService";

type TAuthStore = {
  address: string;
  loggedIn: boolean;
  connectWallet(): void;
  signin(): void;
  setLoggedIn: (loading: boolean) => void;
};

export const authStore = create<TAuthStore>((set) => ({
  address: "",
  loggedIn: false,
  setLoggedIn: (loggedIn: boolean) => set({ loggedIn }),
  connectWallet: async () => {
    //@ts-ignore
    const provider = new ethers.providers.Web3Provider(window?.ethereum);

    const accounts = await provider
      .send("eth_requestAccounts", [])
      .catch(() => console.log("user rejected request"));
    if (accounts?.length > 0 && accounts[0]) {
      set({ address: accounts[0] });
      Cookies.set("wallet_address", accounts[0]);
      const res = await postUser(accounts[0] as string);
    }
  },
  signin: async () => {
    try {
      //@ts-ignore
      const provider = new ethers.providers.Web3Provider(window?.ethereum);
      const signer = provider?.getSigner();

      // Get nonce
      const res = await axios.get("http://localhost:5555/api/nonce");

      // Creating welcome message
      const messageRaw = new SiweMessage({
        domain: window.location.host,
        address: await signer.getAddress(),
        statement: "Welcome! Sign in into benjiminii Ethereum Wallet.",
        uri: window.location.origin,
        version: "1",
        chainId: 1,
        nonce: res.data,
      });

      const message = messageRaw.prepareMessage();

      // Getting signature
      const signature = await signer.signMessage(message);

      // Sending to server
      const res2 = await axios.post("http://localhost:5555/api/verify", {
        message,
        signature,
      });
      Cookies.set("wallet_nonce", res.data);

      set({ loggedIn: true });
    } catch (err) {}
  },
}));
