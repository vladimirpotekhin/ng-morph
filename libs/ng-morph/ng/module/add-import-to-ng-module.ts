import { ClassDeclaration } from 'ts-morph';
import { mergeImports } from '../../imports/helpers/merge-imports';
import { pushToArrayProperty } from '../helpers/push-to-array-property';

export function addImportToNgModule(
  classDeclaration: ClassDeclaration,
  moduleName: string,
  packageName?: string
) {
  if (packageName) {
    mergeImports(
      classDeclaration.getSourceFile().getFilePath(),
      moduleName,
      packageName
    );
  }

  pushToArrayProperty(classDeclaration, 'NgModule', 'imports', moduleName);
}
