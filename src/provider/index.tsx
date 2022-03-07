import { ReactNode } from "react";
import { UserDataProvider } from "./usersProvider";

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return <UserDataProvider>{children}</UserDataProvider>;
};
export default AppProvider;
