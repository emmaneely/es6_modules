export class BucketList {
    constructor() {
        this.locations = [];
    }

    add(location) {
        this.locations.push(location);
    };
    
    remove(car) {
        this.locations = this.locations.filter((existingLocation) => existingLocation != location);
    }
}