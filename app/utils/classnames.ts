export default function classnames(...all: (string | boolean)[]): string {
  return all.filter(Boolean).join(" ");
}
