const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
console.log(driver.name)
})
}

const logDriversByHometown = function(drivers, locations) {
drivers.forEach(function (driver, location) {
if driver.location === driver.hometown
console.log(driver.name)
});
}
