import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  title = 'fileUpload';
  document = '';
  multiplefiles: any = [];
  attachmentList: any = [];
  value: any;
  progress: any;



  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  selectDocument(event: any) {
    this.document = event.target.files[0];
  }

  selectMultipleDocument(event: any) {
    this.multiplefiles = event.target.files;
  }


  // onSubmit() {
  //   const formData = new FormData();
  //   formData.append('document', this.document);
  //   this.userService.document(formData).subscribe((res) => console.log(res)
  //   )
  // }

  onSubmit() {
    const formData = new FormData();
    formData.append('document', this.document);
    this.userService.document(formData).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total!);
          this.value = this.progress
        } else if (event.type == HttpEventType.Response) {
          console.log(event.body)
        }

      }
    );
  }

  onMultipleSubmit() {
    const formData = new FormData();



    for (let files of this.multiplefiles) {
      formData.append('document', files);
    }



    this.userService.multidocument(formData).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total!);
          this.value = this.progress
        } else if (event.type == HttpEventType.Response) {
          console.log(event.body)
        }
      })

  }


  getdoc() {
    this.userService.getdocument().subscribe
  }


  download(document: any) {
    var filename = this.attachmentList.document;

    this.userService.downloadFile(filename)
      .subscribe(
      // data => saveAs(data, filename),
      // error => console.error(error)
    );
  }


  logout() {
    this.userService.logOut().subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/']);
      },
      //err => this.errorHandler(err, 'Something went wrong'),
      //() => {
      // this.jwtService.destroyToken();
      // this.router.navigate(['/login']);
      //}
    );
  }


  color = 'primary';
  mode: any = 'determinate';

}






