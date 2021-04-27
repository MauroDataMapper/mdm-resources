import { RequestOptions } from './mdm-common.model';
import { MdmResource } from './mdm-resource';
export declare class MdmFacetsResource extends MdmResource {
    attachReferenceFile(id: any, formData: any, restHandlerOptions?: RequestOptions): any;
    downloadLinkReferenceFile(elementId: string, fileId: any): string;
}
