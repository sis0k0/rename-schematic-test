import { Rule, Tree } from '@angular-devkit/schematics';

export default function (_options: any): Rule {
   return (tree: Tree) => {
     tree.rename('dir1/1', 'dir2/1');
   }
}
