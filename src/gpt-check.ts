let x = 2

if (x > 4) {
  x = 6
}

const bad = () =>
  function () {
    const x = 4
    const l = 2

    return x
  }

const v = 3
