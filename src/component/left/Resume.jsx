import RESUME from "../../Assets/Resume-PeilingCai-MT.pdf";

export default function Resume () {
  return (
    <a href={RESUME} download="PeilingCai_Resume.pdf" target="_blank" className="btn">
        Download Resume
      </a>

  );
};

