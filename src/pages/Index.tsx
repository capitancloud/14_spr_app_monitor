/**
 * App Monitor – Logging & Debugging
 * 
 * Applicazione didattica per imparare i concetti di logging.
 * Progettata per principianti assoluti nella programmazione.
 * 
 * Sezioni (in ordine didattico):
 * 1. Hero - Introduzione e motivazione
 * 2. WhatIsLog - Cos'è un log con analogie
 * 3. LogTypes - I diversi tipi di log
 * 4. FlowDiagram - Il percorso dei log
 * 5. LogGenerator - Prova pratica
 * 6. LogDashboard - Visualizza i risultati
 * 7. LogImportance - Perché sono fondamentali
 * 8. StructuredLogs - Formato e struttura
 * 9. DevVsProd - Differenze tra ambienti
 */

import { HeroSection } from '@/components/HeroSection';
import { WhatIsLogSection } from '@/components/WhatIsLogSection';
import { LogTypesSection } from '@/components/LogTypesSection';
import { FlowDiagram } from '@/components/FlowDiagram';
import { LogGenerator } from '@/components/LogGenerator';
import { LogDashboard } from '@/components/LogDashboard';
import { LogImportanceSection } from '@/components/LogImportanceSection';
import { StructuredLogsSection } from '@/components/StructuredLogsSection';
import { DevVsProdSection } from '@/components/DevVsProdSection';
import { LoginScreen } from '@/components/LoginScreen';
import { LogoutButton } from '@/components/LogoutButton';
import { useLogStore } from '@/hooks/useLogStore';
import { useAuth } from '@/hooks/useAuth';
import { BookOpen } from 'lucide-react';

const Index = () => {
  // Hook per l'autenticazione
  const { isAuthenticated, isLoading, error, login, logout, clearError } = useAuth();

  // Hook personalizzato che gestisce lo store dei log
  const {
    logs,
    filteredLogs,
    filter,
    stats,
    lastAddedId,
    logEvent,
    clearLogs,
    updateFilter,
    toggleLevel
  } = useLogStore();

  // Mostra uno spinner durante il caricamento iniziale
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Se non autenticato, mostra la schermata di login
  if (!isAuthenticated) {
    return <LoginScreen onLogin={login} error={error} onClearError={clearError} />;
  }

  // Contenuto principale (solo se autenticato)
  return (
    <div className="min-h-screen bg-background">
      {/* Pulsante di logout */}
      <LogoutButton onLogout={logout} />

      {/* 1. Hero - Introduzione motivazionale */}
      <HeroSection />
      
      {/* 2. Cos'è un Log - Spiegazione base con analogie */}
      <WhatIsLogSection />
      
      {/* 3. Tipi di Log - INFO, WARNING, ERROR, DEBUG */}
      <LogTypesSection />
      
      {/* 4. Il Viaggio del Log - Diagramma animato */}
      <FlowDiagram />
      
      {/* Sezione pratica - Generatore + Dashboard */}
      <div className="bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        {/* 5. Generatore di Eventi - Prova pratica */}
        <LogGenerator onGenerateLog={logEvent} />
        
        {/* 6. Dashboard dei Log - Visualizza i risultati */}
        <LogDashboard
          logs={logs}
          filteredLogs={filteredLogs}
          stats={stats}
          filter={filter}
          lastAddedId={lastAddedId}
          onToggleLevel={toggleLevel}
          onSearch={(query) => updateFilter({ searchQuery: query })}
          onClear={clearLogs}
        />
      </div>
      
      {/* 7. Importanza del Logging - Con vs Senza log */}
      <LogImportanceSection />
      
      {/* 8. Log Strutturati - JSON vs Testo */}
      <StructuredLogsSection />
      
      {/* 9. Sviluppo vs Produzione - Differenze fondamentali */}
      <DevVsProdSection />
      
      {/* Footer */}
      <footer className="py-16 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <BookOpen className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              Strumento Didattico
            </span>
          </div>
          
          <h3 className="text-xl font-bold mb-2">
            App Monitor
          </h3>
          <p className="text-muted-foreground mb-4">
            Impara il logging e debugging partendo da zero
          </p>
          
          <div className="max-w-md mx-auto p-4 rounded-xl bg-card border border-border">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Ricorda:</strong> In questa app tutto è simulato. 
              I log restano solo nella memoria del browser. 
              In un'app reale, verrebbero salvati su un server.
            </p>
          </div>
          
          <p className="text-xs text-muted-foreground mt-8">
            Creato con ❤️ per chi vuole imparare a programmare
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
