import React, { useState, useEffect } from "react";

const ToastMessage = ({
  type = "success",
  message = "",
  onClose,
  autoClose = true,
  duration = 4000,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line
  }, [autoClose, duration]);

  const handleClose = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, 300);
  };

  if (!isVisible) return null;

  const icons = {
    success: "✓",
    error: "✕",
    info: "ℹ",
    warning: "⚠",
  };

  return (
    <div
      className={`toast-message ${type} ${
        isAnimating ? "toast-exit" : "toast-enter"
      }`}
    >
      <div className="toast-content">
        <div className="toast-icon">{icons[type] || "✓"}</div>
        <span className="toast-text">{message}</span>
        <button
          className="toast-close"
          onClick={handleClose}
          aria-label="Close notification"
        >
          ×
        </button>
      </div>

      <style jsx>{`
        .toast-message {
          position: fixed;
          top: 20px;
          right: 20px;
          min-width: 300px;
          max-width: 500px;
          padding: 16px;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            sans-serif;
          font-size: 14px;
          z-index: 9999;
          transform: translateX(0);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .toast-enter {
          animation: slideInRight 0.3s ease-out forwards;
        }

        .toast-exit {
          animation: slideOutRight 0.3s ease-in forwards;
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideOutRight {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        .toast-message.success {
          background-color: #10b981;
          color: white;
          border-left: 4px solid #059669;
        }

        .toast-message.error {
          background-color: #ef4444;
          color: white;
          border-left: 4px solid #dc2626;
        }

        .toast-message.info {
          background-color: #3b82f6;
          color: white;
          border-left: 4px solid #2563eb;
        }

        .toast-message.warning {
          background-color: #f59e0b;
          color: white;
          border-left: 4px solid #d97706;
        }

        .toast-content {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .toast-icon {
          flex-shrink: 0;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 12px;
        }

        .toast-text {
          flex: 1;
          line-height: 1.4;
          word-break: break-word;
        }

        .toast-close {
          flex-shrink: 0;
          background: none;
          border: none;
          color: inherit;
          font-size: 20px;
          cursor: pointer;
          padding: 0;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s ease;
          opacity: 0.8;
        }

        .toast-close:hover {
          opacity: 1;
          background-color: rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 480px) {
          .toast-message {
            top: 10px;
            right: 10px;
            left: 10px;
            min-width: auto;
            max-width: none;
          }
        }
      `}</style>
    </div>
  );
};

export default ToastMessage;
