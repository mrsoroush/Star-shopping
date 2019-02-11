import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = "http://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url);
  }

  postPosts(post: IPost) {
    return this.http.post(this.url, post);
  }

}
