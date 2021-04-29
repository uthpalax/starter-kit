import { createClient } from "nhost-js-sdk";

const nhostClient = createClient({
  baseURL: "http://localhost:9001",
})

const auth = nhostClient.auth;
const storage = nhostClient.storage;

export { auth, storage };