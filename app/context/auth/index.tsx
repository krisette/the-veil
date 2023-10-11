import React, { createContext, useContext, ReactNode, useState } from 'react';
import { CombinedUser } from '../../types';

interface AuthContextProps {
  user: CombinedUser | null;
  setUser: React.Dispatch<React.SetStateAction<CombinedUser | null>>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<CombinedUser | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
