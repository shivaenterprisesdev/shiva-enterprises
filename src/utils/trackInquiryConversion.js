export function trackInquiryConversion() {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return

  // Tracking failures must not prevent visitors from opening their enquiry.
  try {
    window.gtag('event', 'conversion', {
      send_to: 'AW-680402939/LnmlCI6-nfAcEPu_uMQC',
    })
  } catch {
    // The contact action remains available when tracking is blocked.
  }
}
