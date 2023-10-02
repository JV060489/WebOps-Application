import MainData from "./MainData";

const NavData = MainData.map((obj, i) => {
  if (obj.hideFromNav) return false;
  const { path, name, icon } = obj;
  return { path, name, icon, key: `${name}_route_${i}` };
});

export default NavData;
