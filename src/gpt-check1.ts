const bad = () =>
  function () {
    const x = 1 + '1'
    return x
  }
