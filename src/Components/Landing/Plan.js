const Plan = ({plan, id}) => {
    return (
        <div className="XmX5263cNA padding-all-32 column gap-32" style={{
            backgroundColor: "var(--bg-color-4)",
        }}>
            <div>
                <p className="ff-title">{plan.name}</p>
            </div>
            <div>
                <span className="fs-32" style={{
                    color: "var(--text-color-2)"
                }}>
                    {plan.payment.symbol}{plan.payment.price}
                </span> <span className="fw-700">
                    /{plan.payment.duration}
                </span>
            </div>
            <div style={{
                border: "1px solid var(--bg-color-5)"
            }}/>
            <div dangerouslySetInnerHTML={{__html: plan.description}}>
            </div>
            <div className="solid-btn iGeeEa3h6v">
                <p>
                    Get Started
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
    )
}

export default Plan
