import TeamProps from "./TeamProps";

const Team = () => {
    return(
        <>
            <div className="team-outer">
                <div className="container">
                    <h2>Our Team</h2>
                    <div className="team-inner">
                        <TeamProps address={"assets/image/teamprops1.jpg"} alter={"one"} first={"Sam Robinson"} sec={"Founder"} />
                        <TeamProps address={"assets/image/teamprops2.jpg"} alter={"two"} first={"Laureen Grant"} sec={"Receptionist"} />
                        <TeamProps address={"assets/image/teamprops3.jpg"} alter={"three"} first={"Jill Peterson"} sec={"Waitress"} />
                        <TeamProps address={"assets/image/teamprops4.jpg"} alter={"four"} first={"Olivia Smith"} sec={"Room Attendant"} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team