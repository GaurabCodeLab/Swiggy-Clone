import { useRouteError } from "react-router-dom";

const ErrorPage = ()=>{
    const routeError = useRouteError();
    console.log(routeError);
    return(
        <>
        <h1>OOPs....</h1>
        <h3>Something Went Wrong</h3>
        <h3>{routeError.status} : {routeError.statusText}</h3>
        </>
    )
};

export default ErrorPage;