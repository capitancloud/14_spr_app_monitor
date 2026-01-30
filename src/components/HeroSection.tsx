/**
 * Sezione Hero - Introduzione al Logging
 * 
 * Versione semplificata per principianti assoluti.
 * Spiega subito il valore del logging con linguaggio accessibile.
 */

import { motion } from 'framer-motion';
import { Terminal, HelpCircle, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{ background: 'var(--gradient-glow)' }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Per chi parte da zero 🚀
            </span>
          </motion.div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">App Monitor</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-8">
            Impara il Logging & Debugging
          </h2>

          {/* Simple Explanation */}
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Hai mai pensato: <span className="text-foreground italic">"Perché il mio programma non funziona?"</span>
            </p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              I <span className="text-primary font-bold">log</span> sono messaggi che il tuo programma 
              scrive per <span className="text-log-success font-semibold">dirti cosa sta facendo</span>. 
              Sono come le <span className="text-log-warning font-semibold">briciole di pane</span> che 
              ti aiutano a capire cosa è andato storto.
            </p>
          </div>

          {/* What You'll Learn */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="section-card max-w-xl mx-auto text-left"
          >
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-primary" />
              Cosa imparerai in questa app:
            </h3>
            <ul className="space-y-3">
              {[
                'Cos\'è un log e perché ti serve',
                'I diversi tipi di messaggi (info, errori, avvisi)',
                'Come i log ti aiutano a trovare i problemi',
                'Cosa cambia tra sviluppo e produzione'
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-muted-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Terminal Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="max-w-2xl mx-auto"
        >
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="flex gap-1.5">
                <div className="terminal-dot bg-log-error" />
                <div className="terminal-dot bg-log-warning" />
                <div className="terminal-dot bg-log-success" />
              </div>
              <span className="ml-4 text-sm text-muted-foreground font-mono flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                esempio-log.txt
              </span>
            </div>
            <div className="p-4 font-mono text-sm space-y-2">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="text-muted-foreground"
              >
                <span className="text-log-info">[INFO]</span> App avviata correttamente
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="text-muted-foreground"
              >
                <span className="text-log-info">[INFO]</span> Utente "Mario" ha effettuato il login
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.9 }}
                className="text-muted-foreground"
              >
                <span className="text-log-warning">[WARNING]</span> La sessione scadrà tra 5 minuti
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
                className="text-muted-foreground"
              >
                <span className="text-log-error">[ERROR]</span> Impossibile salvare il file: disco pieno
              </motion.div>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            ☝️ Ecco come appaiono i log: messaggi con data, tipo e descrizione
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="mt-16"
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm">Scorri per imparare</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
