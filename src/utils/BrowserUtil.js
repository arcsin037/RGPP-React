import * as BrowserType from 'constants/BrowserType'

/**
 * Browser Utility Functions
 *
 * @module BrowserUtil
 * @author arcsin
 * @constructor
 */

/**
 * Whether user's browser is opera or not.
 * @method isOpera
 * @return Whether user's browser is opera
 * @private
 */
export const isOpera = () => {
  // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
  return !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0
}

/**
 * Whether user's browser is firefox or not.
 * @method isFirefox
 * @return Whether user's browser is firefox or not
 * @private
 */
export const isFirefox = () => {
  return typeof InstallTrigger !== 'undefined' // Firefox 1.0+
}

/**
 * Whether user's browser is safari or not.
 * @method isSafari
 * @return Whether user's browser is safari or not
 * @private
 */
export const isSafari = () => {
  // At least Safari 3+: '[object HTMLElementConstructor]'
  // const isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0
  return Reflect.apply(Object.prototype.toString, window.HTMLElement, []).indexOf('Constructor') > 0
}

/**
 * Whether user's browser is google chrome or not.
 * @method isChrome
 * @return Whether user's browser is google chrome or not.
 * @private
 */
export const isChrome = () => {
  return !!window.chrome && !isOpera() // Chrome 1+
}

/**
 * Whether user's browser is Internet Explorer or not.
 * @method isIE
 * @return Whether user's browser is Internet Explorer or not.
 * @private
 */
export const isIE = () => {
  return /* @cc_on!@ */ false || !!document.documentMode // At least IE6
}

/**
 * Extract IE version from user agent.
 *
 * @method extractIEVerStr
 * @return {String} IE version
 * @private
 */
export const extractIEVerStr = () => {
  // userAgent
  const nvUA = navigator.userAgent

  // search 'msie' or 'MSIE' or 'rv:'
  const bwVer = nvUA.match(/((msie|MSIE)\s|rv:)([\d.]+)/)[3]

  return bwVer
}

/**
 * Extract FireFox version from user agent.
 *
 * @method extractFireFoxVerStr
 * @return {String} FireFox version
 * @private
 */
export const extractFireFoxVerStr = () => {
    // userAgent
  const nvUA = navigator.userAgent
        // search 'FireFox'
  const cutSt = nvUA.indexOf('Firefox')
        // end of user agent
  const cutEd = nvUA.length

    // cut off 'Firefox'+'/'= 8 character
  const bwVer = nvUA.substring(cutSt + 8, cutEd)

  return bwVer
}

/**
 * Extract Opera version from user agent.
 *
 * @method extractOperaVerStr
 * @return {String} Opera version
 * @private
 */
export const extractOperaVerStr = () => {
  // userAgent
  const nvUA = navigator.userAgent
  // search 'Version'
  const cutSt = nvUA.indexOf('Version')
  // end of user agent
  const cutEd = nvUA.length

  // cut off 'Version'+'/'= 8 character
  const bwVer = nvUA.substring(cutSt + 8, cutEd)

  return bwVer
}

/**
 * Extract Google chrome version from user agent.
 *
 * @method extractChromeVerStr
 * @return {String} Google chrome version
 * @private
 */
export const extractChromeVerStr = () => {
  // userAgent
  const nvUA = navigator.userAgent
  // search 'Chrome'
  const cutSt = nvUA.indexOf('Chrome')
  // search ' '
  const cutEd = nvUA.indexOf(' ', cutSt)

  // cut off 'Chrome/'= 7 character
  const bwVer = nvUA.substring(cutSt + 7, cutEd)

  return bwVer
}

/**
 * Extract Safari version from user agent.
 *
 * @method extractSafariVerStr
 * @return {String} Safari version
 * @private
 */
export const extractSafariVerStr = () => {
  // userAgent
  const nvUA = navigator.userAgent
  // search 'Version'
  const cutSt = nvUA.indexOf('Version')
  // search ' '
  const cutEd = nvUA.indexOf(' ', cutSt)

  // cut off 'Version/'= 8 character
  const bwVer = nvUA.substring(cutSt + 8, cutEd)

  return bwVer
}

/**
 * Detecting browser type and version of the user
 * @method getUserBrowserInfo
 * @return {Object} browser version & type
 */
export const getUserBrowserInfo = () => {
  let bwVerStr = 0
  let bwType = null

  if (isIE()) {
    // IE
    bwVerStr = extractIEVerStr()
    bwType = BrowserType.BROWSER_TYPE_IE
  } else if (isOpera()) {
    // Opera
    bwVerStr = extractOperaVerStr()
    bwType = BrowserType.BROWSER_TYPE_OPERA
  } else if (isSafari()) {
    // Safari
    bwVerStr = extractSafariVerStr()
    bwType = BrowserType.BROWSER_TYPE_SAFARI
  } else if (isChrome()) {
    // Chrome
    bwVerStr = extractChromeVerStr()
    bwType = BrowserType.BROWSER_TYPE_CHROME
  } else if (isFirefox()) {
    // FireFox
    bwVerStr = extractFireFoxVerStr()
    bwType = BrowserType.BROWSER_TYPE_FIREFOX
  } else {
    // Other browser
    bwType = BrowserType.BROWSER_TYPE_OTHER
  }

  const bwVer = parseInt(bwVerStr, 10)
  return {
    type: bwType,
    version: bwVer
  }
}

export default {
  getUserBrowserInfo
}
