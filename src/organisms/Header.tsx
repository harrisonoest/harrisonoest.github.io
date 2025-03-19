// === React ===
import { useState } from 'react';

// === Mantine ===
import { Burger, Container, Group, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NavLink, useLocation } from 'react-router-dom';

// === Components ===
import { YetiLogo } from '../molecules/YetiLogo';

// === Styles ===
import classes from './Header.module.css';

const links = [
  { link: '/about', label: 'About' },
  { link: '/blog', label: 'Blog' },
  { link: '/projects', label: 'Projects' },
  { link: '/resume', label: 'Resume' },
  { link: '/contact', label: 'Contact' },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  const items = links.map((link) => (
    <NavLink
      key={link.label}
      to={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => setActive(link.link)}
    >
      {link.label}
    </NavLink>
  ));

  return (
    <Container size="md" className={classes.inner}>
      <Group gap={10} visibleFrom="xs">
        <YetiLogo size={40} borderRadius="4px" />
        <Title className={classes.title} order={2}>Harrison Oest</Title>
      </Group>
      <Group gap={5} visibleFrom="xs">
        {items}
      </Group>
      <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
    </Container>
  );
}