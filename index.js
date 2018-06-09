function logDriverNames(drivers) {
  const names = []
  drivers.forEach(function (driver) {
    names.push (drivers.name)
  });
  return names;
}
