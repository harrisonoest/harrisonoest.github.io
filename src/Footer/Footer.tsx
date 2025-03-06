import { IconBrandGithub, IconCopyright } from '@tabler/icons-react';
import { ActionIcon, Container, Group, Text } from '@mantine/core';
import classes from './Footer.module.css';

export function Footer() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group justify="center" align="center" gap={10}>
          <IconCopyright size={12}/>
          <Text size="xs">
            {new Date().getFullYear()} Harrison Oest. All rights reserved.
          </Text>
        </Group>
        <Group justify="center" align="center" gap={10}>
          <ActionIcon size="lg" color="gray" variant="subtle" onClick={() => window.open('https://github.com/harrisonoest', '_blank')}>
            <IconBrandGithub size={18} stroke={1.5}/>
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}