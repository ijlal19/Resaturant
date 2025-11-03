function add3Dots(str: any, limit: any) {
  var dots = " ... ";
  if (str?.length > limit) {
    str = str.substring(0, limit) + dots;
  }
  return str;
}

export { add3Dots}