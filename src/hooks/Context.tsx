import React, { useContext, useState } from "react";
import {MyContext} from '../model'

  type ContextProviderProps = {
    children: React.ReactNode
  }
  const contextDefaultValues: MyContext = {
    cartModal: false,
    setCartModal: () => {},
    cartCount: 0,
    setCartCount: () => {},
    totalAmount: 0,
    setTotalAmount: () => {},
    mobileNavModal: false,
    setMobileNavModal: () => {}
  };

const AppContext = React.createContext(contextDefaultValues);
const AppProvider = ({ children }: ContextProviderProps) => {
    const [cartModal, setCartModal] = useState<boolean>(contextDefaultValues.cartModal)
    const [cartCount, setCartCount] = useState<number>(contextDefaultValues.cartCount);
    const [totalAmount, setTotalAmount] = useState<number>(contextDefaultValues.totalAmount)
    const [mobileNavModal, setMobileNavModal] = useState<boolean>(contextDefaultValues.mobileNavModal)

  return (
    <AppContext.Provider value={{ cartModal, setCartModal, cartCount, setCartCount, totalAmount, setTotalAmount, mobileNavModal, setMobileNavModal }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;