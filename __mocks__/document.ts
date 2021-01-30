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

export default document
