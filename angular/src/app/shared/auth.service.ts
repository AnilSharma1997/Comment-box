import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	authToken: any;
	user: any;
	//readonly baseURL = 'http://localhost:3000/';
	constructor(private http: HttpClient) {}

	registerUser(userData) {
		return this.http.post('users/register', userData);
	}

	authenticateUser(userData) {
		return this.http.post('users/authenticate', userData);
	}

	loggedIn() {
		// console.log("logged in jwt helper ",this.jwtHelper.isTokenExpired());
		// return !this.jwtHelper.isTokenExpired();
		if (localStorage.getItem('user')) return true;
		else return false;
	}

	storeUserData(token, user) {
		localStorage.setItem('id_token', token);
		localStorage.setItem('user', JSON.stringify(user));
		this.authToken = token;
		this.user = user;
	}

	loadUser() {
		const user = localStorage.getItem('user');
		return JSON.parse(user);
	}

	logout() {
		this.authToken = null;
		this.user = null;
		localStorage.clear();
	}

	getCommentList() {
		return this.http.get('comments');
	}

	comment(comment) {
		let user = this.loadUser();
		const data = {
			text: comment,
			author:
				{
					id: user.id,
					username: user.username
				}
		};
		return this.http.post('comments', data);
	}

	commentupvote(data) {
		let comid = data.comment_id;
		let userid = {
			id: data.id
		};
		return this.http.put('comments/upvote/' + comid, userid);
	}

	commentdownvote(data) {
		let comid = data.comment_id;
		let userid = {
			id: data.id
		};
		return this.http.put('comments/downvote/' + comid, userid);
	}
}
