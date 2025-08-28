import React, { useState, useEffect, useRef } from "react";
import clearTripLogo from "../assests/clearTrip.png";
import RMT from "../assests/rmt.png";
import RadicalMinds from "../assests/radicalminds.png";
import clearTripBackgroundUrl from "../assests/cleartripBg.jpg";

const ClearTrip = () => {
  const [screenSize, setScreenSize] = useState("desktop");
  const [visibleItems, setVisibleItems] = useState(0);
  const [selectedLanguage] = useState("hindi");
  const [selectedOption, setSelectedOption] = useState("General queries");

  const widgetRef = useRef(null);

  useEffect(() => {
    const scriptId = "elevenlabs-convai-script5";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
      script.async = true;
      script.type = "text/javascript";
      script.id = scriptId;
      document.body.appendChild(script);
    }
  }, [selectedLanguage]);

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
    // eslint-disable-next-line
  }, []);

  const isMobile = screenSize === "mobile";
  const isTablet = screenSize === "tablet";

  const containerStyle = {
    minHeight: "100vh",
    fontFamily: "Inter, sans-serif",
    backgroundImage: `url(${clearTripBackgroundUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    overflow: "auto",
  };

  const logoBackground = {
    backgroundColor: "#ffffff",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: isMobile ? "space-between" : "space-evenly",
  };

  const mainWrapperStyle = {
    textAlign: "center",
    width: isMobile ? "95%" : "70%",
  };

  const subtitleStyle = {
    fontSize: isMobile ? "14px" : "15px",
    fontWeight: 300,
    maxWidth: "700px",
    margin: isMobile ? "-12px 5px 15px 5px" : "-12px auto 10px auto",
    color: "#ffffff",
  };

  const selectWrapperStyle = {
    margin: "20px auto",
    display: "flex",
    justifyContent: "center",
  };

  const selectBoxStyle = {
    padding: "10px 16px",
    borderRadius: "12px",
    border: "1px solid rgba(255, 255, 255, 0.5)",
    background: "rgba(255,255,255,0.8)",
    fontSize: "15px",
    fontWeight: 500,
    outline: "none",
    cursor: "pointer",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
  };

  const cardStyle = {
    background: "#FFFFFF",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    borderRadius: "20px",
    boxShadow: "0 20px 100px rgba(255, 255, 255, 0.3)",
    border: "1px solid rgba(231, 50, 50, 0.2)",
    overflow: "hidden",
    marginTop: isMobile && "-10px",
  };

  const cardHeaderStyle = {
    background: "white",
    borderRadius: "20px 20px 0 0",
    padding: "10px",
    borderBottom: "1px solid rgba(231, 50, 50, 0.2)",
  };

  const cardTitleStyle = {
    fontSize: isMobile ? "20px" : "22px",
    fontWeight: 700,
    color: "#ff6300",
    margin: 0,
    textShadow: "0 2px 4px rgba(14, 13, 13, 0.3)",
  };

  const rmtSubtext = {
    color: "#FFFFFF",
    fontSize: "12.5px",
    textShadow: "0px 1px 3px rgba(19, 18, 18, 0.7)",
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
    padding: isMobile ? "2px 8px" : "10px",
    borderRadius: "16px",
    background:
      index < visibleItems ? "rgba(255, 255, 255, 0.04)" : "transparent",
    border:
      index < visibleItems
        ? "1px solid rgba(255, 255, 255, 0.1)"
        : "1px solid transparent",
    cursor: "pointer",
    position: "relative",
  });

  const checkIconStyle = (index) => ({
    width: isMobile ? "20px" : "24px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    marginTop: "2px",
    color: "#ff6300",
  });

  const bulletTextStyle = {
    fontSize: isMobile ? "11px" : isTablet ? "15px" : "16px",
    color: "#ff6300",
    lineHeight: "1.7",
    fontWeight: 500,
    textAlign: "left",
    flex: 1,
  };
  const rmtLogo = {
    display: isMobile ? "none" : "flex",
    margin: "20px auto",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 15,
    left: "50%",
    transform: "translateX(-50%)", // centers horizontally
    width: "max-content", // keeps it snug around content
  };

  const footerline = {
    height: "25px",
    background: "white",
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

  return (
    <div style={containerStyle}>
      <div style={logoBackground}>
        {isMobile && <img src={RadicalMinds} alt="rmt" height={40} />}
        <img src={clearTripLogo} alt="Akasa Logo" height={isMobile ? 40 : 50} />
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
          <h2 style={{ ...rmtSubtext, fontSize: "22px" }}>VoiceBot Demo</h2>
          <p style={subtitleStyle}>
            We are happy to help you with your Cleartrip queries ..
          </p>

          {/* --- Select Box --- */}
          <div style={selectWrapperStyle}>
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              style={{
                ...selectBoxStyle,
                // appearance: "none", // removes default browser arrow
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.85))",
                border: "1px solid rgba(255, 99, 0, 0.4)",
                color: "#333",
                fontFamily: "Inter, sans-serif",
                padding: "8px 10px",
                borderRadius: "14px",
                fontSize: "16px",
                fontWeight: 500,
                boxShadow: "0px 6px 16px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              px
              onFocus={(e) =>
                (e.target.style.boxShadow =
                  "0px 8px 20px rgba(255, 99, 0, 0.25)")
              }
              onBlur={(e) =>
                (e.target.style.boxShadow = "0px 6px 16px rgba(0,0,0,0.08)")
              }
            >
              <option value="General queries">General queries</option>
              <option value="NPS/Customer Feedback">
                NPS/Customer Feedback
              </option>
              <option value="Hotel Reconfirmation">Hotel Reconfirmation</option>
              <option value="Sales Lead">Sales Lead</option>
              <option value="Booking & Payment Reminders">
                Booking & Payment Reminders
              </option>
              <option value="Customer Survey">Customer Survey</option>
              <option value="Back Office">Back Office</option>
            </select>
          </div>

          <div style={cardStyle}>
            <div style={cardHeaderStyle}>
              <h3 style={cardTitleStyle}>Guidelines</h3>
            </div>

            <div style={bulletListStyle}>
              {bulletPoints.map((point, index) => (
                <li key={index} style={bulletItemStyle(index)}>
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

      <div style={rmtLogo}>
        <p style={rmtSubtext}>Powered by</p>
        <div style={{ display: "flex", gap: "70px", flexWrap: "wrap" }}>
          <img src={RMT} alt="rmt" height={45} />
          <img src={RadicalMinds} alt="radical" height={45} />
        </div>
      </div>

      <div style={footerline}></div>

      <div ref={widgetRef}>
        <elevenlabs-convai
          agent-id={
            selectedOption === "General queries"
              ? "agent_4301k1ft63x5etw81dy4g4tg8pf0"
              : selectedOption === "NPS/Customer Feedback"
              ? "agent_4201k3qnygq2fgqs1aw37tw59h6j"
              : selectedOption === "Hotel Reconfirmation"
              ? "agent_0101k3qp0y69edxapwxvsa5ksp00"
              : "" // all others → empty string
          }
        />
      </div>
    </div>
  );
};

export default ClearTrip;
