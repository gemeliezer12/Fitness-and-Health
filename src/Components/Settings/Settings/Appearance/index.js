import { useTheme } from "../../../Contexts/ThemeContext"

const Index = () => {
    const { theme, setTheme } = useTheme()

    return (
        <div>
            <div className="column space-between">
                <p>Theme</p>
            </div>
            <div className="column gap-6">
                <div className="row gap-6 solid-btn justify-start" style={{
                    backgroundColor: "var(--bg-color-1)"
                }} onClick={() => setTheme("dark")}>
                    <div style={{
                        height: "26px",
                        width: "26px",
                        border: "4px solid var(--text-color-2)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "2px"
                    }}>
                        {theme === "dark" &&
                        <div style={{
                            height: "100%",
                            width: "100%",
                            backgroundColor: "var(--indigo)",
                            borderRadius: "200px"
                        }}>
                        </div>
                        }
                    </div>
                    <p style={{
                        color: "var(--text-color-2)"
                    }}>
                        Dark
                    </p>
                </div>
                <div className="row gap-6 solid-btn justify-start" style={{
                    backgroundColor: "var(--bg-color-1)"
                }} onClick={() => setTheme("light")}>
                    <div style={{
                        height: "26px",
                        width: "26px",
                        border: "4px solid var(--text-color-2)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "2px"
                    }}>
                        {theme === "light" &&
                        <div style={{
                            height: "100%",
                            width: "100%",
                            backgroundColor: "var(--indigo)",
                            borderRadius: "200px"
                        }}>
                        </div>
                        }
                    </div>
                    <p style={{
                        color: "var(--text-color-2)"
                    }}>
                        Light
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Index
