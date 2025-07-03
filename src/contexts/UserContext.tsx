import { createContext } from "react";
import type { User } from "../types/user.type";

type UserContextType = {
  user: User | null;
  setUser: (user: User| null) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export default UserContext;
