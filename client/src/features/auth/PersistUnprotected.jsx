import { Outlet } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useRefreshMutation } from "./authApiSlice";
import usePersist from "../../hooks/usePersist";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "./authSlice";

const PersistLogin = () => {
    const [persist] = usePersist();
    const token = useSelector(selectCurrentToken);
    const effectRan = useRef(false);

    const [refresh, { isUninitialized, isLoading, isSuccess, isError, error }] = useRefreshMutation();

    useEffect(() => {
        if (effectRan.current === true || process.env.NODE_ENV !== "development") {
            // React 18 Strict Mode

            const verifyRefreshToken = async () => {
                console.log("verifying refresh token");
                try {
                    await refresh();
                } catch (err) {
                    console.error(err);
                }
            };

            if (!token && persist) verifyRefreshToken();
        }

        return () => (effectRan.current = true);

        // eslint-disable-next-line
    }, []);

    return <Outlet />;
};
export default PersistLogin;
