import dev from "../assets/style/images/dev.png";
import { Image } from "primereact/image";

const AppInfo = () => {
  return (
    <div className="app__info">
      <Image
        src={dev}
        alt="Image"
        width="250"
        className="flex justify-center"
      />
    </div>
  );
};

export default AppInfo;
