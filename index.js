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
  return drivers.slice().sort(function(a, b) {
    return a.revenue - b.revenue
})
}

const driversByName = function(drivers) {
  return drivers.slice().sort(function(a,b) {
    return a.name.localeCompare(b.name)
  })
}

const totalRevenue = function(drivers) {
  let totRev = 0;
  drivers.forEach(function(driver) {
    totRev += driver.revenue
  })
  return totRev
}

const averageRevenue = function(drivers) {
  let totRev = 0;
  drivers.forEach(function(driver) {
    totRev += driver.revenue
  })
  return totRev / drivers.length
}
