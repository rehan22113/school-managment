import { store } from "../../app/store";
// import { listingsApiSlice } from '../listing/listingsApiSlice';
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Prefetch = () => {
    useEffect(() => {
        // store.dispatch(projectsApiSlice.util.prefetch('getProjects', 'projectsList', { force: true }))
        // store.dispatch(listingsApiSlice.util.prefetch('getListings', 'listingsList', { force: true }))
    }, []);

    return <Outlet />;
};
export default Prefetch;
