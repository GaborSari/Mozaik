class County {

    private id: number;
    private name: string;
    private deleted: Date | null = null;

    constructor(id: number, name: string, deleted: Date | null) {
        this.id = Number(id);
        this.name = String(name);
        if (deleted != null)
            this.deleted = new Date(deleted);
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.deleted ?  this.name + ' (deleted)' : this.name;
    }

    getDeleted() {
        return this.deleted ? this.deleted.toLocaleString() : 'Not yet';
    }
}

export { County };