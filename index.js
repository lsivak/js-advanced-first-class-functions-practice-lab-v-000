const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
console.log(driver.name)
})
}

const logDriversByHometown = function(drivers, hometown) {
drivers.forEach(function (driver) {
  if(driver.hometown === hometown)
console.log(driver.name)
});
}
const driversByRevenue = function(drivers) {
  const driversRev = return drivers.sort(function(a, b) {
    return a.revenue - b.revenue
})
debugger
}
