'use client';

import { ToastProvider } from '@/modules/shared/providers/ToastProvider/ToastProvider';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  return <ToastProvider>{children}</ToastProvider>;
}
