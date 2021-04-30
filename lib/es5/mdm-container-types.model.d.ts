import { CatalogueItemDomainType, Payload, Uuid } from './mdm-common.model';
export interface Container {
    id?: Uuid;
    domainType: CatalogueItemDomainType;
    label: string;
    description?: string;
    deleted?: boolean;
}
export interface ContainerCreatePayload extends Payload {
    label?: string;
    description?: string;
}
export interface ContainerUpdatePayload extends Payload {
    id: Uuid;
    label?: string;
    description?: string;
}
