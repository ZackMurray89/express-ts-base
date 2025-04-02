export default function formatUptime(seconds: number): string {
  const units = [
    { label: "Y", value: Math.floor(seconds / (365 * 24 * 60 * 60)) },
    { label: "M", value: Math.floor(seconds / (30.44 * 24 * 60 * 60)) },
    { label: "D", value: Math.floor(seconds / (24 * 60 * 60)) },
    { label: "H", value: Math.floor(seconds / (60 * 60)) },
    { label: "Min", value: Math.floor(seconds / 60) },
    { label: "Sec", value: Math.floor(seconds % 60) },
  ];

  return units
    .filter(({ value }) => value > 0)
    .map(({ value, label }) => `${value} ${label}`)
    .join(" ");
}
