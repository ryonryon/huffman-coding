export class PriorityQueue<T> {
  private arr: Array<T>;
  private compare: (a: T, b: T) => boolean;

  constructor(arr: Array<T>, compare: (a: T, b: T) => boolean) {
    this.arr = [];
    this.compare = compare;

    for (const elem of arr) {
      this.add(elem);
    }
  }

  public size(): number {
    return this.arr.length;
  }

  public add(value: T): void {
    this.arr.push(value);

    this.bubbleUp(this.arr.length - 1);
  }

  public pop(): T | undefined {
    if (this.arr.length === 0) {
      return undefined;
    }

    const result = this.arr[0];
    const last = this.arr.pop() as T;

    if (this.arr.length > 0) {
      this.arr[0] = last;
      this.bubbleDown(0);
    }

    return result;
  }

  private bubbleUp(index: number) {
    let currentIndex = index;

    while (currentIndex > 0) {
      const parentIndex = this.getParentIndex(currentIndex);

      const isCurrentHighPriority = this.compare(
        this.arr[currentIndex],
        this.arr[parentIndex]
      );

      if (isCurrentHighPriority) {
        this.swap(currentIndex, parentIndex);

        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  private bubbleDown(index: number) {
    let currentIndex = index;

    while (currentIndex < this.arr.length) {
      const [leftIndex, rightIndex] = this.getChildIndices(currentIndex);

      let smallerChildIndex = leftIndex;

      if (leftIndex >= this.arr.length) {
        break;
      }

      if (rightIndex < this.arr.length) {
        const isRightHighPriority = this.compare(
          this.arr[rightIndex],
          this.arr[leftIndex]
        );

        if (isRightHighPriority) {
          smallerChildIndex = rightIndex;
        }
      }

      const isChildHighPriority = this.compare(
        this.arr[smallerChildIndex],
        this.arr[currentIndex]
      );

      if (isChildHighPriority) {
        this.swap(currentIndex, smallerChildIndex);

        currentIndex = smallerChildIndex;
      } else {
        break;
      }
    }
  }

  private swap(a: number, b: number) {
    [this.arr[a], this.arr[b]] = [this.arr[b], this.arr[a]];
  }

  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private getChildIndices(index: number): [number, number] {
    return [2 * index + 1, 2 * index + 2];
  }
}
