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
    posts: [],
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
    postsUrl: function() {
        return `${ this.url() }/posts`;
    },
    loadPosts: function() {
        return fetch(this.postsUrl())
            .then(response => response.json())
            .then(data => {
                this.posts = data;
                return Promise.resolve(this);
            })

}
};
//constructor User
function User(obj) { //should the parameters be (id,name,todos,url,etc?)
    this.id = obj.id || null,
        this.name = obj.name || "",
        this.todos = obj.todos || [],
        this.url = obj.url || function() {
            return `https://jsonplaceholder.typicode.com/users/${ this.id }`;
        },
        this.fetch = obj.fetch  || function() {
            return fetch(this.url())
                .then(response => response.json())
                .then(data => {
                    this.name = data.name;
                    return Promise.resolve(this);
                });
        },
        this.todosUrl = obj.todosUrl || function() {
            return `${ this.url() }/todos`;
        },
        this.loadTodos = obj.loadTodos || function() {
            return fetch(this.todosUrl())
                .then(response => response.json())
                .then(data => {
                    this.todos = data;
                    return Promise.resolve(this);
                });
        }

};



function Posts(obj) {
    this.posts = obj.posts || [],
        this.postsUrl = obj.todosUrl || function() {
            return `${ this.url() }/posts`;
        },
        this.loadPosts = obj.Posts || function() {
            return fetch(this.postsUrl())
                .then(response => response.json())
                .then(data => {
                    this.posts = data;
                    return Promise.resolve(this);
                })
              },
                this.isPosts = function() {
                    if (this.posts)
                        return ``
                    else
                        return ``
                }
        };


    function Comment(obj) {
        this.comments = obj.comments || [],
            this.commentsUrl = obj.commentsUrl || function() {
                return `${ this.url() }/comments`;
            },
            this.loadComments = obj.Comments || function() {
                return fetch(this.commentsUrl())
                    .then(response => response.json())
                    .then(data => {
                        this.posts = data;
                        return Promise.resolve(this);
                    })
                  },
                    this.isComments = function() {
                        if (this.comments)
                            return ``
                        else
                            return ``

                    }
            };
