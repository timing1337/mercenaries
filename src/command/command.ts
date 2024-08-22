export default abstract class Command {
    public readonly name: string;
    public readonly description: string;

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }

    public abstract execute(threadId: string, args: string[]): void;
}
