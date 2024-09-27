import { Menubar } from "primereact/menubar";

const AppMenu = () => {
  const items = [
    { label: "HomePage", icon: "pi pi-home", url: "/" },
    { label: "Servizi", icon: "pi pi-table", url: "/servizi" },
    {
      label: "Info utili",
      icon: "pi pi-info-circle",
      url: "/informazioni",
    },
  ];

  return (
    <div className="flex justify-between pt-5">
      <div className="w-full"></div>
      <Menubar
        model={items}
        className=" shadow-md p-4 border-gray-100 bg-transparent w-full justify-end"
      />
    </div>
  );
};

export default AppMenu;
