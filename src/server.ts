import {App} from './app'
import {UserApi} from './api/User'
import { QuestionApi } from './api/Question';
import { SubjectApi } from './api/Subject';
import { EXamApi } from './api/Exam';
import { TaskApi } from './api/Task';
import { NotificationApi } from './api/Notification';
const app = new App([
    new UserApi(),
    new QuestionApi(),
    new SubjectApi(),
    new EXamApi(),
    new TaskApi(),
    new NotificationApi()
    
]);

app.listen();
