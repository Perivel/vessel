import { ArtifactInterface } from "../artifact/artifact.interface";
export interface ArtifactBuilderInterface {
    /**
     * build()
     *
     * builds the artifact.
     */
    build(artifact: ArtifactInterface): Promise<void>;
}
//# sourceMappingURL=artifact-builder.interface.d.ts.map