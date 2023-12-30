import { useContext } from "react";
import { Context } from "./AuthoProvider";

export default function useAuthValue() {
  const value = useContext(Context);
  return value;
}