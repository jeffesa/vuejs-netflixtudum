/**
 * @param {Object} window - window object
 * @returns {boolean} returns true if the operating system is iOS
 * @see https://stackoverflow.com/questions/9038625/detect-if-device-is-ios
 */
export function isIos(window) {
  return (/iPhone|iPod/.test(window.navigator.userAgent) && !window.MSStream)
    || (window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1)
}

/**
 * @param {Object} window - window object
 * @returns {boolean} returns true if the operating system is Android
 */
export function isAndroid(window) {
  return /android/i.test(window.navigator.userAgent)
}
