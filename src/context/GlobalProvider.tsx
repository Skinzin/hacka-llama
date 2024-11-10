'use client'

import { createContext, ReactNode, useContext, useState } from "react";
import axios from "axios";

// Configuração da API com axios
const api = axios.create({
  baseURL: 'https://api.example.com', // Substitua pela URL base correta
});

// Definição dos tipos
interface User {
  id: string;
  name: string;
  email: string;
  // Adicione outros campos do usuário conforme necessário
}

interface FinancialTransactionData {
  type: string;
  title: string;
  amount: number;
  category: string;
}

interface ActionPlanData {
  priorityList: Array<{ debtName: string; amount: number; dueDate: string }>;
  monthlyPaymentSuggestions: Array<{ debtName: string; suggestedAmount: number }>;
  estimatedPayoffTime: string;
  negotiationTips: string[];
  monthlyBudget: { essentialExpenses: number; variableExpenses: number; savings: number };
  alerts: string[];
  additionalTips: string[];
}

interface GlobalContextData {
  user: User | null;
  isLoading: boolean;
  fetchUserScore: () => Promise<void>;
  registerFinancialTransaction: (data: FinancialTransactionData) => Promise<void>;
  fetchUserPendencies: () => Promise<void>;
  fetchPendencySlips: (pendencyId: string) => Promise<void>;
  createActionPlan: (data: ActionPlanData) => Promise<void>;
  fetchActionPlan: () => Promise<void>;
  updateUserName: (newName: string) => Promise<void>;
  updateUserPhone: (newPhoneNumber: string) => Promise<void>;
  updateUserFixedIncome: (newFixedIncome: number) => Promise<void>;
}

interface GlobalProviderProps {
  children: ReactNode;
}

// Criação do contexto
export const GlobalContext = createContext({} as GlobalContextData);

// Hook personalizado para usar o contexto
export function useGlobalContext() {
  return useContext(GlobalContext);
}

// Provedor do contexto
export function GlobalProvider({ children }: GlobalProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUserScore = async () => {
    try {
      setIsLoading(true);
      const response = await api.get('/v1/user/score');
      console.log(response.data);
    } catch (error) {
      console.error('Erro ao buscar score do usuário:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const registerFinancialTransaction = async (data: FinancialTransactionData) => {
    try {
      setIsLoading(true);
      const response = await api.post('/v1/financial-registration', data);
      console.log(response.data);
    } catch (error) {
      console.error('Erro ao registrar transação financeira:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchUserPendencies = async () => {
    try {
      setIsLoading(true);
      const response = await api.get('/v1/user/pendency');
      console.log(response.data);
    } catch (error) {
      console.error('Erro ao buscar pendências do usuário:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchPendencySlips = async (pendencyId: string) => {
    try {
      setIsLoading(true);
      const response = await api.get(`/v1/user/pendency/${pendencyId}/slips`);
      console.log(response.data);
    } catch (error) {
      console.error('Erro ao buscar boletos da pendência:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const createActionPlan = async (data: ActionPlanData) => {
    try {
      setIsLoading(true);
      const response = await api.post('/v1/action-plan', data);
      console.log(response.data);
    } catch (error) {
      console.error('Erro ao criar plano de ação:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchActionPlan = async () => {
    try {
      setIsLoading(true);
      const response = await api.get('/v1/action-plan');
      console.log(response.data);
    } catch (error) {
      console.error('Erro ao buscar plano de ação:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateUserName = async (newName: string) => {
    try {
      setIsLoading(true);
      const response = await api.put('/v1/user/alter-name', { newName });
      console.log(response.data);
    } catch (error) {
      console.error('Erro ao atualizar nome do usuário:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateUserPhone = async (newPhoneNumber: string) => {
    try {
      setIsLoading(true);
      const response = await api.put('/v1/user/alter-phone', { newPhoneNumber });
      console.log(response.data);
    } catch (error) {
      console.error('Erro ao atualizar telefone do usuário:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateUserFixedIncome = async (newFixedIncome: number) => {
    try {
      setIsLoading(true);
      const response = await api.put('/v1/user/alter-fixed-income', { newFixedIncome });
      console.log(response.data);
    } catch (error) {
      console.error('Erro ao atualizar renda fixa do usuário:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const contextValue: GlobalContextData = {
    user,
    isLoading,
    fetchUserScore,
    registerFinancialTransaction,
    fetchUserPendencies,
    fetchPendencySlips,
    createActionPlan,
    fetchActionPlan,
    updateUserName,
    updateUserPhone,
    updateUserFixedIncome,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
}

export default function Component({ children }: { children: ReactNode }) {
  return (
    <GlobalProvider>
      {children}
    </GlobalProvider>
  );
}