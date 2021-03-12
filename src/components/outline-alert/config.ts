export enum AlertWeights {
  BACKGROUND = 100,
  HEADING = 700,
  TEXT = 600,
}

export type AllowedAlertTypes = 'info' | 'success' | 'warning' | 'error';

export type AlertClassTypes = {
  background: string;
  text: string;
};
