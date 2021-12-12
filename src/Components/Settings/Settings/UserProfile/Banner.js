const Banner = () => {
    return (
        <div className="pos-relative" style={{
            aspectRatio: "32/9",
            backgroundColor: "rgb(80,20,71)",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
        }}>
            <div style={{
                backgroundColor: "var(--text-color-2)",
                padding: "2px",
                position: "absolute",
                right: "0",
                top: "0",
                borderRadius: "50%",
                marginRight: "10px",
                marginTop: "10px"
            }}>
                <div className="badge-20">
                    <i class="fas fa-images" style={{
                        color: "var(--text-comp-color-1)"
                    }}></i>
                </div>
            </div>
        </div>
    )
}

export default Banner
