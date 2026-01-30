/**
 * Sezione sui Tipi di Log
 * 
 * Spiega in modo semplice i diversi livelli di log:
 * - INFO: tutto ok
 * - WARNING: attenzione
 * - ERROR: problema serio
 * - DEBUG: dettagli tecnici
 */

import { motion } from 'framer-motion';
import { 
  Info, 
  AlertTriangle, 
  XCircle, 
  Bug,
  CheckCircle,
  Volume2
} from 'lucide-react';

const logTypes = [
  {
    level: 'info',
    icon: Info,
    title: 'INFO',
    emoji: '📘',
    color: 'log-info',
    subtitle: 'Informazioni normali',
    description: 'Dice cosa sta succedendo. Tutto procede regolarmente.',
    realLife: 'Come quando dici: "Sono arrivato a lavoro"',
    examples: [
      'Utente ha effettuato il login',
      'Pagina caricata con successo',
      'Email inviata a mario@email.com'
    ]
  },
  {
    level: 'success',
    icon: CheckCircle,
    title: 'SUCCESS',
    emoji: '✅',
    color: 'log-success',
    subtitle: 'Operazione completata',
    description: 'Conferma che un\'azione importante è andata a buon fine.',
    realLife: 'Come quando dici: "Pagamento ricevuto, grazie!"',
    examples: [
      'Ordine completato con successo',
      'Password cambiata correttamente',
      'File caricato: documento.pdf'
    ]
  },
  {
    level: 'warning',
    icon: AlertTriangle,
    title: 'WARNING',
    emoji: '⚠️',
    color: 'log-warning',
    subtitle: 'Attenzione!',
    description: 'Qualcosa di strano sta succedendo. Non è ancora rotto, ma potrebbe diventarlo.',
    realLife: 'Come la spia della benzina: non sei fermo, ma devi fare rifornimento presto',
    examples: [
      'La memoria sta finendo (85% usata)',
      'Questa funzione sarà rimossa nella prossima versione',
      'Risposta lenta dal server (3 secondi)'
    ]
  },
  {
    level: 'error',
    icon: XCircle,
    title: 'ERROR',
    emoji: '🔴',
    color: 'log-error',
    subtitle: 'Qualcosa si è rotto!',
    description: 'C\'è un problema serio. Qualcosa non ha funzionato e bisogna intervenire.',
    realLife: 'Come quando l\'auto non parte: devi chiamare il meccanico',
    examples: [
      'Impossibile connettersi al database',
      'Pagamento rifiutato: carta scaduta',
      'File non trovato: config.json'
    ]
  },
  {
    level: 'debug',
    icon: Bug,
    title: 'DEBUG',
    emoji: '🔍',
    color: 'log-debug',
    subtitle: 'Dettagli per sviluppatori',
    description: 'Informazioni tecniche molto dettagliate. Utili solo quando stai cercando un problema specifico.',
    realLife: 'Come le note del meccanico: "Controllato olio, filtro, candele..."',
    examples: [
      'Funzione calcolaTotale() chiamata con [10, 20, 30]',
      'Variabile userId = 42',
      'Query SQL eseguita in 0.003 secondi'
    ]
  }
];

export function LogTypesSection() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <Volume2 className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">
              Non tutti i log sono uguali
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            I 5 Tipi di Log
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I log hanno diversi <strong className="text-foreground">livelli di importanza</strong>. 
            Pensa a loro come a diversi "toni di voce" del programma.
          </p>
        </motion.div>

        {/* Visual Scale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <span className="text-sm text-muted-foreground">Gravità:</span>
            <div className="flex items-center gap-1">
              <span className="px-3 py-1 rounded-full text-xs font-medium badge-debug">DEBUG</span>
              <span className="text-muted-foreground">→</span>
              <span className="px-3 py-1 rounded-full text-xs font-medium badge-info">INFO</span>
              <span className="text-muted-foreground">→</span>
              <span className="px-3 py-1 rounded-full text-xs font-medium badge-success">SUCCESS</span>
              <span className="text-muted-foreground">→</span>
              <span className="px-3 py-1 rounded-full text-xs font-medium badge-warning">WARNING</span>
              <span className="text-muted-foreground">→</span>
              <span className="px-3 py-1 rounded-full text-xs font-medium badge-error">ERROR</span>
            </div>
          </div>
        </motion.div>

        {/* Log Type Cards */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {logTypes.map((type, index) => (
            <motion.div
              key={type.level}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`section-card border-l-4`}
              style={{ borderLeftColor: `hsl(var(--${type.color}))` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Header */}
                <div className="flex items-center gap-4 md:w-48 shrink-0">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl"
                    style={{ backgroundColor: `hsl(var(--${type.color}) / 0.15)` }}
                  >
                    {type.emoji}
                  </div>
                  <div>
                    <h3 
                      className="font-bold text-lg"
                      style={{ color: `hsl(var(--${type.color}))` }}
                    >
                      {type.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">{type.subtitle}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="text-foreground mb-3">{type.description}</p>
                  
                  <div className="p-3 rounded-lg bg-secondary/50 mb-4">
                    <p className="text-sm italic text-muted-foreground">
                      🌍 <strong>Nella vita reale:</strong> {type.realLife}
                    </p>
                  </div>

                  {/* Examples */}
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Esempi:
                    </p>
                    {type.examples.map((example, i) => (
                      <div 
                        key={i}
                        className="font-mono text-sm px-3 py-2 rounded bg-card border border-border"
                      >
                        <span 
                          className="font-semibold"
                          style={{ color: `hsl(var(--${type.color}))` }}
                        >
                          [{type.title}]
                        </span>{' '}
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-2xl mx-auto text-center"
        >
          <div className="p-6 rounded-xl border border-border bg-card">
            <h4 className="font-semibold mb-3">🎯 Ricorda</h4>
            <p className="text-muted-foreground">
              <strong className="text-log-error">ERROR</strong> = devi agire subito |{' '}
              <strong className="text-log-warning">WARNING</strong> = tieni d'occhio |{' '}
              <strong className="text-log-info">INFO</strong> = tutto normale |{' '}
              <strong className="text-log-debug">DEBUG</strong> = per i tecnici
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
