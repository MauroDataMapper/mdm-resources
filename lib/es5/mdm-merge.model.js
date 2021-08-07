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
/**
 * Represents the type of merge operation applied to a {@link MergeDiffItem}.
 */
export var MergeDiffType;
(function (MergeDiffType) {
    /**
     * States that the diff item will be created in the _target_ branch because it only exists in the _source_ branch.
     */
    MergeDiffType["Creation"] = "creation";
    /**
     * States that the diff item will be removed from the _target_ branch because it does not exist in the _source_ branch.
     */
    MergeDiffType["Deletion"] = "deletion";
    /**
     * States that the diff item appears in both _source_ and _target_ branches but contains a different value.
     */
    MergeDiffType["Modification"] = "modification";
})(MergeDiffType || (MergeDiffType = {}));
/**
 * Represents the resolution of a merge conflict.
 */
export var MergeConflictResolution;
(function (MergeConflictResolution) {
    /**
     * States that the _source_ branch value is being taken.
     */
    MergeConflictResolution["Source"] = "source";
    /**
     * States that the _target_ branch value is being taken.
     */
    MergeConflictResolution["Target"] = "target";
    /**
     * States that the conflict was resolved manually using a mixture of _source_ and _target_ values.
     */
    MergeConflictResolution["Mixed"] = "mixed";
})(MergeConflictResolution || (MergeConflictResolution = {}));
//# sourceMappingURL=mdm-merge.model.js.map