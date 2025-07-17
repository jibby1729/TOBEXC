import { useCallback, useRef } from 'react';
import { api } from '../utils/api';

interface BotProtectionProps {
  onSuccess: (userContact: string) => void;
}

declare global {
  interface Window {
    grecaptcha: {
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export default function BotProtection({ onSuccess }: BotProtectionProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isLoadingRef = useRef(false);

  const handleVerify = useCallback(async () => {
    if (isLoadingRef.current) return;
    
    try {
      isLoadingRef.current = true;
      if (buttonRef.current) {
        buttonRef.current.disabled = true;
        buttonRef.current.textContent = 'Verifying...';
      }

      if (!window.grecaptcha) {
        throw new Error('reCAPTCHA not loaded');
      }

      const token = await window.grecaptcha.execute(
        import.meta.env.VITE_RECAPTCHA_SITE_KEY,
        { action: 'view_contact' }
      );

      const response = await api.captcha.verifyToken(token);
      
      if (response.success && response.userContact) {
        onSuccess(response.userContact);
      } else {
        throw new Error('Verification failed');
      }
    } catch (error) {
      console.error('reCAPTCHA verification failed:', error);
      if (buttonRef.current) {
        buttonRef.current.textContent = 'Verification failed. Try again.';
        buttonRef.current.disabled = false;
      }
    } finally {
      isLoadingRef.current = false;
    }
  }, [onSuccess]);

  return (
    <div>
      <button
        ref={buttonRef}
        onClick={handleVerify}
        className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        View Contact Information
      </button>
      <p className="text-xs text-text-muted mt-2">
        Protected by reCAPTCHA
      </p>
    </div>
  );
}