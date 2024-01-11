import axios from "axios";

export async function fetchUser(walletAddress: string) {
  try {
    const response = await axios.get(
      "http://localhost:5555/api/user?walletAddress=" + walletAddress
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
}

export async function postUser(walletAddress: string) {
  try {
    const response = await axios.post(
      "http://localhost:5555/api/user?walletAddress=" + walletAddress
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

export async function postUserInfo(data: any) {
  try {
    const response = await axios.post(
      "http://localhost:5555/api/user-info",
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}
