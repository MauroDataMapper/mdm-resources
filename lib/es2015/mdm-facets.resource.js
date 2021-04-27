import { MdmResource } from './mdm-resource';
export class MdmFacetsResource extends MdmResource {
    attachReferenceFile(id, formData, restHandlerOptions) {
        const url = `${this.apiEndpoint}'/facets/${id}/referenceFiles`;
        return this.simplePost(url, {
            method: 'POST',
            withCredentials: true,
            data: formData
        }, restHandlerOptions);
    }
    downloadLinkReferenceFile(elementId, fileId) {
        return `${this.apiEndpoint}/facets/${elementId}/referenceFiles/${fileId}`;
    }
}
//# sourceMappingURL=mdm-facets.resource.js.map