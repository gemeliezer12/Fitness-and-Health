import { useUser } from "../../Contexts/UserContext"
import Sidebar from "./Sidebar/"
import Main from "./Main/"
import { useParams } from "react-router-dom"

const Index = () => {
    const { selfUser } = useUser()
    const { currentDirectConversationId } = useParams()
    
    if (!selfUser) return ""

    return (
        <>
            <Sidebar/>
            <div style={{
                width: "100%",
                backgroundColor: "var(--bg-color-3)",
                display: "flex",
                flexDirection: "column",
                overflowY: "hidden"
            }}>
                { currentDirectConversationId && <Main/>}
            </div>
        </>
    )
}

export default Index
