import { LightningElement, track } from 'lwc';
import saveEmployee from '@salesforce/apex/EmployeeLWCController.saveEmployee';

export default class EmployeeManagerLWC extends LightningElement {
    @track empName = '';
    @track empId = '';
    @track salary = '';
    @track email = '';
    @track department = '';
    @track joiningDate = '';
    
    @track errorMessage = '';
    @track successMessage = '';

    get deptOptions() {
        return [
            { label: 'IT', value: 'IT' },
            { label: 'HR', value: 'HR' },
            { label: 'Sales', value: 'Sales' },
            { label: 'Finance', value: 'Finance' }
        ];
    }

    handleChange(event) {
        const field = event.target.dataset.field;
        this[field] = event.target.value;
    }

    handleSave() {
        this.errorMessage = '';
        this.successMessage = '';

        // 1. Validate Employee Name (Not empty, >= 3 chars)
        if (!this.empName || this.empName.trim().length < 3) {
            this.errorMessage = 'Employee Name cannot be empty and must contain at least 3 characters.';
            return;
        }

        // 2. Validate Employee ID (> 0)
        if (!this.empId || parseInt(this.empId) <= 0) {
            this.errorMessage = 'Employee ID must be greater than 0.';
            return;
        }

        // 3. Validate Salary (> 10000 and < 500000)
        let parsedSalary = parseFloat(this.salary);
        if (!this.salary || parsedSalary <= 10000 || parsedSalary >= 500000) {
            this.errorMessage = 'Salary must be greater than 10,000 and less than 500,000.';
            return;
        }

        // 4. Validate Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!this.email || !emailRegex.test(this.email)) {
            this.errorMessage = 'Please enter a valid email address format.';
            return;
        }

        // 5. Validate Department
        if (!this.department) {
            this.errorMessage = 'Please select a department.';
            return;
        }

        // 6. Validate Joining Date (Cannot be future date)
        if (!this.joiningDate) {
            this.errorMessage = 'Please select a Joining Date.';
            return;
        }
        let selectedDate = new Date(this.joiningDate);
        let today = new Date();
        today.setHours(0, 0, 0, 0); // Remove time part for accurate comparison
        if (selectedDate > today) {
            this.errorMessage = 'Joining Date cannot be a future date.';
            return;
        }

        // If all JS validations pass, call Apex to save and check uniqueness
        saveEmployee({
            empName: this.empName,
            empId: parseInt(this.empId),
            salary: parsedSalary,
            email: this.email,
            department: this.department,
            joiningDate: this.joiningDate
        })
        .then(result => {
            if (result === 'Success') {
                this.successMessage = 'Employee record saved successfully!';
                this.clearForm();
            } else {
                this.errorMessage = result; // Displays uniqueness or Apex errors
            }
        })
        .catch(error => {
            this.errorMessage = 'An error occurred while saving.';
            console.error(error);
        });
    }

    clearForm() {
        this.empName = '';
        this.empId = '';
        this.salary = '';
        this.email = '';
        this.department = '';
        this.joiningDate = '';
    }
}
