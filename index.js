const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
console.log(driver.name)
})
}

const logDriversByHometown = function(drivers, locations) {
drivers.forEach(function (driver, location) {
if(driver.hometown === location)
console.log(driver.name)
});
}
const driversByRevenue = function(drivers) {
  drivers.forEach(function (driver, revenue) {
    driver.revenue.sort()
    return driver.name
  })
}
