const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
console.log(driver.name)
})
}

const logDriversByHometown = function(drivers, hometown) {
drivers.forEach(function (driver) {
  return driver.hometown === hometown
console.log(driver.name)
});
}
const driversByRevenue = function(drivers) {
  drivers.forEach(function (driver, revenue) {
    driver.revenue.sort()
    return driver.name
  })
}
