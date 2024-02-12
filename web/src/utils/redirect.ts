export function redirect(url: string | undefined) {
  return window.open(url, "_blank");
}
