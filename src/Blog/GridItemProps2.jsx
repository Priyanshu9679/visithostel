import { Link } from "react-router-dom"

const GridItemProps2 = (gip2) => {
    return(
        <>
        
            <div className="post-grid2-item">
                <div className="post-grid2-top">
                    <div className="post-grid2-left">
                        <img src={gip2.addressp} alt={gip2.alterp} className="post-grid2-profile"/>
                        <div className="post-grid2-name">BY <Link to="/" >{gip2.name}</Link></div>
                    </div>
                    <div className="post-grid2-right">{gip2.date}</div>
                </div>
                <div className="post-grid2-center">
                    <Link to="/" className="post-grid2-image">
                        <img src={gip2.address} alt={gip2.alter} />
                    </Link>
                </div>
                <Link to="/" className="post-grid2-bottom">{gip2.details}</Link>
            </div>

        </>
    )
}

export default GridItemProps2