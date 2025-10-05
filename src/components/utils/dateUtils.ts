/**
 * Returns the current date and time as a single number formatted as DDHHMM.
 * 
 * @returns {number} A number representing the current day, hour, minute, and second.
 * @example
 * // If the date is October 6th, 2025, 00:28:36
 * // Returns 6002836
 */
export function getCurrentDateTimeAsNumber(): number {
  const now = new Date();

  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const formattedDate = `${day}${hours}${minutes}`;

  return parseInt(formattedDate, 10);
}

/**
 * Returns the current date as a string formatted as DD/MM/YYYY.
 * 
 * @returns {string} The formatted date string.
 */
export function getFormattedDate(): string {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const year = now.getFullYear();

  return `${day}/${month}/${year}`;
}
