// src/app/components/student-edit/student-edit.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../services/StudentService';
import { Student } from '../../Models/student.model';

@Component({
  selector: 'app-student-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './student-edit.html',
  styleUrls: ['./student-edit.css']
})
export class StudentEditComponent implements OnInit {
  student: Student = {
    id: 0,
    name: '',
    age: 0,
    email: ''
  };

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.studentService.getStudent(id).subscribe({
  next: (data: Student) => this.student = data,
  error: (err: any) => console.error('Error fetching student', err)
});
    }
  }

  updateStudent(): void {
    this.studentService.updateStudent(this.student.id, this.student).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
