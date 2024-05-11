interface Options {
  name?: string;
  version?: string;
  src?: string;
  dest?: string;
  components?: string;
  pluginType?: 'component' | 'hook' | 'directive';
  plugins?: string[];
  allPackages?: [];
  precss?: 'less' | 'scss' | '';
}

const options: Options = {};
export default options;


export function fetchTemplateFiles(): string[] {
  return [
    'package.json',
  ]
}