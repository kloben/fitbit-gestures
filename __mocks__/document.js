const document = {
  getElementById: (name) => {
    return name === 'fail'
      ? null
      : {
          onmousedown: () => {},
          onmousemove: () => {},
          onmouseup: () => {}
        }
  }
}

module.exports = document
