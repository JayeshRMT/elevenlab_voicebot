import React, { useState, useEffect, useRef } from "react";
import BitkAirLogo from "../assests/batikAir.png";
import batikAirBackgroundUrl from "../assests/batikairBg.png";

const ElevenLabsConvAI = () => {
  const [screenSize, setScreenSize] = useState("desktop");
  const [visibleItems, setVisibleItems] = useState(0);

  const widgetRef1 = useRef(null);

  useEffect(() => {
    const scriptId1 = "elevenlabs-convai-script3";

    if (!document.getElementById(scriptId1)) {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
      script.async = true;
      script.type = "text/javascript";
      script.id = scriptId1;
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScreenSize("mobile");
      } else if (width < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const itemTimer = setInterval(() => {
        setVisibleItems((prev) => {
          if (prev < bulletPoints.length) {
            return prev + 1;
          }
          clearInterval(itemTimer);
          return prev;
        });
      }, 150);
      return () => clearInterval(itemTimer);
    }, 300);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isMobile = screenSize === "mobile";
  const isTablet = screenSize === "tablet";

  const containerStyle = {
    minHeight: "100vh",
    fontFamily: "Inter, sans-serif",
    backgroundImage: `url(${batikAirBackgroundUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const logoBackground = {
    backgroundColor: "#ffffff",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: isMobile ? "center" : "space-evenly",
  };

  const mainWrapperStyle = {
    textAlign: "center",
    width: isMobile ? "95%" : "60%",
  };

  const subtitleStyle = {
    fontSize: isMobile ? "14px" : "15px",
    fontWeight: 300,
    maxWidth: "700px",
    margin: isMobile ? "-12px 5px 15px 5px" : "-12px auto 10px auto",
    color: "white",
  };

  const cardStyle = {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    borderRadius: "20px",
    boxShadow: "0 20px 100px rgba(214, 51, 132, 0.3)",
    border: "1px solid rgba(214, 51, 132, 0.2)",
    overflow: "hidden",
    marginTop: isMobile && "-10px",
  };

  const cardHeaderStyle = {
    background: "linear-gradient(135deg, #d63384 0%, #f783ac 100%)",
    borderRadius: "20px 20px 0 0",
    padding: "10px",
  };

  const cardTitleStyle = {
    fontSize: isMobile ? "20px" : "22px",
    fontWeight: 700,
    color: "white",
    margin: 0,
    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
  };

  const bulletListStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const bulletItemStyle = (index) => ({
    textAlign: "left",
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    padding: isMobile ? "4px 8px" : "16px",
    borderRadius: "16px",
    background:
      index < visibleItems ? "rgba(233, 165, 199, 0.05)" : "transparent",
    border:
      index < visibleItems
        ? "1px solid rgba(214, 51, 132, 0.1)"
        : "1px solid transparent",
    transform: index < visibleItems ? "translateX(0)" : "translateX(-20px)",
    opacity: index < visibleItems ? 1 : 0,
    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDelay: `${index * 100}ms`,
    cursor: "pointer",
    position: "relative",
  });

  const checkIconStyle = (index) => ({
    width: isMobile ? "20px" : "24px",
    height: isMobile ? "20px" : "24px",
    background:
      index < visibleItems
        ? "linear-gradient(135deg, #d63384, #f783ac)"
        : "rgba(200, 200, 200, 0.3)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    marginTop: "2px",
    boxShadow:
      index < visibleItems ? "0 8px 20px rgba(214, 51, 132, 0.3)" : "none",
    transform: index < visibleItems ? "scale(1)" : "scale(0.8)",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDelay: `${index * 120}ms`,
  });

  const bulletTextStyle = {
    fontSize: isMobile ? "11px" : isTablet ? "15px" : "16px",
    color: "white",
    lineHeight: "1.7",
    fontWeight: 500,
    textAlign: "left",
    flex: 1,
  };

  const footerline = {
    height: "25px",
    background: "linear-gradient(to right, #d63384, #f783ac)",
    zIndex: 9999,
    width: "100%",
    position: "fixed",
    bottom: 0,
  };

  const bulletPoints = [
    "The bot is configured for Malay and English languages. It detects your language, understands and responds back in your language. You may also express the preferred language of communication to be Malay or English explicitly.",
    "The bots can be configured for native and international languages; for other languages demo, kindly connect with us.",
    "Converse with the bot regarding flight bookings, rescheduling, changes to flight bookings, pet care, add-ons, flight-related policies etc.",
    "Please ensure the background noise is minimal as the bot continuously listens to voice inputs thinking it to be customer interruptions.",
    "Repeat clearly again if the bot doesn't catch what you speak",
    "When the bot replies to share info and while you wait, kindly acknowledge with an 'Ok'",
    "This is for demo purpose, so call is configured to disconnect after 20 sec silence and call duration of 7 min. Kindly request if the durations are to be modified.",
    "If the chatbot doesn't load, kindly use personal internet connection than office WiFi.",
  ];

  return (
    <div style={containerStyle}>
      <style>
        {`
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }

          .card-header-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(
              90deg,
              transparent 0%,
              rgba(255, 255, 255, 0.1) 50%,
              transparent 100%
            );
            background-size: 200% 100%;
            animation: shimmer 3s infinite;
          }

          .bullet-item:hover {
            background: rgba(214, 51, 132, 0.08) !important;
            border-color: rgba(214, 51, 132, 0.2) !important;
            transform: translateX(8px) !important;
            box-shadow: 0 8px 25px rgba(214, 51, 132, 0.15) !important;
          }

          .check-mark {
            color: white;
            font-size: ${isMobile ? "10px" : "12px"};
            font-weight: bold;
          }
        `}
      </style>

      <div style={logoBackground}>
        <img src={BitkAirLogo} alt="Akasa Logo" height={isMobile ? 40 : 60} />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={mainWrapperStyle}>
          <h3 style={{ color: "#FFFFFF" }}>VoiceBot Demo</h3>
          <p style={subtitleStyle}>
            We are happy to help you with your Batik Air queries ..
          </p>
          <br />
          <div style={cardStyle}>
            <div style={cardHeaderStyle}>
              <h3 style={cardTitleStyle}>Guidelines</h3>
            </div>

            <div style={bulletListStyle}>
              {bulletPoints.map((point, index) => (
                <li
                  key={index}
                  style={bulletItemStyle(index)}
                  className="bullet-item"
                >
                  <div style={checkIconStyle(index)}>
                    <span className="check-mark">✓</span>
                  </div>
                  <span style={bulletTextStyle}>{point}</span>
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={footerline}></div>
      <div ref={widgetRef1}>
        <elevenlabs-convai agent-id="agent_1601k0v50xwte0889hm753f6rc3k"></elevenlabs-convai>
      </div>
    </div>
  );
};

export default ElevenLabsConvAI;
