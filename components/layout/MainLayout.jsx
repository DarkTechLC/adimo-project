import Head from 'next/head';
import { Container } from '@mantine/core';

import { MainNavbar } from '../navbar/MainNavbar';
import { Footer } from '../Footer';
import { ContactDialog } from '../ContactDialog';

export function MainLayout({ title, children, size }) {
  return (
    <>
      <Head>
        <title>{`${title} - Grupo Cultural Adimó`}</title>
      </Head>

      <MainNavbar />

      <Container size={size}>{children}</Container>

      <ContactDialog />

      <Footer />
    </>
  );
}
