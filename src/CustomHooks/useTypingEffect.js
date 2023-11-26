import { useState, useEffect } from "react";

const useTypingEffect = (text, typingSpeed = 150, erasingSpeed = 100) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingTimeout;

    if (isDeleting) {
      typingTimeout = setTimeout(() => {
        setDisplayedText(text.substring(0, displayedText.length - 1));
      }, erasingSpeed);
    } else {
      typingTimeout = setTimeout(() => {
        setDisplayedText(text.substring(0, displayedText.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && displayedText === text) {
      // Start erasing after a pause
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
    }

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, text, typingSpeed, erasingSpeed]);

  return displayedText;
};

export default useTypingEffect;
