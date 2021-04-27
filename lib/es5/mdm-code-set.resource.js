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
 * Controller: codeSet
 |   GET    | /api/codeSets/providers/importers                                                                          | Action: importerProviders                       |
 |   GET    | /api/codeSets/providers/exporters                                                                          | Action: exporterProviders                       |
 |   POST   | /api/codeSets/import/${importerNamespace}/${importerName}/${importerVersion}                               | Action: importModels                            |
 |   POST   | /api/codeSets/export/${exporterNamespace}/${exporterName}/${exporterVersion}                               | Action: exportModels                            |
 |  DELETE  | /api/codeSets/${codeSetId}/readByAuthenticated                                                             | Action: readByAuthenticated                     |
 |   PUT    | /api/codeSets/${codeSetId}/readByAuthenticated                                                             | Action: readByAuthenticated                     |
 |  DELETE  | /api/codeSets/${codeSetId}/readByEveryone                                                                  | Action: readByEveryone                          |
 |   PUT    | /api/codeSets/${codeSetId}/readByEveryone                                                                  | Action: readByEveryone                          |
 |   PUT    | /api/codeSets/${codeSetId}/newModelVersion                                                                 | Action: newModelVersion                         |
 |   PUT    | /api/codeSets/${codeSetId}/newDocumentationVersion                                                         | Action: newDocumentationVersion                 |
 |   PUT    | /api/codeSets/${codeSetId}/finalise                                                                        | Action: finalise                                |
 |   POST   | /api/folders/${folderId}/codeSets                                                                          | Action: save                                    |
 |   GET    | /api/folders/${folderId}/codeSets                                                                          | Action: index                                   |
 |  DELETE  | /api/codeSets/${codeSetId}/terms/${termId}                                                                 | Action: alterTerms                              |
 |   PUT    | /api/codeSets/${codeSetId}/terms/${termId}                                                                 | Action: alterTerms                              |
 |   PUT    | /api/codeSets/${codeSetId}/folder/${folderId}                                                              | Action: changeFolder                            |
 |   GET    | /api/codeSets/${codeSetId}/diff/${otherModelId}                                                            | Action: diff                                    |
 |   PUT    | /api/folders/${folderId}/codeSets/${codeSetId}                                                             | Action: changeFolder                            |
 |   GET    | /api/codeSets/${codeSetId}/export/${exporterNamespace}/${exporterName}/${exporterVersion}                  | Action: exportModel                             |
 |   GET    | /api/codeSets                                                                                              | Action: index                                   |
 |  DELETE  | /api/codeSets                                                                                              | Action: deleteAll                               |
 |  DELETE  | /api/codeSets/${id}                                                                                        | Action: delete                                  |
 |   PUT    | /api/codeSets/${id}                                                                                        | Action: update                                  |
 |   GET    | /api/codeSets/${id}                                                                                        | Action: show                                    |
 |   PUT    | /api/codeSets/${codeSetId}/newBranchModelVersion                                                           | Action: newBranchModelVersion                   |
 |   PUT    | /api/codeSets/${codeSetId}/newForkModel                                                                    | Action: newForkModel                            |
 |   GET    | /api/codeSets/${codeSetId}/latestModelVersion                                                              | Action: latestModelVersion                      |
 |   GET    | /api/codeSets/${codeSetId}/latestFinalisedModel                                                            | Action: latestFinalisedModel                    |
 |   GET    | /api/codeSets/${codeSetId}/modelVersionTree                                                                | Action: modelVersionTree                        |
 */
var MdmCodeSetResource = /** @class */ (function (_super) {
    __extends(MdmCodeSetResource, _super);
    function MdmCodeSetResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MdmCodeSetResource.prototype.importers = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/codeSets/providers/importers";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmCodeSetResource.prototype.exporters = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/codeSets/providers/exporters";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmCodeSetResource.prototype.importModels = function (namespace, name, version, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/codeSets/import/" + namespace + "/" + name + "/" + version;
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmCodeSetResource.prototype.exportModels = function (namespace, name, version, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/codeSets/export/" + namespace + "/" + name + "/" + version;
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmCodeSetResource.prototype.newModelVersion = function (codeSetId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/codeSets/" + codeSetId + "/newModelVersion";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmCodeSetResource.prototype.newDocumentationVersion = function (codeSetId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/codeSets/" + codeSetId + "/newDocumentationVersion";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmCodeSetResource.prototype.finalise = function (codeSetId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/codeSets/" + codeSetId + "/finalise";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmCodeSetResource.prototype.newBranchModelVersion = function (codeSetId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/codeSets/" + codeSetId + "/newBranchModelVersion";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmCodeSetResource.prototype.newForkModel = function (codeSetId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/codeSets/" + codeSetId + "/newForkModel";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmCodeSetResource.prototype.addCodeSetsToFolder = function (folderId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/folders/" + folderId + "/codeSets";
        return this.simplePost(url, data, restHandlerOptions);
    };
    MdmCodeSetResource.prototype.listCodeSetsInFolder = function (folderId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/folders/" + folderId + "/codeSets";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmCodeSetResource.prototype.removeTerm = function (codeSetId, termId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/codeSets/" + codeSetId + "/terms/" + termId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmCodeSetResource.prototype.alterTerm = function (codeSetId, termId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/codeSets/" + codeSetId + "/terms/" + termId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmCodeSetResource.prototype.moveCodeSetToFolder = function (codeSetId, folderId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/codeSets/" + codeSetId + "/folder/" + folderId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmCodeSetResource.prototype.diff = function (codeSetId, otherModelId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/codeSets/" + codeSetId + "/diff/" + otherModelId;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    // changeFolder(codeSetId: string, folderId: string, data: any, restHandlerOptions?: IMdmRestHandlerOptions) {
    //     const url = `${this.apiEndpoint}/folders/${folderId}/codeSets/${codeSetId}`;
    //     return this.simplePut(url, data, restHandlerOptions);
    // }
    MdmCodeSetResource.prototype.exportModel = function (codeSetId, exporterNamespace, exporterName, exporterVersion, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/codeSets/" + codeSetId + "/export/" + exporterNamespace + "/" + exporterName + "/" + exporterVersion;
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmCodeSetResource.prototype.list = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/codeSets";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmCodeSetResource.prototype.removeAll = function (queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/codeSets";
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmCodeSetResource.prototype.remove = function (codeSetId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/codeSets/" + codeSetId;
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmCodeSetResource.prototype.update = function (codeSetId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/codeSets/" + codeSetId;
        return this.simplePut(url, data, restHandlerOptions);
    };
    /// <summary>
    /// Get Code Set by Id or path
    /// </summary>
    /// <param name="codeSetId">code Set Id or a path in the format typePrefix:label|typePrefix:label</param>
    /// <param name="queryStringParams">Query String Params</param>
    /// <param name="restHandlerOptions">restHandler Options</param>
    MdmCodeSetResource.prototype.get = function (codeSetId, queryStringParams, restHandlerOptions) {
        var url = '';
        if (this.isGuid(codeSetId)) {
            url = this.apiEndpoint + "/codeSets/" + codeSetId;
        }
        else {
            url = this.apiEndpoint + "/codeSets/path/" + codeSetId;
        }
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmCodeSetResource.prototype.terms = function (codeSetId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/codeSets/" + codeSetId + "/terms";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmCodeSetResource.prototype.removeReadByAuthenticated = function (codeSetId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/codeSets/" + codeSetId + "/readByAuthenticated";
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmCodeSetResource.prototype.updateReadByAuthenticated = function (codeSetId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/codeSets/" + codeSetId + "/readByAuthenticated";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmCodeSetResource.prototype.removeReadByEveryone = function (codeSetId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/codeSets/" + codeSetId + "/readByEveryone";
        return this.simpleDelete(url, queryStringParams, restHandlerOptions);
    };
    MdmCodeSetResource.prototype.updateReadByEveryone = function (codeSetId, data, restHandlerOptions) {
        var url = this.apiEndpoint + "/codeSets/" + codeSetId + "/readByEveryone";
        return this.simplePut(url, data, restHandlerOptions);
    };
    MdmCodeSetResource.prototype.latestModelVersion = function (codeSetId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/codeSets/" + codeSetId + "/latestModelVersion";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmCodeSetResource.prototype.latestFinalisedModel = function (codeSetId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/codeSets/" + codeSetId + "/latestFinalisedModel";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmCodeSetResource.prototype.modelVersionTree = function (codeSetId, queryStringParams, restHandlerOptions) {
        var url = this.apiEndpoint + "/codeSets/" + codeSetId + "/modelVersionTree";
        return this.simpleGet(url, queryStringParams, restHandlerOptions);
    };
    MdmCodeSetResource.prototype.undoSoftDelete = function (codeSetId, restHandlerOptions) {
        var url = this.apiEndpoint + "/admin/codeSets/" + codeSetId + "/undoSoftDelete";
        return this.simplePut(url, {}, restHandlerOptions);
    };
    return MdmCodeSetResource;
}(MdmResource));
export { MdmCodeSetResource };
//# sourceMappingURL=mdm-code-set.resource.js.map