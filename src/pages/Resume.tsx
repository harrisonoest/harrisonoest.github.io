import { useState, useEffect } from "react";
import { ContentColumn } from "../molecules/ContentColumn";
import "./Resume.css";

interface CaptchaImage {
  id: string;
  src: string;
  category: string;
}

const captchaImages: CaptchaImage[] = [
  { id: "mountain-1", src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b", category: "mountain" },
  { id: "mountain-2", src: "https://images.unsplash.com/photo-1606117331085-5760e3b58520", category: "mountain" },
  { id: "ocean-1", src: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0", category: "ocean" },
  { id: "ocean-2", src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", category: "ocean" },
  { id: "forest-1", src: "https://images.unsplash.com/photo-1448375240586-882707db888b", category: "forest" },
  { id: "forest-2", src: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d", category: "forest" },
  { id: "city-1", src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df", category: "city" },
  { id: "city-2", src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b", category: "city" },
];

const categories = ["mountain", "ocean", "forest", "city"];

export function Resume() {
  const [verified, setVerified] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [showError, setShowError] = useState(false);
  const [selectedImages, setSelectedImages] = useState<CaptchaImage[]>([]);
  const [targetCategory, setTargetCategory] = useState("");
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);

  useEffect(() => {
    initializeCaptcha();
  }, []);

  const initializeCaptcha = () => {
    const newTargetCategory = categories[Math.floor(Math.random() * categories.length)];
    setTargetCategory(newTargetCategory);

    const shuffledImages = [...captchaImages].sort(() => 0.5 - Math.random());
    const targetCategoryImages = shuffledImages.filter((img) => img.category === newTargetCategory);
    const otherImages = shuffledImages.filter((img) => img.category !== newTargetCategory);
    const selectedTargetImage = targetCategoryImages[Math.floor(Math.random() * targetCategoryImages.length)];
    const selectedOtherImages = otherImages.slice(0, 3);
    const newSelectedImages = [selectedTargetImage, ...selectedOtherImages].sort(() => 0.5 - Math.random());
    
    setSelectedImages(newSelectedImages);
    setSelectedImageId(null);
    setShowError(false);
  };

  const handleVerify = () => {
    if (!selectedImageId) return;

    const selectedImage = selectedImages.find((img) => img.id === selectedImageId);

    if (selectedImage && selectedImage.category === targetCategory) {
      setVerified(true);
      setShowError(false);
    } else {
      setAttempts(attempts + 1);
      setShowError(true);
      initializeCaptcha();
    }
  };

  if (verified) {
    return (
      <ContentColumn>
        <h1>Resume</h1>
        <object data="/resume.pdf" type="application/pdf" className="resume-pdf">
          <p>It appears your browser does not support PDFs. Please download the PDF manually.</p>
        </object>
        <a href="/resume.pdf" download className="download-button">Download PDF</a>
      </ContentColumn>
    );
  }

  return (
    <ContentColumn>
      <div className="captcha-container">
        <h3>🔒 Verification Required</h3>
        <p>To protect my resume from automated scraping, please select the image that shows a <strong>{targetCategory}</strong>:</p>
        
        <div className="captcha-grid">
          {selectedImages.map((image) => (
            <div
              key={image.id}
              className={`captcha-image ${selectedImageId === image.id ? 'selected' : ''}`}
              onClick={() => setSelectedImageId(image.id)}
              style={{ backgroundImage: `url(${image.src})` }}
            />
          ))}
        </div>

        {showError && (
          <div className="error-message">
            Incorrect selection. You have made {attempts} incorrect {attempts === 1 ? "attempt" : "attempts"}.
          </div>
        )}

        <button onClick={handleVerify} disabled={!selectedImageId} className="verify-button">
          Verify
        </button>

        <p className="captcha-note">This is a simple verification to ensure you're a human.</p>
      </div>
    </ContentColumn>
  );
}
