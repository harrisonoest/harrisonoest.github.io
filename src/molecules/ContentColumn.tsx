// === Mantine ===
import { Box, Container } from "@mantine/core";
import { ReactNode, CSSProperties } from "react";

interface ContentColumnProps {
  children: ReactNode;
  /** Optional custom styles to override defaults */
  style?: CSSProperties;
  /** Optional background color, defaults to dark-8 */
  backgroundColor?: string;
  /** Optional padding, defaults to 40px */
  padding?: string | number;
  /** Optional text alignment, defaults to center */
  textAlign?: 'left' | 'center' | 'right';
  /** Optional minimum height, defaults to 200px */
  minHeight?: string | number;
  /** Optional height, defaults to 100px */
  height?: string | number;
  /** Optional width, defaults to 100% */
  width?: string | number;
  /** Optional flex direction, defaults to column */
  flexDirection?: 'row' | 'column';
}

export function ContentColumn({
  children,
  style,
  backgroundColor = 'var(--mantine-color-tokyoBlue-2)',
  padding = '40px',
  textAlign = 'center',
  minHeight = '10%',
  height = '100px',
  width = '100%',
  flexDirection = 'column'
}: ContentColumnProps) {
  return (
    <Container size="xl" px="xs" py="md" style={{ width: '100%' }}>
      <Box
        style={{
          backgroundColor,
          padding,
          textAlign,
          minHeight,
          height,
          width,
          display: 'flex',
          flexDirection,
          justifyContent: textAlign === 'center' ? 'center' : 'flex-start',
          alignItems: textAlign === 'center' ? 'center' : 'flex-start',
          borderRadius: '8px',
          ...style
        }}
      >
        {children}
      </Box>
    </Container>
  );
}