const User = ({user, id}) => {
    return (
        <div className="row space-between padding-x-6 padding-y-4">
            <div className="row gap-6 align-center">
                <div className="img-32 img">
                    <img src="../../../../images/profile.png" alt=""/>
                </div>
                <p>
                    {user.username}
                </p>
            </div>
        </div>
    )
}

export default User
