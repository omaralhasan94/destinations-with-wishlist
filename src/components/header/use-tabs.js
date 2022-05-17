import React, { useMemo } from 'react';
import Destination from '../../icons/destination';
import Wishlist from '../../icons/wishlist';

const useTabs = () => {
    const tabs = useMemo(() => {
        return [
            { name: "Destination", order: 1, icon: (props) => <Destination {...props} /> },
            { name: "Wishlist", order: 2, icon: (props) => <Wishlist {...props} /> },
        ]
    }, [])

    const compare = (a, b) => {
        if (a.order < b.order) {
            return -1;
        }
        if (a.order > b.order) {
            return 1;
        }
        return 0;
    }

    const orderedTabs = useMemo(() => {
        const sortedArray = [...tabs]
        sortedArray.sort(compare)
        return sortedArray
    }, [tabs])

    return {
        tabs,
        orderedTabs
    }
}
export { useTabs }