export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      this.update(item);
    }

    return this.items;
  }

  private update(item: Item) {
    let isBackstage = item.name == 'Backstage passes to a TAFKAL80ETC concert';
    let isNotSulfuras = item.name != 'Sulfuras, Hand of Ragnaros';
    let isAgedBrie = item.name === 'Aged Brie';

    if (isAgedBrie) {
      item.sellIn = item.sellIn - 1;
      this.increment_quality(item);

      if (item.sellIn < 0) {
        this.increment_quality(item);
      }
    }

    if (isBackstage) {

      this.increment_quality(item);
      if (item.sellIn < 11) {
        this.increment_quality(item);
      }
      if (item.sellIn < 6) {
        this.increment_quality(item);
      }
      item.sellIn = item.sellIn - 1;
      if (item.sellIn < 0) {
        item.quality = 0
      }
    }

    if (!isAgedBrie && !isBackstage) {
      if (isNotSulfuras) {
        item.sellIn = item.sellIn - 1;
      }
      this.decrement_quality(item);

      if (item.sellIn < 0) {
        this.decrement_quality(item);
      }
    }
  }

  private decrement_quality(item: Item) {
    if (item.quality > 0 && item.name != 'Sulfuras, Hand of Ragnaros') {
      item.quality = item.quality - 1
    }
  }

  private increment_quality(item: Item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1
    }
  }
}
