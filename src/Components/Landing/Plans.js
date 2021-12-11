import Plan from "./Plan"

const Plans = () => {
    return (
        <div className="padding-x-32 padding-y-80">
            <div className="text-center column gap-10">
                <p className="ff-title fs-32">
                    Choose your plan
                </p>
                <p className="fs-20">
                    We prepared <span style={{
                        color: "var(--text-color-2)"
                    }}>three flexible plans</span> to choose from. It depends what you demand from your banking experience.
                </p>
            </div>
            <div className="MiEWhFVt9T margin-top-40">
                <Plan/>
            </div>
        </div>
    )
}

export default Plans
