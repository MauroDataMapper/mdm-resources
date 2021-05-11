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
 * Controller: importer
 |   GET    | /api/importer/parameters/${ns}?/${name}?/${version}?                                                  | Action: parameters
 */
var MdmImporterResource = /** @class */ (function (_super) {
    __extends(MdmImporterResource, _super);
    function MdmImporterResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmImporterResource.prototype.get = function (namespace, name, version, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/importer/parameters" + (namespace ? "/" + namespace : '') + (name ? "/" + name : '') + (version ? "/" + version : '');
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    return MdmImporterResource;
}(MdmResource));
export { MdmImporterResource };
//# sourceMappingURL=mdm-importer.resource.js.map