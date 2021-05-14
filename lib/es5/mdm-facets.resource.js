var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { MdmResource } from './mdm-resource';
var MdmFacetsResource = /** @class */ (function (_super) {
    __extends(MdmFacetsResource, _super);
    function MdmFacetsResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmFacetsResource.prototype.attachReferenceFile = function (id, formData, restHandlerOptions) {
        var url = this.apiEndpoint + "'/facets/" + id + "/referenceFiles";
        return this.simplePost(url, {
            method: 'POST',
            withCredentials: true,
            data: formData
        }, restHandlerOptions);
    };
    MdmFacetsResource.prototype.downloadLinkReferenceFile = function (elementId, fileId) {
        return this.apiEndpoint + "/facets/" + elementId + "/referenceFiles/" + fileId;
    };
    return MdmFacetsResource;
}(MdmResource));
export { MdmFacetsResource };
//# sourceMappingURL=mdm-facets.resource.js.map