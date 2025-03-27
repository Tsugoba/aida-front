import { NotificationProvider } from '@/modules/shared/providers/NotificationProvider/NotificationProvider';

import './globals.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body style={{ margin: 0 }}>
        <NotificationProvider>{children}</NotificationProvider>
      </body>
    </html>
  );
}
