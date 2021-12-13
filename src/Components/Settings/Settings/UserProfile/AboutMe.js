import TextareaAutosizeProps from "react-textarea-autosize"
import Input from "../../../Assets/Input"

const AboutMe = ({aboutMe}) => {

    return (
        <div className="column gap-6">
            <p>{aboutMe.label}</p>
            <Input input={aboutMe} type="textarea" maxLength={200} minRows={2} maxRows={6}/>
        </div>
    )
}

export default AboutMe
