import { Branchable, Finalisable, Historical, Modelable, ModelableDetail, SecurableModel, Versionable } from './mdm-model-types.model';
import { CatalogueItemDomainType, Classifier, MdmIndexResponse, MdmResponse, Payload, Uuid } from './mdm-common.model';
export declare type TerminologyDataType = 'Terminology';
export interface Terminology extends Modelable {
    type?: TerminologyDataType;
    [key: string]: any;
}
export declare type TerminologyDetail = Terminology & ModelableDetail & SecurableModel & Historical & Branchable & Omit<Versionable, 'modelVersion' | 'modelVersionTag'> & Finalisable;
export declare type TerminologyIndexResponse = MdmIndexResponse<Terminology>;
export declare type TerminologyDetailResponse = MdmResponse<TerminologyDetail>;
export interface TerminologyUpdatePayload extends Payload {
    id: Uuid;
    domainType: CatalogueItemDomainType;
    label?: string;
    author?: string;
    organisation?: string;
    description?: string;
    aliases?: string[];
    classifiers?: Classifier[];
}
