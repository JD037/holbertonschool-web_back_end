export default function cleanSet(set, startString) {
    if (!startString || startString.length === 0) return '';
  
    let result = '';
    for (const item of set) {
      if (item.startsWith(startString)) {
        result += item.replace(startString, '') + '-';
      }
    }
    return result.slice(0, -1);  // Remove the last '-'
  }
