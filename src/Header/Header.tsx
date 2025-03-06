import { useState } from 'react';
import { Burger, Container, Group, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import { YetiLogo } from '../YetiLogo/YetiLogo';

const links = [
  { link: '/about', label: 'About' },
  { link: '/projects', label: 'Projects' },
  { link: '/resume', label: 'Resume' },
  { link: '/blog', label: 'Blog' },
  { link: '/contact', label: 'Contact' },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
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