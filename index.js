const logDriverNames() = function (drivers){
  const names = []
  drivers.forEach(function (driver) {
    names.push (drivers.name)
  });
  return names;
}
