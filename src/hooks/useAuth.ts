/**
 * Hook personalizzato per la gestione dell'autenticazione
 * 
 * Questo hook gestisce:
 * - Stato di autenticazione (loggato/non loggato)
 * - Login con verifica del codice di accesso
 * - Logout
 * - Persistenza della sessione nel localStorage
 */

import { useState, useEffect, useCallback } from 'react';
import { verifyAccessCode, saveAuthState, getAuthState, clearAuthState } from '@/lib/auth';

export function useAuth() {
  // Stato di autenticazione
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  
  // Stato di caricamento (per il check iniziale)
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  // Stato per errori di login
  const [error, setError] = useState<string | null>(null);

  /**
   * Al mount del componente, verifica se l'utente era già autenticato
   * Questo permette di mantenere la sessione dopo un refresh della pagina
   */
  useEffect(() => {
    const checkAuth = () => {
      const wasAuthenticated = getAuthState();
      setIsAuthenticated(wasAuthenticated);
      setIsLoading(false);
    };
    
    checkAuth();
  }, []);

  /**
   * Funzione di login
   * Verifica il codice inserito confrontando gli hash
   */
  const login = useCallback(async (code: string): Promise<boolean> => {
    setError(null);
    
    // Verifica se il codice è vuoto
    if (!code.trim()) {
      setError('Inserisci il codice di accesso');
      return false;
    }
    
    try {
      // Verifica il codice usando l'hash
      const isValid = await verifyAccessCode(code);
      
      if (isValid) {
        setIsAuthenticated(true);
        saveAuthState(true);
        return true;
      } else {
        setError('Codice di accesso non valido');
        return false;
      }
    } catch (err) {
      setError('Errore durante la verifica del codice');
      console.error('Errore login:', err);
      return false;
    }
  }, []);

  /**
   * Funzione di logout
   * Rimuove lo stato di autenticazione e torna alla schermata di login
   */
  const logout = useCallback(() => {
    setIsAuthenticated(false);
    clearAuthState();
    setError(null);
  }, []);

  /**
   * Pulisce gli errori
   */
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    isAuthenticated,
    isLoading,
    error,
    login,
    logout,
    clearError
  };
}
