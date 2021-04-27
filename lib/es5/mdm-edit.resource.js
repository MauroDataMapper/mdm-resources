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
/**
 * Controller: edit
 |   GET    | /api/${resourceDomainType}/${resourceId}/edits                                                        | Action: index
 */
var MdmEditResource = /** @class */ (function (_super) {
    __extends(MdmEditResource, _super);
    function MdmEditResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmEditResource.prototype.status = function (resourceDomainType, resourceId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/" + resourceDomainType + "/" + resourceId + "/edits";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    return MdmEditResource;
}(MdmResource));
export { MdmEditResource };
//# sourceMappingURL=mdm-edit.resource.js.map