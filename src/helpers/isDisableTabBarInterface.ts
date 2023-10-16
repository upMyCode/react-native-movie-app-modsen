const isDisableTabBarInterface = (
  routeName: string,
  disableScreens: string[]
) => {
  return disableScreens.includes(routeName);
};

export default isDisableTabBarInterface;
