import { Link } from "react-router-dom"

const GridItemProps = (gip) => {
    return (
        <>
            <div className="post-grid-item">
                <Link to="/" className="post-grid-image">
                    <img src={gip.address} alt={gip.alter} />
                    <div className="post-grid-date">{gip.date}<span>{gip.month}</span></div>
                </Link>
                <div className="post-grid-info">
                    <Link to="/" className="post-grid-first">{gip.first}</Link>
                    <div className="post-grid-sec">{gip.sec}</div>
                </div>
            </div>
        </>
    )
}

export default GridItemProps