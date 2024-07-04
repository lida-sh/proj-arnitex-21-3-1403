export const toPersianString = (str: string): string => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const arabicToPersianChars: { [key: string]: string } = {
    ي: "ی",
    ك: "ک",
    // Add more mappings here if needed
  };
  const arabicToPersianDigits: { [key: string]: string } = {
    "٠": "۰",
    "١": "۱",
    "٢": "۲",
    "٣": "۳",
    "٤": "۴",
    "٥": "۵",
    "٦": "۶",
    "٧": "۷",
    "٨": "۸",
    "٩": "۹",
  };

  let output = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!isNaN(parseInt(char))) {
      output += persianDigits[parseInt(char)];
    } else if (arabicToPersianChars[char]) {
      output += arabicToPersianChars[char];
    } else if (arabicToPersianDigits[char]) {
      output += arabicToPersianDigits[char];
    } else {
      output += char;
    }
  }
  return output;
};


export function isStringInRange(value: any, min: number, max: number): boolean {
  // Check if the value is a string
  if (typeof value !== "string") {
    // throw new Error('Value must be a string.');
    return false;
  }

  const length = value.trim().length;
  // Check if the length falls within the specified range
  return length >= min && length <= max;
}

export function isEmail(value: any): boolean {
  // Check if the value is a string
  if (typeof value !== "string") {
    return false;
  }

  // Regular expression pattern for basic email validation
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test if the value matches the email pattern
  return emailRegex.test(value);
}

/**
 * Format a number to include comma as thousand separator for both integer and fractional parts.
 * @param {number} num - The number to be formatted.
 * @param {number} decimals - The number of decimal places to keep.
 * @returns {string} - The formatted number as a string.
 */
export function formatNumber(num: number, decimals: number): string {
  // Split the number into integer and fractional parts
  const parts = num.toFixed(decimals).split(".");

  // Format the integer part with commas
  const integerPart = parseInt(parts[0], 10).toLocaleString("en-US");

  // Format the fractional part if it exists
  let decimalPart = parts[1] ? parts[1].match(/.{1,3}/g)?.join(",") : "";

  // Combine the integer and fractional parts
  return decimalPart ? `${integerPart}.${decimalPart}` : integerPart;
}
