import { createContext, ReactNode, useContext, useState } from "react";

interface UserDataProviderProps {
  children: ReactNode;
}
interface UserDataContextProps {
  getUsers: () => void;
  userList: UserDataProps[];
  requestError: boolean;
}
interface UserDataProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const UserDataContext = createContext<UserDataContextProps>(
  {} as UserDataContextProps
);

export const UserDataProvider = ({ children }: UserDataProviderProps) => {
  const [userList, setUserList] = useState<UserDataProps[]>(
    [] as UserDataProps[]
  );
  const [requestError, setRequestError] = useState<boolean>(false);

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (response.status !== 200) {
          setRequestError(true);
          return;
        }
        response.json().then((response) => {
          setUserList(response);
          setRequestError(false);
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <UserDataContext.Provider value={{ getUsers, userList, requestError }}>
      {children}
    </UserDataContext.Provider>
  );
};

export const UseUserDataContext = () => useContext(UserDataContext);
