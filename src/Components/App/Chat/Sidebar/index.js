import { useState } from "react"
import { useSearch } from "../../../Contexts/SearchContext"
import { useUser } from "../../../Contexts/UserContext"
import DirectConversation from "./DirectConversation"
import User from "./User"

const Index = () => {
    const { selfUserDirectConversationsData, users, selfUser } = useUser()
    const [searchResults, setSearchResults] = useState()

    if(!users) return ""

    const handleSearch = (e) => {
        e.value.length == 0 ? setSearchResults() :
        setSearchResults(users.filter(o => o.id !== selfUser.id && o.user.username.toLowerCase().includes(e.value.toLowerCase())))
    }

    return (
        <div style={{
            width: "215px",
            minWidth: "215px",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "var(--bg-color-2)",
        }}>
            <div style={{
                height: "50px",
                minHeight: "50px",
                padding: "10px"
            }}>
                <input className="height-100pc width-100pc padding-x-6 padding-y-4 border-radius-4 fs-14" type="text" placeholder="Search for a Trainer" style={{
                    backgroundColor: "var(--bg-color-1)",
                }} onChange={(e) => handleSearch(e.target)}/>
            </div>
            <div className="column padding-x-10 padding-y-6 gap-2" style={{
                height: "calc(100% - 100px)",
                borderTop: "1px solid var(--base-002)",
                overflowY: "scroll"
            }}>
                {searchResults &&
                    <>
                        <div className="row space-between">
                            <p className="">
                                Results
                            </p>
                        </div>
                        {searchResults.map((result) => (
                            <User user={result.user} id={result.id} key={result.id}/>
                        ))}
                    </>
                }
                <div className="row space-between padding-x-6 padding-y-4">
                    <p className="ff-title" style={{
                        fontSize: "10px",
                        color: "var(--text-color-1)"
                    }}>Direct Messages</p>
                </div>
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
