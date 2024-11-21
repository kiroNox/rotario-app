import { useState, useEffect } from 'react';
export function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(true);
    useEffect(() => {
      function handleOnline() {
        setIsOnline(true);
      }
      function handleOffline() {
        setIsOnline(false);
      }
      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);
      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      };
    }, []);
    return isOnline;
  }

// useCostume hook for validate email
export function useValidateEmail(email) {
    const [emailError, setEmailError] = useState(false);
    useEffect(() => {
        setEmailError(false);
      if (!email) {
        setEmailError("El correo es requerido");
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setEmailError("El correo es inválido");
      }
    }, [email]);
    return emailError;
  }

  export function useValidatePassword(password) {
    const [passwordError, setPasswordError] = useState(false);
    useEffect(() => {
        setPasswordError(false);
      if (!password) {
        setPasswordError("La contraseña es requerida");
      } else if (password.length < 6 || password.length > 20) {
        setPasswordError("La contraseña debe tener al menos 8 caracteres");
      }
    //  else if(!/^(?=.*?[A-Z]).{1,}$/.test(password)){
      //  setPasswordError("La contraseña debe tener al menos una letra mayúscula");
      //}
      else if(!/^(?=.*?[a-z]).{1,}$/.test(password)){
        setPasswordError("La contraseña debe tener al menos una letra minúscula");
      }
      else if(!/^(?=.*?[0-9]).{1,}$/.test(password)){
        setPasswordError("La contraseña debe tener al menos un numero");
      }
    }, [password]);
    return passwordError;
  }

