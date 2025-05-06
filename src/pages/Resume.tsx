// === React ===
import { useState, useEffect } from "react";

// === Mantine ===
import {
  Box,
  Text,
  Title,
  Paper,
  Button,
  Group,
  Image,
  SimpleGrid,
  useMantineTheme,
  Alert,
} from "@mantine/core";
import {
  IconAlertCircle,
  IconLock,
  IconFileText,
  IconShieldCheck,
} from "@tabler/icons-react";

// === Components ===
import { ContentColumn } from "../molecules/ContentColumn";

// === Styles ===
import classes from "./Resume.module.css";

/**
 * Resume page component that displays a PDF resume behind a simple CAPTCHA-like verification
 * This helps protect against automated scraping while still allowing humans to view the resume
 */
// Define the CAPTCHA image options
interface CaptchaImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

const captchaImages: CaptchaImage[] = [
  {
    id: "mountain-1",
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    alt: "Mountain landscape",
    category: "mountain",
  },
  {
    id: "mountain-2",
    src: "https://images.unsplash.com/photo-1606117331085-5760e3b58520",
    alt: "Mountain peak",
    category: "mountain",
  },
  {
    id: "ocean-1",
    src: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0",
    alt: "Ocean waves",
    category: "ocean",
  },
  {
    id: "ocean-2",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    alt: "Beach",
    category: "ocean",
  },
  {
    id: "forest-1",
    src: "https://images.unsplash.com/photo-1448375240586-882707db888b",
    alt: "Forest",
    category: "forest",
  },
  {
    id: "forest-2",
    src: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d",
    alt: "Trees",
    category: "forest",
  },
  {
    id: "city-1",
    src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
    alt: "City skyline",
    category: "city",
  },
  {
    id: "city-2",
    src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b",
    alt: "Urban landscape",
    category: "city",
  },
];

// Categories for the CAPTCHA
const categories = ["mountain", "ocean", "forest", "city"];

export function Resume() {
  const theme = useMantineTheme();
  const [verified, setVerified] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [showError, setShowError] = useState(false);

  // State for CAPTCHA
  const [selectedImages, setSelectedImages] = useState<CaptchaImage[]>([]);
  const [targetCategory, setTargetCategory] = useState("");
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);

  // Initialize CAPTCHA when component mounts
  useEffect(() => {
    initializeCaptcha();
  }, []);

  // Function to initialize the CAPTCHA
  const initializeCaptcha = () => {
    // Select a random category to be the target
    const randomCategoryIndex = Math.floor(Math.random() * categories.length);
    const newTargetCategory = categories[randomCategoryIndex];
    setTargetCategory(newTargetCategory);

    // Shuffle and select 4 random images (ensure at least one is from the target category)
    const shuffledImages = [...captchaImages].sort(() => 0.5 - Math.random());

    // Make sure we have at least one image from the target category
    const targetCategoryImages = shuffledImages.filter(
      (img) => img.category === newTargetCategory
    );
    const otherImages = shuffledImages.filter(
      (img) => img.category !== newTargetCategory
    );

    // Select one random image from the target category
    const selectedTargetImage =
      targetCategoryImages[
        Math.floor(Math.random() * targetCategoryImages.length)
      ];

    // Select 3 random images from other categories
    const selectedOtherImages = otherImages.slice(0, 3);

    // Combine and shuffle again
    const newSelectedImages = [
      selectedTargetImage,
      ...selectedOtherImages,
    ].sort(() => 0.5 - Math.random());
    setSelectedImages(newSelectedImages);

    // Reset selection state
    setSelectedImageId(null);
    setShowError(false);
  };

  // Handle image selection
  const handleImageSelect = (imageId: string) => {
    setSelectedImageId(imageId);
  };

  // Handle verification
  const handleVerify = () => {
    if (!selectedImageId) {
      return; // No image selected
    }

    const selectedImage = selectedImages.find(
      (img) => img.id === selectedImageId
    );

    if (selectedImage && selectedImage.category === targetCategory) {
      // Correct selection
      setVerified(true);
      setShowError(false);
    } else {
      // Incorrect selection
      setAttempts(attempts + 1);
      setShowError(true);
      initializeCaptcha(); // Generate a new CAPTCHA challenge
    }
  };

  // PDF viewer component that's shown after verification
  const ResumeViewer = () => (
    <Box className={classes.pdfContainer}>
      <Title order={1} className={classes.pageTitle}>
        Resume
      </Title>
      <object
        data="/resume.pdf"
        type="application/pdf"
        className={classes.pdfViewer}
        title="Harrison Oest Resume"
      >
        <p>It appears your browser does not support PDFs. Please download the PDF manually.</p>
      </object>

      <Button
        mt="xl"
        variant="outline"
        color={theme.colors.tokyoBlue[5]}
        component="a"
        href="/resume.pdf"
        download
        leftSection={<IconFileText size={18} />}
      >
        Download PDF
      </Button>
    </Box>
  );

  // CAPTCHA verification form with image selection
  const CaptchaVerification = () => (
    <Paper p="xl" radius="md" className={classes.captchaContainer}>
      <Title order={3} mb="md" className={classes.captchaTitle}>
        <IconLock size={24} style={{ marginRight: "10px" }} />
        Verification Required
      </Title>

      <Text mb="lg">
        To protect my resume from automated scraping, please select the image
        that shows a <strong>{targetCategory}</strong>:
      </Text>

      <SimpleGrid cols={2} spacing="md" mb="xl">
        {selectedImages.map((image) => (
          <Box
            key={image.id}
            className={classes.captchaImageContainer}
            onClick={() => handleImageSelect(image.id)}
            style={{
              border:
                selectedImageId === image.id
                  ? `2px solid ${theme.colors.tokyoBlue[5]}`
                  : "1px solid transparent",
              transform:
                selectedImageId === image.id ? "scale(1.02)" : "scale(1)",
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              height={120}
              radius="md"
              className={classes.captchaImage}
            />
          </Box>
        ))}
      </SimpleGrid>

      {showError && (
        <Alert
          icon={<IconAlertCircle size={16} />}
          title="Incorrect selection"
          color="red"
          mb="md"
        >
          Please try again. You have made {attempts} incorrect{" "}
          {attempts === 1 ? "attempt" : "attempts"}.
        </Alert>
      )}

      <Group justify="center">
        <Button
          onClick={handleVerify}
          color={theme.colors.tokyoBlue[5]}
          disabled={!selectedImageId}
          leftSection={<IconShieldCheck size={18} />}
        >
          Verify
        </Button>
      </Group>

      <Text mt="xl" size="sm" c="dimmed">
        This is a simple verification to ensure you're a human. Your information
        is not stored or tracked.
      </Text>
    </Paper>
  );

  return (
    <Box className={classes.container}>
      <ContentColumn
        padding="60px"
        height="auto"
        minHeight="auto"
        textAlign="center"
        backgroundColor={theme.colors.tokyoBlue[2]}
      >
        {/* Show either the CAPTCHA verification or the resume based on verification status */}
        {verified ? <ResumeViewer /> : <CaptchaVerification />}
      </ContentColumn>
    </Box>
  );
}
