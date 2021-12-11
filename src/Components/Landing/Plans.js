const Plans = () => {
    return (
        <div className="padding-x-32">
            <div className="text-center">
                <p className="ff-title fs-32">
                    Choose your plan
                </p>
                <p className="fs-20">
                    We prepared <span style={{
                        color: "var(--text-color-2)"
                    }}>three flexible plans</span> to choose from. It depends what you demand from your banking experience.
                </p>
            </div>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)"
            }}>
                <div className="XmX5263cNA column padding-all-20" style={{
                    height: "100px",
                    backgroundColor: "var(--bg-color-4)",
                    lineHeight: "133%"
                }}>
                    <p className="ff-title" style={{
                        color: "white"
                    }}>Basic Plan</p>
                </div>
            </div>
        </div>
    )
}

export default Plans
