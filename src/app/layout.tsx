import { NotificationProvider } from '@/modules/shared/providers/NotificationProvider/NotificationProvider';
import { ToastProvider } from '@/modules/shared/providers/ToastProvider/ToastProvider';

import './globals.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <ToastProvider>
          <NotificationProvider>{children}</NotificationProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
