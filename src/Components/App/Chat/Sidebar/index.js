import { useSearch } from "../../../Contexts/SearchContext"
import { useUser } from "../../../Contexts/UserContext"
import DirectConversation from "./DirectConversation"

const Index = () => {
    const { selfUserDirectConversationsData } = useUser()
    const { setSearch } = useSearch()

    return (
        <div style={{
            width: "215px",
            minWidth: "215px",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "var(--bg-color-2)"
        }}>
            <div style={{
                height: "50px",
                minHeight: "50px",
                padding: "10px"
            }}>
                <input className="height-100pc width-100pc padding-x-6 padding-y-4 border-radius-4 fs-14" type="text" placeholder="Search for a Trainer" style={{
                    backgroundColor: "var(--bg-color-1)",
                }} onChange={(e) => setSearch(e.target.value)}/>
            </div>
            <div className="column padding-x-10" style={{
                height: "100%",
                borderTop: "1px solid var(--base-002)"
            }}>
                {selfUserDirectConversationsData && selfUserDirectConversationsData.map((directConversation) => (
                    <DirectConversation id={directConversation.id} directConversation={directConversation.direct_conversation} key={directConversation.id} users={directConversation.users} messages={directConversation.messages}/>
                ))}
            </div>
            <div style={{
                height: "50px",
                minHeight: "50px"
            }}>
            </div>
        </div>
    )
}

export default Index
