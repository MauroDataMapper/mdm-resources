import { MdmResource } from './mdm-resource';
export declare class MdmEnumerationValuesResource extends MdmResource {
    delete(dataModelId: any, dataTypeId: any, id: any): any;
    put(dataModelId: any, dataTypeId: any, id: any, action: any, options: any): any;
    post(dataModelId: any, dataTypeId: any, options: any): any;
    makeUrl(dataModelId: any, dataTypeId: any): string;
}
