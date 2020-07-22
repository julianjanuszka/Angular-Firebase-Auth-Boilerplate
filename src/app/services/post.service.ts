import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'

export class Post {
    body: string;
}

@Injectable({
    providedIn: 'root'
})
export class PostService {

    public posts: AngularFireList<Post>;
    userId: string;

    constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
        this.posts = db.list('/posts')
        this.afAuth.authState.subscribe(user => {
            if(user) this.userId = user.uid;
        })
    }

    getPostList(): AngularFireList<Post> {
        if (!this.userId) return;
        this.posts = this.db.list(`posts/${this.userId}`);
        return this.posts;
    }

    createPost(post: Post) {
        this.db.database.ref(`/posts/${this.userId}`).push(post);
    }
}