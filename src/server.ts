import {App} from './app'
import {UserApi} from './api/User'
const app = new App([
    new UserApi()
]);

app.listen();
