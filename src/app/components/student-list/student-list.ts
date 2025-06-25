import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/StudentService';
import { Student } from '../../Models/student.model';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './student-list.html',
  styleUrls: ['./student-list.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getStudents().subscribe({
      next: (data: Student[]) => this.students = data,
      error: (err) => console.error('Error loading students:', err)
    });
  }

  editStudent(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  deleteStudent(id: number): void {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentService.deleteStudent(id).subscribe(() => {
        this.loadStudents(); // Refresh list
      });
    }
  }
}
