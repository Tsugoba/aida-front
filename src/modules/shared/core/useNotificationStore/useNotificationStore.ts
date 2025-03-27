import { create } from 'zustand';

import { Notification } from '../../types/notificacions';

interface NotificationStore {
  notificacions: Notification[];
  addNotification: (notificacion: Notification) => void;
}

export const useNotificationStore = create<NotificationStore>((set) => ({
  notificacions: [],
  addNotification: (request) =>
    set((state) => ({
      notificacions: [request, ...state.notificacions],
    })),
}));
