/**
 * Pulsante di Logout
 * 
 * Componente semplice che permette all'utente di uscire
 * dall'applicazione e tornare alla schermata di login.
 */

import { LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface LogoutButtonProps {
  onLogout: () => void;
}

export function LogoutButton({ onLogout }: LogoutButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          onClick={onLogout}
          className="fixed top-4 right-4 z-50 bg-background/80 backdrop-blur-sm border-border hover:bg-destructive/10 hover:text-destructive hover:border-destructive/50 transition-colors"
          aria-label="Esci dall'applicazione"
        >
          <LogOut className="w-4 h-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent side="left">
        <p>Esci dall'applicazione</p>
      </TooltipContent>
    </Tooltip>
  );
}
