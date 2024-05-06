import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
})
export class DepartmentComponent implements OnInit {
  departmentsData: any;
  departments!: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'status', 'actions'];
  fileToUpload: File | null = null;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.getDepartments();
  }

  getDepartments(): void {
    const token: string | null = localStorage.getItem('accesstoken');
    if (!token) {
      console.error('Access token not found in local storage');
      return;
    }

    this.auth.getDepartments(token).subscribe(
      (response) => {
        console.log('Departments:', response);
        this.departmentsData = response.data;
        this.departments = new MatTableDataSource(response.data.rows);
        this.departments.paginator = this.paginator;
      },
      (error) => {
        console.error('Error fetching departments: ', error);
      }
    );
  }

  onFileSelected(event: any): void {
    this.fileToUpload = event.target.files[0];
  }
  uploadCSV(): void {
    const token: any = localStorage.getItem('accesstoken');
    if (!token) {
      console.error('Access token not found in local storage');
      return;
    }

    if (!this.fileToUpload) {
      console.error('No file selected for upload');
      return;
    }

    this.auth.importDepartmentsFromCSV(this.fileToUpload, token).subscribe(
      (response) => {
        console.log('CSV file uploaded successfully:', response);

        this.getDepartments();
      },
      (error) => {
        console.error('Error uploading CSV file: ', error);
      }
    );
  }
}
