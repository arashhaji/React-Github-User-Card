import React from 'react';
import axios from "axios";
import UserCard from "./UserCard";
import FollowerList from "./FollowersList"

class UserProfile extends React.Component {

    state ={
      name: [],
    }

    componentDidMount () {
      axios
      .get(`https://api.github.com/users/arashhaji`)
      .then (res => {
        this.setState({
          name: res.data.name,
          img: res.data.avatar_url,
          bio: res.data.bio,
        });
      })
      .catch (error => console.log (error));
    }


    render (){
    return (
      <div>
        <UserCard user={this.state.name} img={this.state.img} bio={this.state.bio}  />
      </div>
    // <div className="appContainer">
    //     <form className="searchForm" onSubmit={this.submitHandler}>
    //       <input
    //         type="text"
    //         name="search"
    //         value={this.state.search}
    //         onChange={this.changeHandler}
    //         placeholder="search a github username"
    //       />
    //       <button>Search</button>
    //     </form>
    //     <UserCard
    //       image={this.state.user.avatar_url}
    //       name={this.state.user.name}
    //       bio={this.state.user.bio}
    //       location={this.state.user.location}
    //       follower={this.state.user.followers}
    //       following={this.state.user.following}
    //     />
    //     <h2>User {this.state.user.name}'s followers</h2>
    //     <FollowerList username={this.state.user.name} />
    //   </div>
    );
    }
  }

  export default UserProfile;

