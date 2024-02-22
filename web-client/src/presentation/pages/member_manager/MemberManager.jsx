import { Link } from 'react-router-dom';

export const MemberManager = () => {
    return (
        <div className="btn-access-group">
            <Link to="new">
                <button className="btn-access">Add Member</button>
            </Link>
        </div>
    )
}
