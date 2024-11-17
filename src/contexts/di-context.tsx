// di-context.tsx
import React, { createContext, useContext } from 'react';
import container from "@/di/container";

const DIContext = createContext(container);

export const DIProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <DIContext.Provider value={container}>{children}</DIContext.Provider>;
};

export const useDI = () => {
    const context = useContext(DIContext);
    if (!context) {
        throw new Error('useDI must be used within a DIProvider');
    }
    return context;
};
