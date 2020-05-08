import { Cousine } from './cousine.model'

export class Recipe {
    constructor(public name: string, public ingredients: string[], public instructions: string, public photo: string, public averageRating: number, public serving: number, public meat: boolean, public description: string, public cousine: Cousine, public calories: number, public time: number, public createdAt: Date, public slug: string, public arrayOfName: string[], public user: Object) {

    }
}