/**
 * Diagramma del Flusso dei Log
 * 
 * Versione semplificata che spiega passo-passo
 * il percorso di un log con linguaggio accessibile.
 */

import { motion } from 'framer-motion';
import { Code, FileText, Database, BarChart3, ArrowDown, Play } from 'lucide-react';
import { useState } from 'react';

const flowSteps = [
  {
    id: 'app',
    icon: Code,
    title: '1. Succede Qualcosa',
    subtitle: 'Nell\'applicazione',
    description: 'Un utente clicca un pulsante, si verifica un errore, o il sistema fa qualcosa di importante.',
    example: '👆 L\'utente clicca "Acquista"',
    color: 'var(--log-info)'
  },
  {
    id: 'logger',
    icon: FileText,
    title: '2. Il Logger Scrive',
    subtitle: 'Crea il messaggio',
    description: 'Il programma crea un messaggio con: cosa è successo, quando, e quanto è importante.',
    example: '✍️ "[10:30] INFO: Acquisto avviato"',
    color: 'var(--log-warning)'
  },
  {
    id: 'storage',
    icon: Database,
    title: '3. Viene Salvato',
    subtitle: 'In un posto sicuro',
    description: 'Il messaggio viene salvato da qualche parte: un file, un database, o un servizio online.',
    example: '💾 Salvato in logs/app.log',
    color: 'var(--log-success)'
  },
  {
    id: 'dashboard',
    icon: BarChart3,
    title: '4. Lo Analizzi',
    subtitle: 'Quando ti serve',
    description: 'Puoi cercare, filtrare e leggere i log per capire cosa è successo.',
    example: '🔍 "Mostrami tutti gli errori di oggi"',
    color: 'var(--log-error)'
  }
];

export function FlowDiagram() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const runAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    let index = 0;
    
    const interval = setInterval(() => {
      if (index < flowSteps.length) {
        setActiveStep(index);
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setActiveStep(null);
          setIsAnimating(false);
        }, 1500);
      }
    }, 1200);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent via-card/30 to-transparent">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Il Viaggio di un Log
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Quando il programma scrive un log, ecco cosa succede. 
            <strong className="text-foreground"> Sono solo 4 passaggi!</strong>
          </p>
        </motion.div>

        {/* Animate Button */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <button
            onClick={runAnimation}
            disabled={isAnimating}
            className={`
              inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300
              ${isAnimating 
                ? 'bg-secondary text-muted-foreground cursor-not-allowed' 
                : 'bg-primary text-primary-foreground hover:opacity-90 glow-primary'
              }
            `}
          >
            <Play className={`w-5 h-5 ${isAnimating ? '' : 'animate-pulse'}`} />
            {isAnimating ? 'Guarda il flusso...' : 'Avvia l\'animazione'}
          </button>
        </motion.div>

        {/* Flow Steps - Vertical on all screens for clarity */}
        <div className="max-w-2xl mx-auto space-y-4">
          {flowSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Arrow between steps */}
              {index > 0 && (
                <div className="flex justify-center py-2">
                  <motion.div
                    animate={activeStep === index ? {
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 1, 0.5]
                    } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <ArrowDown 
                      className="w-6 h-6"
                      style={{ 
                        color: activeStep !== null && activeStep >= index 
                          ? `hsl(${flowSteps[index - 1].color})` 
                          : 'hsl(var(--muted-foreground))'
                      }}
                    />
                  </motion.div>
                </div>
              )}

              <motion.div
                className={`
                  section-card border-2 transition-all duration-500
                  ${activeStep === index ? 'scale-[1.02]' : ''}
                `}
                style={{
                  borderColor: activeStep === index 
                    ? `hsl(${step.color})` 
                    : 'hsl(var(--border))',
                  boxShadow: activeStep === index 
                    ? `0 0 30px hsl(${step.color} / 0.3)` 
                    : 'none'
                }}
                animate={activeStep === index ? {
                  y: [0, -5, 0]
                } : {}}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                    style={{ 
                      backgroundColor: activeStep === index 
                        ? `hsl(${step.color} / 0.2)` 
                        : 'hsl(var(--secondary))'
                    }}
                  >
                    <step.icon 
                      className="w-7 h-7 transition-colors"
                      style={{ 
                        color: activeStep === index 
                          ? `hsl(${step.color})` 
                          : 'hsl(var(--muted-foreground))'
                      }}
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-lg">{step.title}</h3>
                      <span className="text-xs text-muted-foreground">
                        ({step.subtitle})
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-3">{step.description}</p>
                    <div 
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-mono"
                      style={{ 
                        backgroundColor: `hsl(${step.color} / 0.1)`,
                        color: `hsl(${step.color})`
                      }}
                    >
                      {step.example}
                    </div>
                  </div>
                </div>
              </motion.div>
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
          <div className="p-6 rounded-xl border border-primary/30 bg-primary/5">
            <p className="text-lg">
              <strong className="text-primary">In sintesi:</strong> Il log nasce quando succede qualcosa, 
              viene scritto con tutti i dettagli, salvato, e poi puoi leggerlo quando ti serve. 
              <span className="text-muted-foreground"> Semplice, no? 😊</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
