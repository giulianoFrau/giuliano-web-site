import { Menubar } from "primereact/menubar";

const AppMenu = () => {
  const items = [
    { label: "Home", icon: "pi pi-home", url: "#home" },
    { label: "Le mie skills", icon: "pi pi-star", url: "#skills" },
    {
      label: "Su di me",
      icon: "pi pi-user",
      url: "#contacts",
    },
  ];

  return (
    <div className="flex justify-center pt-5  bg-gradient-to-r from-black via-gray-900 to-black">
      <Menubar
        model={items}
        className=" shadow-md p-4 border-gray-100 bg-transparent w-full lg:justify-center"
      />
    </div>
  );
};

export default AppMenu;
