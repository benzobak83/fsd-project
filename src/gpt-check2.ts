const bad = () =>
  function () {
    const x = 2 + '1'
    return x
  }
