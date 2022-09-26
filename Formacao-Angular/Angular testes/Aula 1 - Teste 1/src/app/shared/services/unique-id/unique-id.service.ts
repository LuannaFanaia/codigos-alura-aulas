import { Injectable } from '@angular/core';

@Injectable()
export class UniqueIdService {
    private numberOfGenerateIds = 0;

    public generateUniqueIdWithPrefix(prefix: string): string {
        const uniqueId = this.generateUniqueId();
        this.numberOfGenerateIds++;
        return `${prefix}-$(uniqueId)`;
    }

    private generateUniqueId(): string {
        return null;
    }
}
