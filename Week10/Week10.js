/*The classword is available in this folder. I have extended it to show you the use of
constructors to better achieve what we did in class. Take a look carefully so you can do the following:

    Add a method to load posts for a user object. For example from: https://jsonplaceholder.typicode.com/users/1/posts.
    Look at the constructor Todo. Can you also make the user object into a constructor User and use that instead in the example?
    Create a constructor Post to handle the posts that you loaded.
    Add a method in the Post constructor to load comments for a post. For example from: https://jsonplaceholder.typicode.com/posts/1/comments.
    Create a constructor Comment to handle the comments that you loaded in the previous step.
    Can you now wire it together so you:
        Create a User.
        Load Post(s) for this User.
        Load Comment(s) for the 1st Post.
*/

const user = {
    // declaring default values for properties
    id: null,
    name: "",
    todos: [],
    url: function() {
        return `https://jsonplaceholder.typicode.com/users/${ this.id }`;
    },
    fetch: function() {
        return fetch(this.url())
            .then(response => response.json())
            .then(data => {
                this.name = data.name;
                return Promise.resolve(this);
            });
    },
    todosUrl: function() {
        return `${ this.url() }/todos`;
    },
    loadTodos: function() {
        return fetch(this.todosUrl())
            .then(response => response.json())
            .then(data => {
                this.todos = data;
                return Promise.resolve(this);
            });
    },
    posts: function() { //what should it return? or do you mean to make something outside the object like user.posts = something?
        if (post === "https://jsonplaceholder.typicode.com/users/1/posts")
            return true;
        else
            return false;
    }
};


function User() {
    this.id = null,
        this.name = "",
        this.todos = [],
        this.url = function() {
            return `https://jsonplaceholder.typicode.com/users/${ this.id }`;
        },
        this.fetch = function() {
            return fetch(this.url())
                .then(response => response.json())
                .then(data => {
                    this.name = data.name;
                    return Promise.resolve(this);
                });
        },
        this.todosUrl = function() {
            return `${ this.url() }/todos`;
        },
        this.loadTodos = function() {
            return fetch(this.todosUrl())
                .then(response => response.json())
                .then(data => {
                    this.todos = data;
                    return Promise.resolve(this);
                });
        }
        this.post = //
        this.posts = function() {
            if (this.post)
                return ``; //what should it return?
            else
                return ``;
        }
}
};



function Post() {
    this.posts =
    this.comments = //??
		this.comment = function() {
		    if (this.comments)
		        return ``
		    else
		        return ``
		}
}



function Comment() {
    this.comments = //
}
