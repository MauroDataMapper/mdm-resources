import { MdmResource } from './mdm-resource';
export declare class MdmFacetsResource extends MdmResource {
    get(id: any, action: any, options: any): any;
    post(id: any, action: any, options: any): any;
    put(id: any, action: any, childId: any, options: any): any;
    delete(id: any, action: any, childId: any): any;
    attachReferenceFile(id: any, formData: any): any;
    downloadLinkReferenceFile(elementId: any, fileId: any): string;
}
