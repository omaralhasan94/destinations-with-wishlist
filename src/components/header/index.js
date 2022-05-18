import style from "./style.module.scss";
import { useTabs } from "./use-tabs";
const Header = () => {
  const { orderedTabs, pathname, pushToRouter } = useTabs();

  return (
    <div className={style.headerContainer}>
      <div className={style.tabContainer}>
        {orderedTabs.map((tab) => {
          const Icon = tab.icon;
          const isSelected = pathname == tab.path.toLocaleLowerCase();
          const primaryColor = isSelected && "red";
          return (
            <div
              className={[style.tab, isSelected && style.activeTab].join(" ")}
              key={tab.order}
              onClick={() => pushToRouter(tab.path)}
            >
              <Icon primaryColor={primaryColor} />
              <div>{tab.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
