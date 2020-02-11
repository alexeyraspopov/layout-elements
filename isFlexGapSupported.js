export function isFlexGapSupported() {
  if (isFlexGapSupported.memoized != null) return isFlexGapSupported.memoized;
  let container = document.createElement('div');
  container.style.cssText = 'display: flex; flex-direction: column; gap: 1px';
  container.appendChild(document.createElement('div'));
  container.appendChild(document.createElement('div'));
  document.body.appendChild(container);
  let isSupported = container.scrollHeight === 1;
  document.body.removeChild(container);
  isFlexGapSupported.memoized = isSupported;
  return isSupported;
}
