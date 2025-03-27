import { Metadata } from 'next';

import { Root } from '../../modules/home/ui/components/Root/Root';

export const metadata: Metadata = {
  title: 'Ada | Home',
  description: 'Ada Home Page',
};

export default function RootPage() {
  return <Root />;
}
