// === Mantine ===
import { Box } from "@mantine/core";

// === React ===
import React from "react";

// === Styles ===
import classes from "./Background.module.css";

// Props interface for the Background component
interface BackgroundProps {
  children: React.ReactNode;
  // Optional image URL
  imageUrl?: string;
  // Optional overlay color with opacity
  overlayColor?: string;
}

/**
 * Background component that provides a full-page background image with optional overlay
 *
 * @param children - React components to render on top of the background
 * @param imageUrl - URL for the background image
 * @param overlayColor - Optional overlay color with opacity (e.g., 'rgba(0,0,0,0.3)')
 */
export function Background({
  children,
  imageUrl = "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1",
  overlayColor,
}: BackgroundProps) {
  return (
    // Use the CSS classes from the imported stylesheet
    <Box className={classes.backgroundContainer}>
      {/* Background image layer */}
      <div
        className={classes.backgroundImage}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* Optional overlay layer */}
      {overlayColor && (
        <div
          className={classes.backgroundOverlay}
          style={{ backgroundColor: overlayColor }}
        />
      )}

      {/* Content layer */}
      <div className={classes.backgroundContent}>{children}</div>
    </Box>
  );
}
