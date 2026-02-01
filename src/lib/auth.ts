/**
 * Utilità per l'autenticazione con codice di accesso
 * 
 * SICUREZZA: Il codice di accesso viene verificato tramite hash SHA-256.
 * Questo è un pattern comune in sicurezza:
 * - Non salvare mai password/codici in chiaro
 * - Usare funzioni di hash unidirezionali
 * - Confrontare solo gli hash
 */

// Il codice di accesso (in un'app reale, l'hash sarebbe pre-calcolato e il codice mai presente nel codice)
// Per questa demo didattica, calcoliamo l'hash a runtime
const ACCESS_CODE = "gT6@Qp!R1Z$uN9e#X^cD2sL%hY&vJm*W+K7B~A=F4q-Uo_rP)k8S]3C0{I?E";

// Cache per l'hash del codice corretto (calcolato una sola volta)
let cachedCorrectHash: string | null = null;

/**
 * Calcola l'hash SHA-256 di una stringa
 * 
 * SHA-256 è una funzione di hash crittografica che:
 * - Produce sempre un output di 256 bit (64 caratteri esadecimali)
 * - È unidirezionale: non si può risalire all'input dall'output
 * - Anche una piccola modifica all'input cambia completamente l'output
 */
export async function hashCode(code: string): Promise<string> {
  // Converti la stringa in un array di byte (UTF-8)
  const encoder = new TextEncoder();
  const data = encoder.encode(code);
  
  // Calcola l'hash SHA-256 usando l'API Web Crypto
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  
  // Converti il buffer in una stringa esadecimale
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  
  return hashHex;
}

/**
 * Ottiene l'hash del codice corretto (calcolato e cachato)
 */
async function getCorrectHash(): Promise<string> {
  if (!cachedCorrectHash) {
    cachedCorrectHash = await hashCode(ACCESS_CODE);
  }
  return cachedCorrectHash;
}

/**
 * Verifica se il codice inserito è corretto
 * Confronta l'hash del codice inserito con l'hash del codice corretto
 */
export async function verifyAccessCode(inputCode: string): Promise<boolean> {
  const inputHash = await hashCode(inputCode);
  const correctHash = await getCorrectHash();
  return inputHash === correctHash;
}

// Chiave per il localStorage
const AUTH_STORAGE_KEY = 'app_monitor_authenticated';

/**
 * Salva lo stato di autenticazione nel localStorage
 * In un'app reale, si userebbe un token JWT o una sessione server-side
 */
export function saveAuthState(isAuthenticated: boolean): void {
  if (isAuthenticated) {
    // Salviamo un timestamp per poter implementare scadenza sessione in futuro
    localStorage.setItem(AUTH_STORAGE_KEY, Date.now().toString());
  } else {
    localStorage.removeItem(AUTH_STORAGE_KEY);
  }
}

/**
 * Recupera lo stato di autenticazione dal localStorage
 */
export function getAuthState(): boolean {
  const stored = localStorage.getItem(AUTH_STORAGE_KEY);
  return stored !== null;
}

/**
 * Effettua il logout rimuovendo lo stato di autenticazione
 */
export function clearAuthState(): void {
  localStorage.removeItem(AUTH_STORAGE_KEY);
}
