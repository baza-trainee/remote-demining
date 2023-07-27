'use client';
import ReCAPTCHA from 'react-google-recaptcha';

const ReCaptchaProvider = ({ children }: { children: React.ReactNode }) => {
  return <ReCAPTCHA sitekey="Your client site key" />;
};

export default ReCaptchaProvider;
