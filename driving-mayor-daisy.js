function carPassing (cars, speed) {
  time = Date.now()
  const driver = {
    time: Date.now(),
    speed: speed
  }
  cars.push(driver);
  return cars
}