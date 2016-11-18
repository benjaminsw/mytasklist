import { Component } from '@angular/core';
import {TaskService} from '../../services/task.service';

@Component({
    moduleId: module.id,
    selector: 'tasks',
    templateUrl: 'tasks.component.html'
})

export class TasksComponent {
    tasks: Task[];

    constructor(private taskService:TaskService) {
        this.taskService.getTasks()
            .subscribe(tasks => {
                console.log(tasks);
            });
    }
}
