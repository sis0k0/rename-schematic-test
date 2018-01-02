import { Rule, move } from '@angular-devkit/schematics';

export default function (_options: any): Rule {
   return move('dir-with-subdirs', 'new-dir');
}
