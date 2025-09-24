import React from "react";
import { Mic, Waves } from "lucide-react";

export default function VoiceBot404() {
  const styles = {
    container: {
      minHeight: "100vh",
      background:
        "linear-gradient(135deg, #2563eb 0%, #3b82f6 25%, #1d4ed8 75%, #3730a3 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "16px",
      position: "relative",
      overflow: "hidden",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
    },
    bgPattern: {
      position: "absolute",
      inset: 0,
      opacity: 0.1,
      pointerEvents: "none",
    },
    bgCircle: {
      position: "absolute",
      background: "white",
      borderRadius: "50%",
      filter: "blur(60px)",
    },
    bgCircle1: {
      top: "25%",
      left: "25%",
      width: "128px",
      height: "128px",
    },
    bgCircle2: {
      top: "50%",
      right: "33.333%",
      width: "192px",
      height: "192px",
    },
    bgCircle3: {
      bottom: "25%",
      left: "50%",
      width: "96px",
      height: "96px",
    },
    mainContainer: {
      position: "relative",
      zIndex: 10,
      maxWidth: "448px",
      width: "100%",
      textAlign: "center",
    },
    glassCard: {
      background: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(16px)",
      borderRadius: "24px",
      padding: "32px",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    },
    voiceIconContainer: {
      marginBottom: "32px",
      display: "flex",
      justifyContent: "center",
    },
    voiceIconWrapper: {
      position: "relative",
    },
    voiceIcon: {
      width: "80px",
      height: "80px",
      background: "linear-gradient(135deg, #60a5fa, #2563eb)",
      borderRadius: "16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
    },
    statusIndicator: {
      position: "absolute",
      top: "-4px",
      right: "-4px",
      width: "24px",
      height: "24px",
      background: "#ef4444",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    errorSection: {
      marginBottom: "24px",
    },
    errorCode: {
      fontSize: "128px",
      fontWeight: "900",
      color: "white",
      marginBottom: "8px",
      lineHeight: 1,
      letterSpacing: "-0.05em",
    },
    waveDivider: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "8px",
      marginBottom: "16px",
    },
    dividerLine: {
      height: "1px",
      background:
        "linear-gradient(to right, transparent, #93c5fd, transparent)",
      flex: 1,
    },
    content: {
      color: "white",
    },
    errorTitle: {
      fontSize: "32px",
      fontWeight: "700",
      marginBottom: "16px",
    },
    errorMessage: {
      color: "#dbeafe",
      fontSize: "18px",
      lineHeight: 1.6,
      marginBottom: "16px",
    },
    statusBadge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "8px 16px",
      background: "rgba(255, 255, 255, 0.2)",
      borderRadius: "50px",
      fontSize: "14px",
      color: "#dbeafe",
      marginTop: "16px",
    },
    statusDot: {
      width: "8px",
      height: "8px",
      background: "#60a5fa",
      borderRadius: "50%",
    },
    bottomSection: {
      marginTop: "32px",
      paddingTop: "24px",
      borderTop: "1px solid rgba(255, 255, 255, 0.2)",
    },
    suggestionText: {
      color: "#93c5fd",
      fontSize: "14px",
    },
    footerText: {
      color: "rgba(147, 197, 253, 0.6)",
      fontSize: "12px",
      marginTop: "24px",
    },
  };

  // Mobile responsive styles
  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    styles.glassCard.padding = "24px 20px";
    styles.errorCode.fontSize = "96px";
    styles.errorTitle.fontSize = "24px";
    styles.voiceIcon.width = "64px";
    styles.voiceIcon.height = "64px";
  }

  return (
    <div style={styles.container}>
      {/* Background Pattern */}
      <div style={styles.bgPattern}>
        <div style={{ ...styles.bgCircle, ...styles.bgCircle1 }}></div>
        <div style={{ ...styles.bgCircle, ...styles.bgCircle2 }}></div>
        <div style={{ ...styles.bgCircle, ...styles.bgCircle3 }}></div>
      </div>

      <div style={styles.mainContainer}>
        {/* Glass Card */}
        <div style={styles.glassCard}>
          {/* Voice Icon */}
          <div style={styles.voiceIconContainer}>
            <div style={styles.voiceIconWrapper}>
              <div style={styles.voiceIcon}>
                <Mic size={40} color="white" strokeWidth={2} />
              </div>
            </div>
          </div>

          {/* 404 Text */}
          <div style={styles.errorSection}>
            <h1 style={styles.errorCode}>404</h1>
            <div style={styles.waveDivider}>
              <Waves size={20} color="#93c5fd" />
              <div style={styles.dividerLine}></div>
              <Waves size={20} color="#93c5fd" />
            </div>
          </div>

          {/* Content */}
          <div style={styles.content}>
            <h2 style={styles.errorTitle}>Voice Command Not Found</h2>

            <p style={styles.errorMessage}>
              The page you're looking for seems to have gone silent. Our
              voicebot couldn't locate the requested resource.
            </p>
          </div>

          {/* Bottom section */}
        </div>

        {/* Footer text */}
        <p style={styles.footerText}>Error Code: VOICE_404 • VoiceBot v2.0</p>
      </div>
    </div>
  );
}
