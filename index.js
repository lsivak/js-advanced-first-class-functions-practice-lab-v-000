const logDriverNames = function (driversCopy) {
  const names = []
  driversCopy.forEach(function (driver) {
    debugger
    names.push(driver.name)
  });
  return names;
}
