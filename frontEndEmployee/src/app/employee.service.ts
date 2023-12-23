import { HttpClient } from "@angular/common/http";
import { Employee } from "./employee";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    private apiServerUrl: "http://localhost:8081" | undefined;
    constructor(private http: HttpClient) {}
    public getEmmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/all`);
    }

    public addEmployee(employee: Employee): Observable<Employee> {
        return this.http.post<Employee>(`${this.apiServerUrl}/employee/add`, employee);
    }
    public deleteEmployee(employeeId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeId}`);
    }
    public getEmployeeById(employeeId: number): Observable<Employee> {
        return this.http.get<Employee>(`${this.apiServerUrl}/employee/find/${employeeId}`);
    }
    public updateEmployee(employee: Employee): Observable<Employee> {
        return this.http.put<Employee>(`${this.apiServerUrl}/employee/update`, employee);
    }
}

