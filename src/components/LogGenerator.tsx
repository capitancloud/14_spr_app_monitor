/**
 * Generatore di Eventi e Log
 * 
 * Versione semplificata con spiegazioni chiare
 * per ogni tipo di evento simulato.
 */

import { motion, AnimatePresence } from 'framer-motion';
import { 
  MousePointer, 
  Globe, 
  Wifi, 
  LogIn, 
  XCircle, 
  FileCheck, 
  AlertTriangle, 
  Bug,
  Zap,
  Sparkles
} from 'lucide-react';
import { SimulatedEvent, EVENT_DESCRIPTIONS } from '@/types/log';
import { useState } from 'react';

interface LogGeneratorProps {
  onGenerateLog: (event: SimulatedEvent) => void;
}

const eventButtons: { 
  event: SimulatedEvent; 
  icon: typeof MousePointer; 
  label: string;
  explanation: string;
}[] = [
  { 
    event: 'user_click', 
    icon: MousePointer, 
    label: 'Click Utente',
    explanation: 'Simula quando un utente clicca un pulsante'
  },
  { 
    event: 'page_load', 
    icon: Globe, 
    label: 'Carica Pagina',
    explanation: 'Simula quando si apre una nuova pagina'
  },
  { 
    event: 'api_call', 
    icon: Wifi, 
    label: 'Chiamata Server',
    explanation: 'Simula quando l\'app chiede dati al server'
  },
  { 
    event: 'auth_success', 
    icon: LogIn, 
    label: 'Login OK',
    explanation: 'Simula un login andato a buon fine'
  },
  { 
    event: 'auth_failure', 
    icon: XCircle, 
    label: 'Login Fallito',
    explanation: 'Simula password o email sbagliata'
  },
  { 
    event: 'form_submit', 
    icon: FileCheck, 
    label: 'Invia Form',
    explanation: 'Simula l\'invio di un modulo'
  },
  { 
    event: 'system_warning', 
    icon: AlertTriangle, 
    label: 'Avviso Sistema',
    explanation: 'Simula un problema non grave'
  },
  { 
    event: 'critical_error', 
    icon: Zap, 
    label: 'Errore Grave',
    explanation: 'Simula qualcosa che si è rotto!'
  },
  { 
    event: 'debug_trace', 
    icon: Bug, 
    label: 'Debug',
    explanation: 'Simula info tecniche dettagliate'
  },
];

const levelStyles: Record<string, string> = {
  info: 'btn-log-info',
  warning: 'btn-log-warning',
  error: 'btn-log-error',
  debug: 'btn-log-debug',
  success: 'btn-log-info'
};

const levelEmoji: Record<string, string> = {
  info: '📘',
  warning: '⚠️',
  error: '🔴',
  debug: '🔍',
  success: '✅'
};

export function LogGenerator({ onGenerateLog }: LogGeneratorProps) {
  const [lastClicked, setLastClicked] = useState<SimulatedEvent | null>(null);
  const [pulseEffect, setPulseEffect] = useState(false);

  const handleClick = (event: SimulatedEvent) => {
    setLastClicked(event);
    setPulseEffect(true);
    onGenerateLog(event);
    
    setTimeout(() => setPulseEffect(false), 500);
    setTimeout(() => setLastClicked(null), 3000);
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-log-success/10 border border-log-success/30 mb-6">
            <Sparkles className="w-4 h-4 text-log-success" />
            <span className="text-sm font-medium text-log-success">
              Prova tu stesso!
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Genera dei Log
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Clicca sui pulsanti per <strong className="text-foreground">simulare eventi</strong> che 
            potrebbero accadere in un'app reale. Guarda i log apparire nella dashboard sotto!
          </p>
        </motion.div>

        {/* Explanation for beginners */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-8 p-4 rounded-xl bg-secondary/50 border border-border"
        >
          <p className="text-sm text-center text-muted-foreground">
            💡 <strong className="text-foreground">Come funziona:</strong> In un'app vera, 
            questi eventi avvengono automaticamente quando gli utenti usano l'app. 
            Qui puoi simularli cliccando i pulsanti.
          </p>
        </motion.div>

        {/* Event description panel */}
        <AnimatePresence mode="wait">
          {lastClicked && (
            <motion.div
              key={lastClicked}
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="mb-8 p-6 rounded-xl border-2 border-primary/50 bg-primary/10 max-w-2xl mx-auto"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">
                  {levelEmoji[EVENT_DESCRIPTIONS[lastClicked].level]}
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1 flex items-center gap-2">
                    ✨ Log Creato!
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    {EVENT_DESCRIPTIONS[lastClicked].description}
                  </p>
                  <div className="font-mono text-sm bg-card p-3 rounded border border-border">
                    <span className="text-muted-foreground">[{new Date().toLocaleTimeString()}]</span>{' '}
                    <span 
                      className="font-bold"
                      style={{ color: `hsl(var(--log-${EVENT_DESCRIPTIONS[lastClicked].level}))` }}
                    >
                      [{EVENT_DESCRIPTIONS[lastClicked].level.toUpperCase()}]
                    </span>{' '}
                    {EVENT_DESCRIPTIONS[lastClicked].message}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    👇 Guarda nella dashboard qui sotto: il log è stato aggiunto!
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Event Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {eventButtons.map((btn, index) => {
            const eventConfig = EVENT_DESCRIPTIONS[btn.event];
            
            return (
              <motion.button
                key={btn.event}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleClick(btn.event)}
                className={`
                  relative p-4 rounded-xl font-medium text-left
                  ${levelStyles[eventConfig.level]}
                  ${lastClicked === btn.event && pulseEffect ? 'animate-pulse' : ''}
                `}
              >
                <div className="flex items-center gap-3 mb-2">
                  <btn.icon className="w-5 h-5" />
                  <span className="font-semibold">{btn.label}</span>
                  <span className={`
                    ml-auto px-2 py-0.5 text-xs rounded-full font-mono uppercase
                    badge-${eventConfig.level}
                  `}>
                    {eventConfig.level}
                  </span>
                </div>
                <p className="text-xs opacity-80">{btn.explanation}</p>
              </motion.button>
            );
          })}
        </div>

        {/* Visual pulse effect on log generation */}
        <AnimatePresence>
          {pulseEffect && (
            <motion.div
              initial={{ scale: 0.8, opacity: 1 }}
              animate={{ scale: 2, opacity: 0 }}
              exit={{ opacity: 0 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-primary pointer-events-none z-50"
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
