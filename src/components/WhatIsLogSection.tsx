/**
 * Sezione "Cos'è un Log?" per principianti assoluti
 * 
 * Usa analogie della vita quotidiana per spiegare
 * il concetto di logging a chi non ha mai programmato.
 */

import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Camera, 
  Receipt, 
  Stethoscope,
  MessageCircle,
  ArrowRight
} from 'lucide-react';

const analogies = [
  {
    icon: BookOpen,
    title: 'Come un Diario',
    description: 'Immagina di scrivere un diario ogni sera: "Oggi ho fatto colazione alle 8, sono andato al lavoro, ho incontrato Marco...". I log sono il diario della tua applicazione.',
    example: '"Ore 10:30 - Utente ha cliccato su Acquista"'
  },
  {
    icon: Camera,
    title: 'Come le Telecamere di Sicurezza',
    description: 'Le telecamere registrano tutto ciò che succede in un negozio. Se qualcosa va storto, puoi rivedere la registrazione. I log fanno lo stesso per il software.',
    example: '"Se c\'è un furto, guardo le registrazioni"'
  },
  {
    icon: Receipt,
    title: 'Come gli Scontrini',
    description: 'Ogni acquisto genera uno scontrino con data, ora, prodotti e totale. I log sono gli "scontrini" di ogni azione nel programma.',
    example: '"Scontrino n.42 - Ore 15:22 - Totale: €25.50"'
  },
  {
    icon: Stethoscope,
    title: 'Come la Cartella Clinica',
    description: 'Il medico annota ogni visita, sintomo e cura. Se stai male, può capire cosa è successo guardando la storia. I log raccontano la "storia clinica" dell\'app.',
    example: '"Paziente stabile, pressione normale"'
  }
];

export function WhatIsLogSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-card/50 to-transparent">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Big Question */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Partiamo dalle basi
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ma cos'è un <span className="text-gradient">Log</span>?
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Un <strong className="text-foreground">log</strong> è semplicemente un <strong className="text-foreground">messaggio</strong> che 
            il programma scrive per dire: <em>"Ehi, è successo questo!"</em>
          </p>
        </motion.div>

        {/* Simple Definition Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="section-card border-2 border-primary/30 text-center">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-bold mb-4">Definizione Semplice</h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Un <span className="text-primary font-semibold">log</span> è un messaggio 
              che il computer scrive automaticamente per <span className="text-log-success font-semibold">ricordare</span> cosa 
              sta succedendo nel programma.
            </p>
            <div className="mt-6 p-4 bg-secondary/50 rounded-xl font-mono text-sm">
              <span className="text-muted-foreground">[10:30:45]</span>{' '}
              <span className="text-log-info">INFO:</span>{' '}
              <span>L'utente Mario ha effettuato il login</span>
            </div>
          </div>
        </motion.div>

        {/* Analogies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-2">Pensa ai log come...</h3>
          <p className="text-muted-foreground">Ecco alcune analogie dalla vita quotidiana</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {analogies.map((analogy, index) => (
            <motion.div
              key={analogy.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="section-card group hover:border-primary/30 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <analogy.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">{analogy.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {analogy.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs">
                    <ArrowRight className="w-3 h-3 text-primary" />
                    <span className="font-mono text-primary/80 italic">
                      {analogy.example}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <div className="p-6 rounded-xl bg-log-success/10 border border-log-success/30 text-center">
            <div className="text-3xl mb-3">💡</div>
            <p className="text-lg">
              <strong className="text-log-success">Punto chiave:</strong> Senza i log, 
              quando qualcosa si rompe, non hai idea di cosa sia successo. 
              È come cercare di risolvere un giallo <em>senza indizi</em>!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
