import React, { useState, useEffect, useRef } from "react";
import akasaLogo from "../assests/akasaLogo.svg";
// import RMT from "./assests/rmt.png";
// import RadicalMinds from "./assests/radicalminds.png";
import akasaBackgroundUrl from "../assests/background_akasa.jpg";

const ElevenLabsConvAI = () => {
  const [screenSize, setScreenSize] = useState("desktop");
  const [visibleItems, setVisibleItems] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState("english");

  const widgetRef = useRef(null);

  useEffect(() => {
    const scriptId = "elevenlabs-convai-script4";

    // Avoid injecting the script multiple times
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
      script.async = true;
      script.type = "text/javascript";
      script.id = scriptId;
      document.body.appendChild(script);
    }
  }, [selectedLanguage]);

  // Your existing responsive logic
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

  // Card animation logic
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
    minHeight: isMobile ? "100vh" : "100vh",
    fontFamily: "Inter, sans-serif",
    backgroundImage: `url(${akasaBackgroundUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    // background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
    // background:
    //   "radial-gradient(circle,rgb(233, 97, 12) 0%,rgb(243, 108, 18) 100%)",
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

  const languageSelectContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: isMobile ? "20px 0" : "20px 0",
    gap: "10px",
  };

  const languageLabelStyle = {
    color: "#ffffff",
    fontSize: isMobile ? "13px" : "16px",
    fontWeight: "600",
    textShadow: "0 1px 3px rgba(0,0,0,0.3)",
  };

  const languageSelectBaseStyle = {
    appearance: "none",
    backgroundColor: "rgba(255,255,255,0.1)",
    color: "white",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "8px",
    padding: isMobile ? "10px 16px" : "12px 24px",
    fontSize: isMobile ? "14px" : "16px",
    fontWeight: "500",
    outline: "none",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    minWidth: isMobile ? "280px" : "320px",
    transition: "border 0.3s ease, box-shadow 0.3s ease",
  };

  const languageSelectFocusStyle = {
    ...languageSelectBaseStyle,
    border: "2px solid #ff6600",
    boxShadow: "0 0 0 3px rgba(255, 102, 0, 0.3)",
  };

  const cardStyle = {
    // background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
    background: "rgba(255, 255, 255, 0.1)", // translucent white
    backdropFilter: "blur(10px)", // glass effect
    WebkitBackdropFilter: "blur(10px)", // Safari support
    borderRadius: "20px",
    boxShadow: "0 20px 100px rgba(63, 30, 1, 0.3)", // dark orange shadow
    border: "1px solid rgba(255, 140, 0, 0.2)", // orange border
    overflow: "hidden",
    marginTop: isMobile && "-10px",
  };

  const cardHeaderStyle = {
    background: "linear-gradient(135deg, #ff6300 0%, #ff8533 100%)",
    borderRadius: "20px 20px 0 0",
    padding: "10px",
  };

  const cardTitleStyle = {
    fontSize: isMobile ? "20px" : isTablet ? "22px" : "22px",
    fontWeight: 700,
    color: "white",
    margin: 0,
    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
  };

  // const rmtSubtext = {
  //   color: "black",
  //   fontSize: "12px",
  // };

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
    background: index < visibleItems ? "rgba(255, 99, 0, 0.04)" : "transparent",
    border:
      index < visibleItems
        ? "1px solid rgba(255, 99, 0, 0.1)"
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
        ? "linear-gradient(135deg, #ff6300, #ff8533)"
        : "rgba(200, 200, 200, 0.3)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    marginTop: "2px",
    boxShadow:
      index < visibleItems ? "0 8px 20px rgba(255, 99, 0, 0.3)" : "none",
    transform: index < visibleItems ? "scale(1)" : "scale(0.8)",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDelay: `${index * 120}ms`,
  });

  const bulletTextStyle = {
    fontSize: isMobile ? "11px" : isTablet ? "15px" : "16px",
    color: "#2c3e50",
    lineHeight: "1.7",
    fontWeight: 500,
    textAlign: "left",
    flex: 1,
  };

  // const rmtLogo = {
  //   display: isMobile ? "none" : "flex",
  //   margin: "20px auto",
  //   // display: "flex",
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   position: "absolute",
  //   bottom: 15,
  //   right: isMobile ? 0 : "40%",
  // };

  const footerline = {
    height: "25px",
    background: "linear-gradient(to right,rgb(184, 89, 6), #FF8C00)", // Dark orange gradient
    zIndex: 9999,
    width: "100%",
    position: "fixed",
    bottom: 0,
  };
  const bulletPoints = [
    "The bot is configured for Hindi and English languages. It detects your language, understands and responds back in your language. You may also express the preferred language of communication to be Hindi or English explicitly.",
    "The bots can be configured for native and international languages; for other languages demo, kindly connect with us.",
    "Converse with the bot regarding flight bookings, rescheduling, changes to flight bookings, pet care, add-ons, flight-related policies etc.",
    "Please ensure the background noise is minimal as the bot continuously listens to voice inputs thinking it to be customer interruptions.",
    "Repeat clearly again if the bot doesn't catch what you speak",
    "When the bot replies to share info and while you wait, kindly acknowledge with an 'Ok'",
    "This is for demo purpose, so call is configured to disconnect after 20 sec silence and call duration of 7 min. Kindly request if the durations are to be modified.",
    "If the chatbot doesn't load, kindly use personal internet connection than office WiFi.",
  ];

  const languageOptions = [
    { value: "english", label: "🇺🇸 English", icon: "🌐" },
    { value: "hindi", label: "🇮🇳 Hindi", icon: "🕉️" },
    { value: "multilang", label: "🌍 Multi-Language", icon: "🗣️" },
  ];

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
    // Add any additional logic here for language change
  };

  return (
    <div style={containerStyle}>
      <style>
        {`
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-3px); }
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
            background: rgba(255, 99, 0, 0.08) !important;
            border-color: rgba(255, 99, 0, 0.2) !important;
            transform: translateX(8px) !important;
            box-shadow: 0 8px 25px rgba(255, 99, 0, 0.15) !important;
          }

          .check-mark {
            color: white;
            font-size: ${isMobile ? "10px" : "12px"};
            font-weight: bold;
          }
        `}
      </style>

      {/* Logo */}
      <div style={logoBackground}>
        {/* {isMobile && <img src={RMT} alt="rmt" height={40} />} */}
        <img src={akasaLogo} alt="Akasa Logo" height={isMobile ? 40 : 60} />
      </div>

      {/* Title */}
      {/* <h1 style={titleStyle}>Akasa Airlines</h1> */}

      {/* Subtitle */}
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
            We are happy to help you with your Akasa Air queries ..
          </p>

          {/* Language Select Section */}
          <div style={languageSelectContainerStyle}>
            <label style={languageLabelStyle}>Choose Your Language</label>
            <select
              value={selectedLanguage}
              onChange={handleLanguageChange}
              style={languageSelectBaseStyle}
              onFocus={(e) =>
                Object.assign(e.target.style, languageSelectFocusStyle)
              }
              onBlur={(e) =>
                Object.assign(e.target.style, languageSelectBaseStyle)
              }
            >
              {languageOptions?.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  style={{ color: "black" }} // Ensures dropdown text is visible
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          {/* Guidelines Card */}
          <div style={cardStyle}>
            <div style={cardHeaderStyle}>
              <h3 style={cardTitleStyle}>Guidelines</h3>
            </div>

            <div style={bulletListStyle}>
              {bulletPoints?.map((point, index) => (
                <li
                  key={index}
                  style={bulletItemStyle(index)}
                  className="bullet-item"
                >
                  <div style={checkIconStyle(index)}>
                    <span className="check-mark">✓</span>
                  </div>
                  <span style={bulletTextStyle}>
                    {point.includes("Please ensure the background noise") ? (
                      <>
                        {point
                          .split(
                            "Please ensure the background noise is minimal"
                          )
                          .map((part, i, arr) => (
                            <React.Fragment key={i}>
                              {part}
                              {i < arr.length - 1 && (
                                <strong>
                                  Please ensure the background noise is minimal
                                </strong>
                              )}
                            </React.Fragment>
                          ))}
                      </>
                    ) : (
                      point
                    )}
                  </span>
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={footerline}></div>
      <div ref={widgetRef}>
        <elevenlabs-convai
          agent-id={
            selectedLanguage === "english"
              ? "agent_01k0r9sfzhetmvpsen2qkm325t"
              : selectedLanguage === "hindi"
              ? "agent_01k0r9re4kft99asebdb3jk9g4"
              : "agent_01k095bk9xem5828xjjjcbak5x"
          }
        />{" "}
      </div>
    </div>
  );
};

export default ElevenLabsConvAI;
