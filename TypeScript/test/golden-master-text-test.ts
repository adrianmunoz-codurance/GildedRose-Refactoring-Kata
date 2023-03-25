import { Item, GildedRose } from '@/gilded-rose';

const items = [
  new Item("+5 Dexterity Vest", 10, 20), //
  new Item("Aged Brie", 2, 0), //
  new Item("Elixir of the Mongoose", 5, 7), //
  new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
  new Item("Sulfuras, Hand of Ragnaros", -1, 80),
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49)
];

export function generateGoldenMasterFor(days: number = 2): string {
  const gildedRose = new GildedRose(items);
  let goldenMasterResult = "";
  for (let i = 0; i < days; i++) {
    goldenMasterResult += "-------- day " + i + " --------\n";
    goldenMasterResult += "name, sellIn, quality\n";
    items.forEach(element => {
      goldenMasterResult += element.name + ' ' + element.sellIn + ' ' + element.quality + '\n';

    });
    goldenMasterResult += '\n';
    gildedRose.updateQuality();
  }

  return goldenMasterResult
}
