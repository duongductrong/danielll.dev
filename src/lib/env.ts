export const isDev = import.meta.env.DEV;
export const isProd = import.meta.env.PROD;
export const isSSR = import.meta.env.SSR;
export const baseUrl = import.meta.env.BASE_URL;

/**
 * Performance-heavy dev tooling is opt-in so route profiling reflects app cost.
 * Enable with:
 * - VITE_ENABLE_REACT_SCAN=true
 * - VITE_ENABLE_TANSTACK_DEVTOOLS=true
 */
export const enableReactScan =
  isDev && import.meta.env.VITE_ENABLE_REACT_SCAN === "true";
export const enableTanStackDevtools =
  isDev && import.meta.env.VITE_ENABLE_TANSTACK_DEVTOOLS === "true";
