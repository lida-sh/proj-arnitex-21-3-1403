// Enum to represent validation error types
export enum ValidationErrorType {
  None,
  InvalidEmail,
  InvalidPhoneNumber,
  InvalidInput,
  EmptyInput,
  InvalidPassword,
}

// Enum to represent validation error types for password
export enum PasswordValidationErrorType {
  None,
  TooShort,
  MissingUpperCase,
  MissingLowerCase,
  MissingDigit,
  MissingSpecialCharacter,
  InvalidPassword,
  EmptyInput,
}

// Function to validate if a string is empty
export function isEmptyString(value: any): boolean {
  // Check if the value is null or undefined
  if (value === null || value === undefined) {
    return true;
  }
  // Check if the value is an empty string
  if (typeof value === "string" && value.trim() === "") {
    return true;
  }
  return false;
}

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
// Function to validate US phone number
export function isUSPhoneNumber(phoneNumber: string): boolean {
  const usPhoneRegex = /^(\+1|1)?\d{10}$/;
  return usPhoneRegex.test(phoneNumber);
}

// Function to validate phone number for various countries
export function isValidPhoneNumber(phoneNumber: string): boolean {
  return isIranianPhoneNumber(phoneNumber);
}

// Function to check if input is either a valid email or a phone number
export function isEmailOrPhoneNumber(input: string): boolean {
  return isValidEmail(input) || isIranianPhoneNumber(input);
}

// Functions to validate different password requirements
/**
 * Check if the input has the minimum required length
 * @param value - The string to validate
 * @param minLength - The minimum length required
 * @returns boolean - True if the string meets the minimum length, false otherwise
 */
export function hasMinimumLength(
  value: string,
  minLength: number = 8
): boolean {
  return value.length >= minLength;
}

/**
 * Check if the input contains at least one uppercase letter
 * @param value - The string to validate
 * @returns boolean - True if the string contains an uppercase letter, false otherwise
 */
export function hasUpperCaseLetter(value: string): boolean {
  return /[A-Z]/.test(value);
}

/**
 * Check if the input contains at least one lowercase letter
 * @param value - The string to validate
 * @returns boolean - True if the string contains a lowercase letter, false otherwise
 */
export function hasLowerCaseLetter(value: string): boolean {
  return /[a-z]/.test(value);
}

/**
 * Check if the input contains at least one digit
 * @param value - The string to validate
 * @returns boolean - True if the string contains a digit, false otherwise
 */
export function hasDigit(value: string): boolean {
  return /\d/.test(value);
}

/**
 * Check if the input contains at least one special character
 * @param value - The string to validate
 * @returns boolean - True if the string contains a special character, false otherwise
 */
export function hasSpecialCharacter(value: string): boolean {
  return /[@$!%*?&]/.test(value);
}

/**
 * Validate the input based on multiple requirements for password
 * @param value - The string to validate
 * @returns boolean - True if the string is a valid password, false otherwise
 */
export function isValidPassword(value: string): boolean {
  return (
    hasMinimumLength(value) &&
    // hasUpperCaseLetter(value) &&
    // hasLowerCaseLetter(value) &&
    // hasSpecialCharacter(value) &&
    hasDigit(value)
  );
}

// Function to validate input and get error type
export function getValidationErrorType(input: string): ValidationErrorType {
  if (isEmptyString(input)) {
    return ValidationErrorType.EmptyInput;
  }
  if (isValidEmail(input)) {
    return ValidationErrorType.None;
  } else if (isIranianPhoneNumber(input)) {
    return ValidationErrorType.None;
  } else if (/@/.test(input)) {
    // Check if input looks like an email
    return ValidationErrorType.InvalidEmail;
  } else if (/^\d+$/.test(input)) {
    // Check if input contains only digits
    return ValidationErrorType.InvalidPhoneNumber;
  } else {
    return ValidationErrorType.InvalidInput;
  }
}

// Function to validate input and get error type for password
/**
 * Validate the input string for password and determine the type of validation error, if any
 * @param input - The input string to validate
 * @returns PasswordValidationErrorType - The type of validation error
 */
export function getValidationErrorTypeForPassword(
  input: string
): PasswordValidationErrorType {
  if (isEmptyString(input)) {
    return PasswordValidationErrorType.EmptyInput;
  }
  if (!hasMinimumLength(input)) {
    return PasswordValidationErrorType.TooShort;
  }
  // if (!hasUpperCaseLetter(input)) {
  //   return PasswordValidationErrorType.MissingUpperCase;
  // }
  // if (!hasLowerCaseLetter(input)) {
  //   return PasswordValidationErrorType.MissingLowerCase;
  // }
  if (!hasDigit(input)) {
    return PasswordValidationErrorType.MissingDigit;
  }
  // if (!hasSpecialCharacter(input)) {
  //   return PasswordValidationErrorType.MissingSpecialCharacter;
  // }
  return PasswordValidationErrorType.None;
}
