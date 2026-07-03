import { useRef, useState, useEffect } from "react";

// Fades + slides children in the first time they enter the viewport.
const Reveal = ({ children, delay = 0, className = "", as: Tag = "div" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${visible ? "reveal--in" : ""} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
