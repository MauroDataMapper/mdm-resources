import { MdmResource } from './mdm-resource';
import { IMdmRestHandlerOptions } from './mdm-rest-handler';
export declare class MdmFacetsResource extends MdmResource {
    attachReferenceFile(id: any, formData: any, restHandlerOptions?: IMdmRestHandlerOptions): any;
    downloadLinkReferenceFile(elementId: any, fileId: any): string;
}
