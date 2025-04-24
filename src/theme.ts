// theme.ts
// Mantine v7 theme configuration for "Tokyo Night" color palette
// This file centralizes your color palette and theme overrides for easy maintenance and consistency.

import { MantineThemeOverride } from "@mantine/core";

// Tokyo Night color palette
const tokyoNightPalette = {
  background: "#1a1e31", // Main background
  surface: "#24283b", // Cards, surfaces
  text: "#a9b1d6", // Main text
  dimmed: "#565f89", // Dimmed/secondary text
  blue: "#7aa2f7", // Accent blue
  purple: "#bb9af7", // Accent purple
  cyan: "#7dcfff", // Accent cyan
  green: "#9ece6a", // Accent green
  red: "#f7768e", // Accent red
  yellow: "#e0af68", // Accent yellow
  magenta: "#ff79c6", // Extra accent (optional)
};

// Mantine theme override using Tokyo Night palette
export const tokyoNightTheme: MantineThemeOverride = {
  colors: {
    // Custom color scales (Mantine expects arrays for custom colors)
    tokyoBlue: [
      "#1a1e31",
      "#23243a",
      "#2a2e48",
      "#3b4261",
      "#7aa2f7",
      "#7aa2f7",
      "#7aa2f7",
      "#7aa2f7",
      "#7aa2f7",
      "#7aa2f7",
    ],
    tokyoPurple: [
      "#1a1e31",
      "#23243a",
      "#2a2e48",
      "#3b4261",
      "#bb9af7",
      "#bb9af7",
      "#bb9af7",
      "#bb9af7",
      "#bb9af7",
      "#bb9af7",
    ],
    tokyoCyan: [
      "#1a1e31",
      "#23243a",
      "#2a2e48",
      "#3b4261",
      "#7dcfff",
      "#7dcfff",
      "#7dcfff",
      "#7dcfff",
      "#7dcfff",
      "#7dcfff",
    ],
    tokyoGreen: [
      "#1a1e31",
      "#23243a",
      "#2a2e48",
      "#3b4261",
      "#9ece6a",
      "#9ece6a",
      "#9ece6a",
      "#9ece6a",
      "#9ece6a",
      "#9ece6a",
    ],
    tokyoRed: [
      "#1a1e31",
      "#23243a",
      "#2a2e48",
      "#3b4261",
      "#f7768e",
      "#f7768e",
      "#f7768e",
      "#f7768e",
      "#f7768e",
      "#f7768e",
    ],
    tokyoYellow: [
      "#1a1e31",
      "#23243a",
      "#2a2e48",
      "#3b4261",
      "#e0af68",
      "#e0af68",
      "#e0af68",
      "#e0af68",
      "#e0af68",
      "#e0af68",
    ],
  },
  primaryColor: "tokyoBlue", // Use blue as primary accent
  fontFamily: "IBM Plex Sans, sans-serif",
  headings: {
    fontFamily: "IBM Plex Sans, sans-serif",
    fontWeight: "700",
  },
  defaultRadius: "md",
  // Global styles for background and text
  components: {
    // Override Card and Paper backgrounds to use Tokyo Night surface
    Paper: {
      styles: {
        root: {
          backgroundColor: tokyoNightPalette.surface,
          color: tokyoNightPalette.text,
        },
      },
    },
    Card: {
      styles: {
        root: {
          backgroundColor: tokyoNightPalette.surface,
          color: tokyoNightPalette.text,
        },
      },
    },
    // Override Button colors to use Tokyo Night accents
    Button: {
      styles: {
        root: {
          backgroundColor: tokyoNightPalette.blue,
          color: tokyoNightPalette.background,
          fontWeight: 600,
          "&:hover": {
            backgroundColor: tokyoNightPalette.purple,
          },
        },
      },
    },
    // Override ActionIcon for social icons, etc.
    ActionIcon: {
      styles: {
        root: {
          color: tokyoNightPalette.cyan,
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: tokyoNightPalette.surface,
            color: tokyoNightPalette.blue,
          },
        },
      },
    },
    // Override Text for default color
    Text: {
      styles: {
        root: {
          color: tokyoNightPalette.text,
        },
      },
    },
    // Header/Footer backgrounds
    AppShell: {
      styles: {
        header: {
          backgroundColor: tokyoNightPalette.surface,
          color: tokyoNightPalette.text,
          borderBottom: `2px solid ${tokyoNightPalette.dimmed}`,
        },
        footer: {
          backgroundColor: tokyoNightPalette.surface,
          color: tokyoNightPalette.text,
          borderTop: `2px solid ${tokyoNightPalette.dimmed}`,
        },
        main: {
          backgroundColor: tokyoNightPalette.background,
        },
      },
    },
  },
};
// Mantine v7: globalStyles must be passed as a prop to MantineProvider, not inside the theme object.
// Export global styles separately for easy import in App.tsx.
export const tokyoNightGlobalStyles = () => ({
  "html, body": {
    backgroundColor: tokyoNightPalette.background,
    color: tokyoNightPalette.text,
    fontFamily: "IBM Plex Sans, sans-serif",
    minHeight: "100vh",
  },
  a: {
    color: tokyoNightPalette.blue,
    textDecoration: "none",
    transition: "color 0.2s",
    "&:hover": {
      color: tokyoNightPalette.purple,
    },
  },
  "::selection": {
    background: tokyoNightPalette.purple,
    color: tokyoNightPalette.background,
  },
});
