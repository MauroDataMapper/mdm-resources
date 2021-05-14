import { Historical, Securable } from './mdm-model-types.model';
import { CatalogueItemDomainType, MdmIndexResponse, MdmResponse, Navigatable, Uuid } from './mdm-common.model';
export interface Term {
    id?: Uuid;
    domainType: CatalogueItemDomainType;
    model?: Uuid;
    code: string;
    definition: string;
    /**
     * The combination of {@link Term.code} and {@link Term.definition}.
     */
    label?: string;
    [key: string]: any;
}
export declare type TermDetail = Term & Navigatable & Securable & Historical;
export declare type TermIndexResponse = MdmIndexResponse<Term>;
export declare type TermDetailResponse = MdmResponse<TermDetail>;
