const Index = ({setCurrentSetting}) => {

    return (
        <div>
            <div className="column space-between">
                <p>Theme</p>
            </div>
            <div className="column gap-6">
                <div className="row gap-6 solid-btn justify-start" style={{
                    backgroundColor: "var(--bg-color-1)"
                }}>
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
                        <div style={{
                            height: "100%",
                            width: "100%",
                            backgroundColor: "var(--indigo)",
                            borderRadius: "200px"
                        }}>

                        </div>
                    </div>
                    <p>
                        Dark
                    </p>
                </div>
                <div className="row gap-6 solid-btn justify-start" style={{
                    backgroundColor: "var(--bg-color-1)"
                }}>
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
                        <div style={{
                            height: "100%",
                            width: "100%",
                            borderRadius: "200px"
                        }}>

                        </div>
                    </div>
                    <p>
                        Light
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Index
