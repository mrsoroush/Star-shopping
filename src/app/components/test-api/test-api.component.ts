import { Component, OnInit, OnDestroy } from '@angular/core';
import { IPost } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.less']
})
export class TestApiComponent implements OnInit, OnDestroy {
  
  postArray;
  httpSubscription: Subscription;
  
  constructor(private postService: PostService) { }
  
  ngOnInit() {
    this.httpSubscription = this.postService.getPosts().subscribe(
      response => this.postArray = response
    );
  }
  
  ngOnDestroy(): void {
    this.httpSubscription.unsubscribe();
  }
}
