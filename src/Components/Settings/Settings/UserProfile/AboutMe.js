import TextareaAutosizeProps from "react-textarea-autosize"

const AboutMe = ({aboutMe}) => {


    return (
        <div className="column gap-6">
            <p>{aboutMe.label}</p>
            <div className="border-radius-10 row padding-x-10 padding-y-10" style={{
                backgroundColor: "var(--bg-color-4)",
                display: "grid",
                gridTemplateColumns: "1fr 20px"
            }}>
                <TextareaAutosizeProps
                name={aboutMe.name}
                className="width-100pc"
                minRows={2} maxRows={6} maxLength={200}
                value={aboutMe.value}/>
                <div className="column space-between align-end space-between">
                    <div/>
                    <p className="fs-10">{200 - aboutMe.value.length}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
