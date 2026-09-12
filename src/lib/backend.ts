/**
 * Backend availability flag.
 *
 * The demo/preview build works WITHOUT a Convex deployment: the reservation
 * form degrades to call/WhatsApp actions and auth routes are disabled.
 * Set VITE_CONVEX_URL to enable bookings + auth.
 */
export function isBackendConfigured(): boolean {
  const url = import.meta.env.VITE_CONVEX_URL as string | undefined;
  return !!url && url.startsWith("http");
}
