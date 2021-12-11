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
            <div className="MiEWhFVt9T">
                <div className="XmX5263cNA padding-all-32 column gap-32" style={{
                    backgroundColor: "var(--bg-color-4)",
                }}>
                    <div>
                        <p className="ff-title">Basic Plan</p>
                    </div>
                    <div>
                        <span className="fs-32" style={{
                            color: "var(--text-color-2)"
                        }}>
                            $9
                        </span> <span className="fw-700">
                            /Month
                        </span>
                    </div>
                    <div style={{
                        border: "1px solid var(--bg-color-5)"
                    }}/>
                    <div>
                        <p>
                            Starter pack <span style={{
                                color: "var(--text-color-2)"
                            }}>
                                for non demanding users. 
                            </span>
                            It gives you a lot of freedom and some limitations
                        </p>
                    </div>
                    <div className="column">
                        <div className="row gap-10 align-center">
                            <div className="badge-16" style={{
                                background: "var(--indigo-fuchsia)"
                            }}>
                                <i className="fas fa-check fs-10"></i>
                            </div>
                            <p className="ff-misc">Free Card</p>
                        </div>
                        <div className="row gap-10 align-center">
                            <div className="badge-16" style={{
                                background: "var(--indigo-fuchsia)"
                            }}>
                                <i className="fas fa-check fs-10"></i>
                            </div>
                            <p className="ff-misc">Free Transactions</p>
                        </div>
                        <div className="row gap-10 align-center">
                            <div className="badge-16" style={{
                                background: "var(--indigo-fuchsia)"
                            }}>
                                <i className="fas fa-check fs-10"></i>
                            </div>
                            <p className="ff-misc">Dedicated App</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plans
