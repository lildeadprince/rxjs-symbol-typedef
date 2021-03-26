// import 'rxjs';
import { webSocket as rxSocket } from 'rxjs/webSocket'

export default (url, WebSocketCtor) => rxSocket({ url, WebSocketCtor })
