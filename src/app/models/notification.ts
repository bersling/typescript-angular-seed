export interface AppNotification extends NotifyOptions {
  type?: NotificationType;
  message?: string;
  transition?: string; // css
  opacity?: string; // css
}

export interface NotifyOptions {
  color?: string; // css color property
  background?: string; // css background property
  timer?: number; // in milliseconds
  position?: NotificationPosition;
}

export type NotificationType = 'success' | 'error';
interface NotificationPosition {
  bottom?: number;
  right?: number;
  top?: number;
  left?: number;
}
