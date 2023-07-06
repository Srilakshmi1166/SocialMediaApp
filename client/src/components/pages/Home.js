const Home = () => {
    return(
      <div>
        <h1 className="text-center display-1">Social Media Application</h1>
        <div className="container">
          <hr />
          <h2 className="text-center">Description about the application.</h2>
          <hr />
          <div className="row text-primary">
            <div className="col-md">
              This application allows you to post texts.
            </div>
            <div className="col-md">
              You can follow your friends and vice versa.
            </div>
            <div className="col-md">
              You can comment on the posts of people you follow. Your friend can comment on your posts.
            </div>
          </div>          
        </div>
      </div>
    );
  }
  
  export default Home;