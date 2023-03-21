import type { Readable } from 'stream';
import type _execa from 'execa';

export type BoundChildProcess = _execa.ExecaChildProcess & {
  stdout: Readable;
  stdin: Readable;
  stderr: Readable;
};

export interface TmpDir {
  name: string;
  removeCallback: () => void;
}
