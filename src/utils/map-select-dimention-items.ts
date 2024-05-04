export function mapSelectDimentionItems(items: any) {
  return Object.entries(items).map(([key, value]) => ({
    key,
    name: value,
  }));
}
