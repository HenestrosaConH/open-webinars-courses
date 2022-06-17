// 1. Define Person type shared with admin, developer and editor.
type Role = {
  role: [number, string];
};

type Person = Role & {
  name: string;
  lastName: string;
};

const admin: Person = {
  name: "Jhon",
  lastName: "Smith",
  role: [1, "Admin"],
};

const developer: Person = {
  name: "Jose",
  lastName: "Cabrera",
  role: [2, "Developer"],
};

const editor: Person = {
  name: "Will",
  lastName: "Doe",
  role: [3, "Editor"],
};

// 2. Define BlogPost type with post properties.
type BlogPostId = number;

type BlogPost = {
  id: BlogPostId;
  title: string;
  createdAt: string;
  author: Person;
};

const POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Aprender TypeScript",
    createdAt: "03/03/2020",
    author: developer,
  },
  {
    id: 2,
    title: "Aprender JavaScript",
    createdAt: "18/03/2020",
    author: editor,
  },
  {
    id: 3,
    title: "Es realmente TypeScript útil?",
    createdAt: "18/05/2020",
    author: admin,
  },
];

// 3. Define PostLog record.
const postLog: Record<BlogPostId, EditedPost> = {};

// 4. Define EditedPost with the properties `oldPost`, `editedBy`, `editedAt` and `newPost`.
type EditedPost = {
  oldPost: BlogPost;
  editedBy: Person;
  editedAt: number;
  newPost: BlogPost;
};

// 5. Type the parameters of the functions
function isAdmin(person: Person) {
  const [role, roleName] = person.role;
  return role === 1 && roleName === "Admin";
}

// 5. Type the parameters of the functions
function notHasPermissionLog({ name, role }: Person, { title }: BlogPost) {
  console.log(
    `User ${name} with the role ${role[1]} has no permission to edit the post ${title}`
  );
}

for (let i = 0; i < POSTS.length; i++) {
  const blogPost = POSTS[i];
  if (isAdmin(blogPost.author)) {
    // If the id value is not present in the postLog object…
    if (!(blogPost.id in postLog)) {
      const copyPost = JSON.parse(JSON.stringify(blogPost));
      copyPost.title = "¿Es realmente TypeScript útil?";
      copyPost.author = admin;

      const editedPost: EditedPost = {
        oldPost: blogPost,
        editedBy: admin,
        editedAt: Date.now(),
        newPost: copyPost,
      };

      postLog[blogPost.id] = editedPost;
    }
  } else {
    notHasPermissionLog(blogPost.author, blogPost);
  }
}

console.log(postLog);
