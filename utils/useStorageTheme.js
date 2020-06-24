import { useState, useEffect } from 'react'

/**
 * Gets user preferences from local storage
 * @param {string} key - localStorage key
 * @return {array} getter and setter for user preferred theme
 */
function useStorageTheme(key) {
  const [theme, setTheme] = useState(JSON.parse(window.localStorage.getItem(key)))

  // update stored theme
  useEffect(() => {
    window.localStorage.setItem(key, theme)
  }, [theme, key])

  return [theme, setTheme]
}

export default useStorageTheme
