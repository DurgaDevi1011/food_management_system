import { Component, OnInit } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { ViewChild, ElementRef, NgZone } from '@angular/core';
import {ActivatedRoute,Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public href: string = "";  
  restData:any;
  registerForm: FormGroup;
  submitted = false;
  @ViewChild('search') public searchElement: ElementRef;
  constructor(private formBuilder: FormBuilder,private mapsAPILoader: MapsAPILoader, private ngZone: NgZone,private route:ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.href = this.router.url;
    console.log(this.router.url);
    this.registerForm = this.formBuilder.group({
        userName: ['', Validators.required,Validators.email],
        password: ['', Validators.required]
    });

}
get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        console.log(this.registerForm.value)
        alert('SUCCESS!! :-)\n\n')
    }
}
