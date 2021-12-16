const Message = () => {
    return (
        <div className="row" style={{
            display: "flex",
            flexDirection: "row",
            gap: "6px"
        }}>
            <div className="img-32 img">
                <img src={`../../../../images/profile.png`} alt="" />
            </div>
            <div style={{
                width: "100%",
                display: "flex",
                flexDirection: "column"
            }}>
                <div className="flex space-between">
                    <div className="row gap-6">
                    </div>
                </div>
                <p>
                    {message.message.message}
                </p>
            </div>
        </div>
    )
}

export default Message
