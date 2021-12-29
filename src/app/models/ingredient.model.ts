export class Ingredient {
    public name: string;
    public amount: number;
    public imageUrl: string;

    constructor(name: string, amount: number) {
        this.name = name;
        this.amount = amount;
        this.imageUrl = 'https://www.pngitem.com/pimgs/m/115-1153748_transparent-unhealthy-food-clipart-food-ingredient-clipart-hd.png';
    }

    addAmount(value: number) {
        this.amount += value;
    }

    clone() {
        return new Ingredient(this.name, this.amount);
    }
}