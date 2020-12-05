export type AssetTypes =
  | 'Vision'
  | 'Weapon'
  | 'Character'
  | 'Artifact'
  | 'Item'
  | 'UI';
const uiAssets = {
  star: 'https://rerollcdn.com/SDSGC/ui/skill_star.png',
};
export type UiAssetTypes = keyof typeof uiAssets;
export default function getAssetUrl(type: AssetTypes, value: string): string {
  switch (type) {
    case 'Vision':
      return `https://rerollcdn.com/GENSHIN/Elements/Element_${value}.png`;
    case 'Character':
      return `https://rerollcdn.com/GENSHIN/Characters/${value}.png`;
    case 'Weapon':
      return `https://rerollcdn.com/GENSHIN/Weapon/NEW/${value.replace(
        / /g,
        '_',
      )}.png`;
    case 'Artifact':
      return `https://rerollcdn.com/GENSHIN/Gear/${value.replace(
        / /g,
        '_',
      )}.png`;
    case 'Item':
      return `https://rerollcdn.com/GENSHIN/Farming/NEW/${value.replace(
        / /g,
        '_',
      )}.png`;
    case 'UI':
      return uiAssets[value as UiAssetTypes];
    default:
      throw new Error('Asset type not copmatible');
  }
}
