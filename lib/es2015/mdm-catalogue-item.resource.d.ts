import { MdmResource } from './mdm-resource';
export declare class MdmCatalogueItemResource extends MdmResource {
    tree(id: any, includeSupersededModels: any): void;
    get(id: any, action: any, options: any): any;
    post(id: any, action: any, options: any): any;
    put(id: any, action: any, childId: any, options: any): any;
    delete(id: any, action: any, childId: any): any;
}
