export function getUniqueId() {
  var timestamp = String(Date.now()); // Get current timestamp in milliseconds
  var uniqueId = timestamp.substr(-10); // Take the last 10 digits of the timestamp
  return uniqueId;
}
