"use client";

declare global {
  interface Window {
    gtag: (command: string, action: string, params?: object) => void;
    dataLayer: object[];
  }
}

const isProd = process.env.NODE_ENV === "production";

function gtag(event: string, params?: object) {
  if (!isProd) return;
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", event, params);
}

export function trackCallClick(city?: string) {
  gtag("call_click", { event_category: "Lead", event_label: city ?? "global", value: 1 });
}

export function trackWhatsAppClick(city?: string) {
  gtag("whatsapp_click", { event_category: "Lead", event_label: city ?? "global", value: 1 });
}

export function trackFormSubmit(city?: string) {
  gtag("quote_form_submit", { event_category: "Lead", event_label: city ?? "global", value: 2 });
}

export function trackCityPageView(cityName: string) {
  gtag("city_page_view", { event_category: "Engagement", event_label: cityName });
}
