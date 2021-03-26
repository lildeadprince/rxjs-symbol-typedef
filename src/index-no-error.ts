/* add any single line of the following to fix the compilation error */
// import 'rxjs';
// import 'rxjs/internal-compatibility';
import 'rxjs/internal/symbol/observable';

import { webSocket as rxSocket } from 'rxjs/webSocket'

export default (url, WebSocketCtor) => rxSocket({ url, WebSocketCtor })
