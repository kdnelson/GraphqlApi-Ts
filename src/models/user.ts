export class User {
    name: string | undefined
    constructor(init?: Partial<User>) {
        Object.assign(this, init)
    }
}