import TextareaAutosizeProps from "react-textarea-autosize"

const AboutMe = ({aboutMe}) => {


    return (
        <div className="column gap-6">
            <p>{aboutMe.label}</p>
            <div className="cNoBDHSUSz border-radius-10 padding-x-10 padding-y-10" style={{
                backgroundColor: "var(--bg-color-4)",
            }}>
                <div className="label-container">
                    <label className="label" htmlFor="">This is about you</label>
                </div>
                <div className="column">
                    <TextareaAutosizeProps
                    name={aboutMe.name}
                    className="width-100pc"
                    minRows={2} maxRows={6} maxLength={200}
                    value={aboutMe.value}/>
                    <p style={{
                        alignSelf: "end"
                    }} className="fs-10">
                        <span>
                            {aboutMe.value.length}
                        </span> <span>
                            /
                        </span> <span>
                            200
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
