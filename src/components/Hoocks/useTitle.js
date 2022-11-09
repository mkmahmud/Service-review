import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Mk`;
    }, [title])
};

export default useTitle;