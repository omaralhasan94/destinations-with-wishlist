import React, { useMemo, useState } from "react";
import Destination from "../../icons/destination";
import Wishlist from "../../icons/wishlist";
import { usePathname } from "../../common-hooks/use-path-name";
import { useNavigateHook } from "../../common-hooks/use-navigate";
const useTabs = () => {
  const { pathname } = usePathname();
  const { navigate } = useNavigateHook();
  const tabs = useMemo(() => {
    return [
      {
        order: 1,
        name: "Destinations",
        path: "/",
        icon: (props) => <Destination {...props} />,
      },

      {
        order: 2,
        name: "Wishlist",
        path: "/wishlist",
        icon: (props) => <Wishlist {...props} />,
      },
    ];
  }, []);

  const compare = (a, b) => {
    if (a.order < b.order) {
      return -1;
    }
    if (a.order > b.order) {
      return 1;
    }
    return 0;
  };

  const orderedTabs = useMemo(() => {
    const sortedArray = [...tabs];
    sortedArray.sort(compare);
    return sortedArray;
  }, [tabs]);

  const pushToRouter = (path) => {
    navigate(path);
  };
  return {
    tabs,
    orderedTabs,
    pathname,
    pushToRouter,
  };
};
export { useTabs };
