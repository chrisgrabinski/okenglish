export function composeDuration(durationString) {
  const formattedValues =
    durationString?.match(/(\d+)/g)?.map((value) => value.padStart(2, "0")) ||
    [];

  return formattedValues.join(":");
}
