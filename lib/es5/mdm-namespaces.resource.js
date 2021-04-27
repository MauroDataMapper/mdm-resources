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
 * Controller: metadata
 |   GET    | /api/metadata/namespaces/${id}?                                                                       | Action: namespaces
 */
var MdmNamespacesResource = /** @class */ (function (_super) {
    __extends(MdmNamespacesResource, _super);
    function MdmNamespacesResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmNamespacesResource.prototype.get = function (metadataId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/metadata/namespaces" + (metadataId ? "/" + metadataId : '');
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    return MdmNamespacesResource;
}(MdmResource));
export { MdmNamespacesResource };
//# sourceMappingURL=mdm-namespaces.resource.js.map