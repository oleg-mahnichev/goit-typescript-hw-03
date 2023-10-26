// Клас Key
class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

// Клас Person
class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

// Абстрактний клас House
abstract class House {
  protected door: boolean = false;
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  abstract openDoor(key: Key): void;

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log(`${person.getKey().getSignature()} entered the house.`);
    } else {
      console.log("The door is closed. Cannot let anyone in.");
    }
  }
}

// Клас MyHouse успадковується від House
class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("The door is open.");
    } else {
      this.door = false;
      console.log("Wrong key. The door is locked.");
    }
  }
}

// Створення ключа, будинку та особи
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

// Відкриття дверей за допомогою правильного ключа
house.openDoor(person.getKey());

// Спроба впустити людину
house.comeIn(person);
