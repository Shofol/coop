import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '@/_services';
import { AlertService } from '@/alert/alert.service';

@Component({ 
    selector: 'app-login',
    templateUrl: 'login.component.html' 
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        public  authenticationService: AuthenticationService,
        private alertService: AlertService
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.isLoggedIn()) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    login() {
        this.submitted = true;
        
        this.alertService.clear(); // reset alerts on submit

        if (this.loginForm.invalid) { return; } // stop here if form is invalid

        this.loading = true;
        this.authenticationService.login(String(this.f.username.value), String(this.f.password.value))
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(['/dashboard']);
                },
                error => {
                    this.authenticationService.loginProblem$.next(true);
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
