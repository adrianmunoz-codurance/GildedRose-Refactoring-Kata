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
    if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
      if (item.quality > 0) {
        if (item.name != 'Sulfuras, Hand of Ragnaros') {
          this.decrement_quality(item);
        }
      }
    } else {
      if (item.quality < 50) {
        this.increment_quality(item);
        if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (item.sellIn < 11) {
            if (item.quality < 50) {
              this.increment_quality(item);
            }
          }
          if (item.sellIn < 6) {
            if (item.quality < 50) {
              this.increment_quality(item);
            }
          }
        }
      }
    }
    if (item.name != 'Sulfuras, Hand of Ragnaros') {
      item.sellIn = item.sellIn - 1;
    }
    if (item.sellIn < 0) {
      if (item.name != 'Aged Brie') {
        if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (item.quality > 0) {
            if (item.name != 'Sulfuras, Hand of Ragnaros') {
              this.decrement_quality(item);
            }
          }
        } else {
          item.quality = 0
        }
      } else {
        if (item.quality < 50) {
          this.increment_quality(item);
        }
      }
    }
  }

  private decrement_quality(item: Item) {
    item.quality = item.quality - 1
  }

  private increment_quality(item: Item) {
    item.quality = item.quality + 1
  }
}
