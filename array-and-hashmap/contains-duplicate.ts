function containsDuplicate(nums: number[]): boolean {
  const hashMap = {};
  for (const item of nums) {
    // Assuming the item itself is the key and the value
    if (!hashMap.hasOwnProperty(item.toString())) {
      hashMap[item.toString()] = item;
    } else {
      return true
    }
  }
  return false
};