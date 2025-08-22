import React, { createContext, useContext, useState, useCallback } from "react";
import ToastMessage from "./ToastMessage";

const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    (type, message, duration = 4000) => {
      const id = Date.now();
      setToasts((prev) => [
        ...prev,
        {
          id,
          type,
          message,
          duration,
          onClose: () => removeToast(id),
        },
      ]);
    },
    [removeToast]
  );

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {toasts.map((toast) => (
        <ToastMessage
          key={toast.id}
          type={toast.type}
          message={toast.message}
          duration={toast.duration}
          onClose={toast.onClose}
        />
      ))}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context.showToast;
};
