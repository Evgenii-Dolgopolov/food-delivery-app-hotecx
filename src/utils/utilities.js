const sliceName = (name, maxLength) => {
  return name.length > maxLength ? `${name.slice(0, maxLength)}...` : name
}

export { sliceName }
