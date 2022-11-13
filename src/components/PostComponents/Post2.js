import "./post.css";

function Post() {
  return (
    <div className="post">
      <div className="postInfoImageContainer">
        <img
          src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687289/retina_1708x683_op-Ten-Front-End-Design-Rules-For-Developers_Luke-Newsletter-d3a7d3e7430ee224cab75104f11342a0.png"
          alt=""
          className="postImg"
        />
        <figcaption className="postInfoImageCaption">Author</figcaption>
      </div>
      <div className="postInfo">
        <div>
        <div className="postCardFeatures">
          <span className="postCardFeatures__tag">Art</span>
          <span className="postCardFeatures__time">7mins</span>
        </div>

          <div className="postTitle">12 Powerful Design Tools for Front-End Developers</div>
          <div className="postDate">2 hours ago</div>
          <p className="postDesc">
          A friend of mine asked me if I would paint a version of the above artwork for him today. Unfortunately, I told him that, while I would love to, I can’t.

          I was telling him I recently had an art show and he told me he’d always loved the above painting, but it sold before he could buy it.

          I would love to create another version for him, but my hands no longer work the way they used to.
          </p>
        </div>
      </div>
    </div>
    
  );
}

export default Post;
