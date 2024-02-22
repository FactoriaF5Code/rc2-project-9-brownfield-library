import { useLocation } from 'react-router-dom';

export const CurrentRouterComponent = () => {
    const location = useLocation();
    return <div style={ {position: "absolute", bottom: "0", width: "100%", backgroundColor: "red", color: "white"}}>
        [Development mode - React Router] Current route is: {location.pathname}
        {location.state && <span>{` and State is ${JSON.stringify(location.state)}`}</span>}
    </div>;
}