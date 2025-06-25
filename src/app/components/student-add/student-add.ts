import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { StudentService } from '../../services/StudentService';
import { Student } from '../../Models/student.model';

@Component({
  selector: 'app-student-add',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './student-add.html',
  styleUrls: ['./student-add.css']
})
export class StudentAddComponent {
  student: Student = {
    id: 0,
    name: '',
    age: 0,
    email: ''
  };

  constructor(private studentService: StudentService, private router: Router) {}

  addStudent(): void {
    this.studentService.addStudent(this.student).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
