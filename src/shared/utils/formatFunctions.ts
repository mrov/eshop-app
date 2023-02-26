export function trimString(string: string, length: number = 10) {
  return string.substring(0, length) + '...';
}
