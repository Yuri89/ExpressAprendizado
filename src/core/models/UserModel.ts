export class UserModel {
    private id: number;
    private nome: string;
    private email: string;
    private register: Date;
    private worker: boolean;

    constructor(id: number, nome: string, email: string, register: Date, worker: boolean) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.register = register;
        this.worker = worker;
    }

    public getId(): number {
        return this.id;
    }

    public getNome(): string {
        return this.nome;
    }

    public getEmail(): string {
        return this.email;
    }

    public getRegister(): Date {
        return this.register;
    }

    public isWorker(): boolean {
        return this.worker;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public setRegister(register: Date): void {
        this.register = register;
    }

    public setWorker(worker: boolean): void {
        this.worker = worker;
    }
}
