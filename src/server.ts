import {App} from './app'
import {UserApi} from './api/User'
import { QuestionApi } from './api/Question';
import { SubjectApi } from './api/Subject';
import { EXamApi } from './api/Exam';
const app = new App([
    new UserApi(),
    new QuestionApi(),
    new SubjectApi(),
    new EXamApi()
]);

app.listen();
