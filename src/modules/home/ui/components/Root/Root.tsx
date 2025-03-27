'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function Root() {
  const router = useRouter();

  useEffect(() => {
    const switchProjectsOrHome = async () => {
      router.push('/home');
    };
    switchProjectsOrHome();
  }, [router]);

  return <div data-testid='root'></div>;
}
