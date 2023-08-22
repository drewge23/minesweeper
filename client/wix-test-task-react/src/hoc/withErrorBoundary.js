import {useEffect, useState} from "react";

const withErrorBoundary = (WrappedComponent) => {
    return (props) => {
        const [hasError, setHasError] = useState(false);
        const [errorInfo, setErrorInfo] = useState(null);

        useEffect(() => {
            const handleComponentError = (error, errorInfo) => {
                setHasError(true);
                setErrorInfo(errorInfo);
            };

            window.addEventListener('error', handleComponentError);

            return () => {
                window.removeEventListener('error', handleComponentError);
            };
        }, []);

        if (hasError) {
            return <div>Something went wrong. Please try again later.</div>;
        }

        return <WrappedComponent {...props} />;
    };
};

export default withErrorBoundary