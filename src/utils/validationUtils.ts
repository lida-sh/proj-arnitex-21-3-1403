// Function to validate email
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to validate Iranian phone number
export function isIranianPhoneNumber(phoneNumber: string): boolean {
  const iranPhoneRegex = /^(\+98|0)?9\d{9}$/;
  return iranPhoneRegex.test(phoneNumber);
}

// Function to check if input is either a valid email or an Iranian phone number
export function isEmailOrIranianPhoneNumber(input: string): boolean {
  return isValidEmail(input) || isIranianPhoneNumber(input);
}
