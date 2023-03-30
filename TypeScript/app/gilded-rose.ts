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
    let notAgedBrie = item.name != 'Aged Brie';
    let isBackstage = item.name == 'Backstage passes to a TAFKAL80ETC concert';
    if (notAgedBrie && !isBackstage) {
      this.decrement_quality(item);
    } else {
        this.increment_quality(item);
        if (isBackstage && item.sellIn < 11) {
          this.increment_quality(item);
        }
        if (isBackstage && item.sellIn < 6) {
          this.increment_quality(item);
        }
    }
    if (item.name != 'Sulfuras, Hand of Ragnaros') {
      item.sellIn = item.sellIn - 1;
    }
    if (item.sellIn < 0) {
      if (notAgedBrie) {
        if (!isBackstage) {
          this.decrement_quality(item);
        } else {
          item.quality = 0
        }
      } else {
        this.increment_quality(item);

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
