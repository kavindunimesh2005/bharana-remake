import React from 'react';
import { CheckCircle2, Heart, ShoppingBag, Info, X } from 'lucide-react';

export default function Toast({ toasts, onDismiss }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-container">
      {toasts.map((toast) => {
        let Icon = CheckCircle2;
        if (toast.type === 'cart') Icon = ShoppingBag;
        if (toast.type === 'wishlist') Icon = Heart;
        if (toast.type === 'info') Icon = Info;

        return (
          <div key={toast.id} className={`toast-item ${toast.type || 'success'}`}>
            <Icon size={18} className="toast-icon" />
            <div className="toast-content">
              <span className="toast-message">{toast.message}</span>
            </div>
            <button className="toast-close" onClick={() => onDismiss(toast.id)}>
              <X size={14} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
