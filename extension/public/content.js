// Content script for attention tracking (placeholder)
(function () {
  let lastActive = Date.now();
  let attentionSeconds = 0;

  function updateActivity() {
    lastActive = Date.now();
  }

  window.addEventListener('mousemove', updateActivity);
  window.addEventListener('keydown', updateActivity);
  window.addEventListener('focus', updateActivity);

  setInterval(() => {
    // If user was active in the last 30s, count as attention
    if (Date.now() - lastActive < 30000) {
      attentionSeconds++;
      // Optionally send message to background or popup
      // window.postMessage({ type: 'POA_ATTENTION_TICK', attentionSeconds }, '*');
    }
  }, 1000);

  // Expose for debugging
  window.__POA_ATTENTION_SECONDS = () => attentionSeconds;
})();
