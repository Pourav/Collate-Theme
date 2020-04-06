import fire,{firebase,firestore} from './firebase.utils'

export function login() {
	fire.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
	.then(function() {
		return loginHelper()
	})
	.catch(function(error) {
		console.log(error)
	});
}

export function loginHelper() {
    console.log("Here in google auth 1")
	var provider = new firebase.auth.GoogleAuthProvider();
	var promise = fire.auth().signInWithPopup(provider)
	.then(function(result) {
		var user = result.user;
		console.log("Here in google auth 2")
		console.log(user.displayName)
		
	}).catch(function(error) {
		console.log(error)
	});
	return promise;
}
export function loginfb(){
	fire.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
	.then(function() {
		return loginfbHelper()
	})
	.catch(function(error) {
		console.log(error)
	});
}
export function loginfbHelper() {
    console.log("Here in facebook auth 1")
	var provider = new firebase.auth.FacebookAuthProvider();
	var promise = fire.auth().signInWithPopup(provider)
	.then(function(result) {
		var user = result.user;
		console.log("Here facebook auth 2")
		console.log(user.displayName)
		console.log(user.email)
		
	}).catch(function(error) {
		console.log(error)
	});
	return promise;
}
export function setAuthListener() {
	fire.auth().onAuthStateChanged(user=>{
		if (user) {
            console.log("User in auth listedner function")
			console.log(user.displayName)
			return user
			} else {
			
			console.log("not user")
		}
	})
}

