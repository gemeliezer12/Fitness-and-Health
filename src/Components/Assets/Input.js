const Input = ({input}) => {

    return (
        <div className={`cNoBDHSUSz padding-x-10 padding-y-6 border-radius-10${input.value !== "" ? " filled" : ""}`} style={{
            backgroundColor: "var(--bg-color-5)",
        }}>
            {input.isRequired ? 
            <>
                <div className="label-container">
                    <div className="label">
                        <label htmlFor={input.name}>{input.label}<span style={{
                            color: "var(--red)"
                        }}>*</span></label>
                    </div>
                </div>
                <div className="column">
                    <input name={input.name} type={input.type} required value={input.value}/>
                </div>
            </>
            :
            <>
                <div className="label-container">
                    <div className="label">
                        <label htmlFor={input.name}>{input.label}</label>
                    </div>
                </div>
                <div className="column">
                    <input name={input.name} type={input.type} value={input.value}/>
                </div>
            </>
            }
        </div>
    )
}

export default Input
