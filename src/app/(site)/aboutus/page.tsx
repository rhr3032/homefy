import AboutUs from '@/components/Home/AboutUs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Homefy',
};

export default function Page() {
  return (
    <main>
      <AboutUs />
    </main>
  );
}
