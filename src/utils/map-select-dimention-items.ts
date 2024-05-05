export function mapSelectDimentionItems(items: any) {
  return Object.entries(items).map(([key, value]) => ({
    value: key,
    name: value,
  }));
}
