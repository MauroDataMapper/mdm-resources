import { Authority } from './mdm-model-types.model';
import { CatalogueItemDomainType, Payload, Uuid } from './mdm-common.model';
export interface Container {
    id?: Uuid;
    domainType: CatalogueItemDomainType;
    label: string;
    description?: string;
    deleted?: boolean;
}
export interface ContainerDetail {
    authority?: Authority;
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
