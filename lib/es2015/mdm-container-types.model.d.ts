import { CatalogueItemDomainType, Payload, Uuid } from './mdm-common.model';
export interface Container {
    id?: Uuid;
    domainType: CatalogueItemDomainType;
    label: string;
    description?: string;
    deleted?: boolean;
}
export interface ContainerUpdatePayload extends Payload {
    id: Uuid;
    label?: string;
    description?: string;
}
