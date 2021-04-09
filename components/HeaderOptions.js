import { HeaderOption } from ".";
import {
    SearchIcon,
    PhotographIcon,
    PlayIcon,
    NewspaperIcon,
    MapIcon,
    DotsVerticalIcon,
} from "@heroicons/react/outline";

const HeaderOptions = () => {
    return (
        <div className="headerOptions__Container">
            <div className="flex space-x-3 sm:space-x-6">
                <HeaderOption Icon={SearchIcon} title="All" selected />
                <HeaderOption Icon={PhotographIcon} title="Images" />
                <HeaderOption Icon={PlayIcon} title="Videos" />
                <HeaderOption Icon={NewspaperIcon} title="News" />
                <HeaderOption Icon={MapIcon} title="Maps" />
                <HeaderOption Icon={DotsVerticalIcon} title="More" />
            </div>
            <div className="flex space-x-4">
                <p className="link">Settings</p>
                <p className="link">Tools</p>
            </div>
        </div>
    );
};

export default HeaderOptions;
