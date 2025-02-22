export function getRandomColor(): string {
  const colors: string[] = [
    "#861b5b",
    "#54ff9e",
    "#08a43c",
    "#339171",
    "#2c7bc4",
    "#627aab",
    "#4f6d7a",
    "#23918b",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
