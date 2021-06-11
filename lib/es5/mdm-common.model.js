/*
Copyright 2021 University of Oxford

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

SPDX-License-Identifier: Apache-2.0
*/
export var ContainerDomainType;
(function (ContainerDomainType) {
    ContainerDomainType["Classifiers"] = "classifiers";
    ContainerDomainType["Folders"] = "folders";
    ContainerDomainType["VersionedFolders"] = "versionedFolders";
})(ContainerDomainType || (ContainerDomainType = {}));
export var ModelDomainType;
(function (ModelDomainType) {
    ModelDomainType["Folders"] = "folders";
    ModelDomainType["DataModels"] = "dataModels";
    ModelDomainType["DataClasses"] = "dataClasses";
    ModelDomainType["DataTypes"] = "dataTypes";
    ModelDomainType["Terminologies"] = "terminologies";
    ModelDomainType["ReferenceDataModels"] = "referenceDataModels";
    ModelDomainType["Terms"] = "terms";
    ModelDomainType["Classifiers"] = "classifiers";
    ModelDomainType["VersionedFolders"] = "versionedFolders";
    ModelDomainType["All"] = "all";
})(ModelDomainType || (ModelDomainType = {}));
export var CatalogueItemDomainType;
(function (CatalogueItemDomainType) {
    CatalogueItemDomainType["Folder"] = "Folder";
    CatalogueItemDomainType["DataModel"] = "DataModel";
    CatalogueItemDomainType["DataClass"] = "DataClass";
    CatalogueItemDomainType["DataElement"] = "DataElement";
    CatalogueItemDomainType["Terminology"] = "Terminology";
    CatalogueItemDomainType["Term"] = "Term";
    CatalogueItemDomainType["CodeSet"] = "CodeSet";
    CatalogueItemDomainType["Classification"] = "Classification";
    CatalogueItemDomainType["ReferenceDataModel"] = "ReferenceDataModel";
    CatalogueItemDomainType["EnumerationType"] = "EnumerationType";
    CatalogueItemDomainType["PrimitiveType"] = "PrimitiveType";
    CatalogueItemDomainType["ReferenceType"] = "ReferenceType";
    CatalogueItemDomainType["TerminologyType"] = "TerminologyType";
    CatalogueItemDomainType["ReferenceDataModelType"] = "ReferenceDataModelType";
    CatalogueItemDomainType["CodeSetType"] = "CodeSetType";
    CatalogueItemDomainType["ModelDataType"] = "ModelDataType";
    CatalogueItemDomainType["ReferenceFile"] = "ReferenceFile";
    CatalogueItemDomainType["VersionedFolder"] = "VersionedFolder";
    CatalogueItemDomainType["Root"] = "Root";
    CatalogueItemDomainType["LocalCatalogue"] = "LocalCatalogue";
    CatalogueItemDomainType["ExternalCatalogues"] = "ExternalCatalogues";
    CatalogueItemDomainType["SubscribedCatalogue"] = "SubscribedCatalogue";
    CatalogueItemDomainType["FederatedDataModel"] = "FederatedDataModel";
})(CatalogueItemDomainType || (CatalogueItemDomainType = {}));
/**
 * Determine if a given domain type represents a Container.
 *
 * @param domainType The {@link CatalogueItemDomainType} to verify.
 * @returns True if `domainType` is a container type.
 */
export function isContainerDomainType(domainType) {
    return domainType === CatalogueItemDomainType.Classification
        || domainType === CatalogueItemDomainType.Folder
        || domainType === CatalogueItemDomainType.VersionedFolder;
}
/**
 * Determine if a given domain type represents a Model.
 *
 * @param domainType The {@link CatalogueItemDomainType} to verify.
 * @returns True if `domainType` is a model type.
 */
export function isModelDomainType(domainType) {
    return domainType === CatalogueItemDomainType.DataModel
        || domainType === CatalogueItemDomainType.CodeSet
        || domainType === CatalogueItemDomainType.Terminology
        || domainType === CatalogueItemDomainType.ReferenceDataModel;
}
//# sourceMappingURL=mdm-common.model.js.map