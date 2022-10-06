import React, { useContext, useState } from "react";
import {MyContext} from '../model'

  type ContextProviderProps = {
    children: React.ReactNode
  }
  const contextDefaultValues: MyContext = {
    renderFix: false,
    setRenderFix: () => {},
    cardModal: false,
    setCardModal: () => {},
    cartCount: 0,
    setCartCount: () => {},
    totalAmount: 0,
    setTotalAmount: () => {},
    mobileNavModal: false,
    setMobileNavModal: () => {}
  };

const AppContext = React.createContext(contextDefaultValues);
const AppProvider = ({ children }: ContextProviderProps) => {
    const [renderFix, setRenderFix] = useState<boolean>(contextDefaultValues.renderFix)
    const [cardModal, setCardModal] = useState<boolean>(contextDefaultValues.cardModal)
    const [cartCount, setCartCount] = useState<number>(contextDefaultValues.cartCount);
    const [totalAmount, setTotalAmount] = useState<number>(contextDefaultValues.totalAmount)
    const [mobileNavModal, setMobileNavModal] = useState<boolean>(contextDefaultValues.mobileNavModal)

  return (
    <AppContext.Provider value={{ renderFix, setRenderFix, cardModal, setCardModal, cartCount, setCartCount, totalAmount, setTotalAmount, mobileNavModal, setMobileNavModal }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;