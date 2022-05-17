
import style from './style.module.scss';
import { useTabs } from './use-tabs';
const Header = () => {
    const { orderedTabs } = useTabs();
    return (
        <div className={style.headerContainer}>
            <div className={style.tabContainer}>
                {orderedTabs.map(
                    (tab) => {
                        const Icon = tab.icon
                        return (
                            <div className={style.tab} key={tab.name}>
                                <Icon />
                                <div>{tab.name}</div>
                            </div>
                        )
                    }
                )}
            </div>
        </div>
    )
}

export default Header;