import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  // const { addPost } = useContext(PostList);

  // const navigate = useNavigate(); //useNavigate hook can be used to do navigation programatically

  return (
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your User Id here
        </label>
        <input
          type="text"
          name="userId"
          className="form-control"
          id="userId"
          placeholder="Your User Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          name="title"
          className="form-control"
          id="title"
          placeholder="How are you feeling today...."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          rows="4"
          type="text"
          name="body"
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="likes" className="form-label">
          Number of Likes
        </label>
        <input
          type="number"
          name="likes"
          className="form-control"
          id="likes"
          placeholder="Number of likes"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="dislikes" className="form-label">
          Number of Dislikes
        </label>
        <input
          type="number"
          name="dislikes"
          className="form-control"
          id="dislikes"
          placeholder="Number of dislikes"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          name="tags"
          className="form-control"
          id="tags"
          placeholder="Please enter the tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);
  fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      // Manually add missing fields

      console.log(post); // Log the full post object to the console
    });

  return redirect("/");
}

export default CreatePost;

// ACTION: Action method can be used to perform an action  on submission of "Forms"
// Customs Forms: Custom form component need to be used  all with the "name" attibute for all inputs.
// Actions object will get an data object to generate correct request object. method = "post" attribute should be used
// "Data.request.formData()" can be used to get form data object
// "Object,fromEntries(formData)" can be used to get actual inputs data/
// "redirect()" response can be returned for navigation after submission
