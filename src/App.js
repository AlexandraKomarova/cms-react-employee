import React, { Component } from "react";
// import FriendCard from "./components/FriendCard";
// import Wrapper from "./components/Wrapper";
// import friends from "./friends.json";
// import "./App.css";
import ClassroomTable from "./ClassromTable"

import classroom from "./classroom.json"

class App extends Component {
  constructor(props) {
    super(props) 
      this.state = {
        classroom
      }
      this.showTAs = this.showTAs.bind(this)
      this.showStudents = this.showStudents.bind(this)
      this.showInstructor = this.showInstructor.bind(this)
    }
    showTAs() {
      this.setState({
        classroom: classroom.filter(classroom => (classroom.role === "TA"))
      })
    }
    showStudents() {
      this.setState({
        classroom: classroom.filter(classroom => (classroom.role === "student"))
      })
    }
    showInstructor() {
      this.setState({
        classroom: classroom.filter(classroom => (classroom.role === "instructor"))
      })
    }
    render() {
      return (
        <div className ="container">
         <ClassroomTable 
         classroom={this.state.classroom}
         showTAs={this.showTAs}
         showStudents={this.showStudents}
         showInstructor={this.showInstructor}
         />
        </div>
      )
    }
  }
  


// class App extends Component {
//   state = {
//     friends
//   };

//   getAllFriends = () => this.state.friends.map(({id, name, image, location, occupation}) => <FriendCard 
//   key={id} 
//   id={id}
//   name={name} 
//   image={image} 
//   occupation={occupation} 
//   location={location}
//   deleteFriend={this.deleteFriend}
//    />)

//   deleteFriend = (id) => {
//     const alteredFriends = this.state.friends.filter(friend => friend.id !== id)
//     this.setState({friends:alteredFriends});
//   };

//   render() {
//     return (
//       <Wrapper>
//         <h1 className="title">Friends List</h1>
//         {this.getAllFriends()}
//       </Wrapper>
//     );
//   }
// }

export default App;
