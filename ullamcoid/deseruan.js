function* numbers$1(values, valueof) {
  for (let value of values) {
    if (value === valueof) {
      yield value;
    }
  }
}
