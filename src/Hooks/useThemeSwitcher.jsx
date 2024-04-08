import { useEffect, useState } from 'react'

const useThemeSwitcher = () => {

    const preferTheme = "(prefer-color-scheme:dark)"
    const [mode, setMode] = useState("")



    useEffect(() => {
        const mediaQuery = window.matchMedia(preferTheme);
        const usePreference = window.localStorage.getItem("theme");
        const handleChange = () => {
            if (usePreference) {
                let check = usePreference === "dark" ? "dark" : "light"
                setMode(check)
                if (check === "dark") {
                    document.documentElement.classList.add("dark")
                }
                else {

                    document.documentElement.classList.remove("dark")
                }
            }
            else {
                let check = mediaQuery.matches ? "dark" : "light"
                setMode(check)

                if (mode === "dark") {
                    document.createElement.classList.add("dark")
                }
                else {
                    document.createElement.classList.remove("dark")

                }
            }
        }

        mediaQuery.addEventListener("change", handleChange)
        return () => mediaQuery.removeEventListener("change", handleChange)

    }, [])

    useEffect(() => {
        if (mode === "dark") {
            window.localStorage.setItem("theme", "dark")
            document.documentElement.classList.add("dark")
        }
        if (mode === "light") {
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark")

        }
    }, [mode])
    return [mode, setMode]
}

export default useThemeSwitcher


