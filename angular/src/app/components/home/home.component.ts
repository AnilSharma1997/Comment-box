import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  commentDescription: FormGroup;
  loadedComments: any;

  constructor(
    private authService : AuthService,
    private formBuilder: FormBuilder,
    private router : Router,
    private toastr : ToastrService
  ) { }

  ngOnInit() {
    this.authService.getCommentList().subscribe( res => {
      console.log("loaded comments are ",res);
      this.loadedComments = res;
    });

    this.commentDescription = this.formBuilder.group({
      comment: [null ,Validators.required]
    });
  }

  onComment(){
    if(this.commentDescription.value.comment == null){
      this.toastr.error('Comment field is required');
      return;
    }
    if(!this.authService.loggedIn()){
      this.toastr.error('Please Login');
      this.router.navigate(['/login']);
      return;
    }
    let comment  = this.commentDescription.value.comment;

    this.authService.comment(comment).subscribe(data => {
      console.log("comment posted ", data);
      this.loadedComments.push(data);
      this.toastr.success('Comment posted successfully');
    },
    (err) =>{
      console.log(err);
    })
  }

  onUpvote(comment){
    if(!this.authService.loggedIn()){
      this.toastr.error('Please Login');
      this.router.navigate(['/login']);
      return;
    }
    let user = this.authService.loadUser();
    let userId = user.id;
    if(comment.author.id == userId){
      this.toastr.error('You cant upvote your own comment');
      return;
    }

    if(comment.downvote.includes(userId)){
      this.toastr.error('You have already downvoted');
      return;
    }

    if(comment.upvote.includes(userId)){
      this.toastr.error('You have already upvoted');
      return;
    }
    const upvoteData = {
      comment_id : comment._id,
      id : user.id
    }
    this.authService.commentupvote(upvoteData).subscribe(data => {
      this.toastr.success('Comment upvoted successfully');
      comment.upvote.push(upvoteData.id);
      this.commentDescription.value.comment = '';
            //this.router.navigate(['/']);
    },
    (err)=>{
      console.log(err);
    })
  }

  onDownvote(comment){
    if(!this.authService.loggedIn()){
      this.toastr.error('Please Login');
      this.router.navigate(['/login']);
      return;
    }
    let user = this.authService.loadUser();
    let userId = user.id;
    if(comment.author.id == userId){
      this.toastr.error('You can not downvote your own comment');
      return;
    }

    if(comment.downvote.includes(userId)){
      this.toastr.error('You have already downvoted');
      return;
    }

    if(comment.upvote.includes(userId)){
      this.toastr.error('You have already upvoted');
      return;
    }
    const upvoteData = {
      comment_id : comment._id,
      id : user.id
    }
    this.authService.commentdownvote(upvoteData).subscribe(data => {
      this.toastr.success('Comment downvoted successfully');
      comment.downvote.push(upvoteData.id);
    })
  }
}
