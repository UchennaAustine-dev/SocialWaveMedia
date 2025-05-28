"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    // Hide cursor initially until mouse moves
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    // Add hover effect for links and buttons
    const addLinkHoverListeners = () => {
      const links = document.querySelectorAll(
        "a, button, .cursor-hover-trigger"
      );
      links.forEach((link) => {
        link.addEventListener("mouseenter", onLinkMouseEnter);
        link.addEventListener("mouseleave", onLinkMouseLeave);
      });
    };

    const removeLinkHoverListeners = () => {
      const links = document.querySelectorAll(
        "a, button, .cursor-hover-trigger"
      );
      links.forEach((link) => {
        link.removeEventListener("mouseenter", onLinkMouseEnter);
        link.removeEventListener("mouseleave", onLinkMouseLeave);
      });
    };

    const onLinkMouseEnter = () => {
      setLinkHovered(true);
    };

    const onLinkMouseLeave = () => {
      setLinkHovered(false);
    };

    addEventListeners();

    // Add a small delay to ensure DOM is fully loaded
    const timeout = setTimeout(() => {
      addLinkHoverListeners();
    }, 1000);

    return () => {
      removeEventListeners();
      removeLinkHoverListeners();
      clearTimeout(timeout);
    };
  }, []);

  // Don't render cursor on touch devices
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches
  ) {
    return null;
  }

  return (
    <>
      <div
        className={`cursor-dot ${hidden ? "opacity-0" : "opacity-100"} ${
          clicked ? "scale-50" : ""
        } ${linkHovered ? "cursor-hover" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className={`cursor-outline ${hidden ? "opacity-0" : "opacity-100"} ${
          clicked ? "scale-75" : ""
        } ${linkHovered ? "cursor-hover" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
}
