import React from "react";
class Person extends React.Component  { 
  state =  {
    Person: {
        fullName: "Imane",
        bio: "Mabio",
        imgSrc: "Maphoto",
        profession: "DP"
      },
      isshow: true
    };

    handleShowPerson = () => {
        this.setState({
          ...this.state,
          isshow: !this.state.isshow
        });
      };


    render() {
        return (
          <>
            {this.state.isshow && (
              <>
                <h1>{this.state.Person.fullName}</h1>
                <h1>{this.state.Person.bio}</h1>
                <img src={this.state.Person.imgSrc} alt="Imane2"></img>
                <h1>{this.state.Person.profession}</h1>
                <br></br>
              </>
            )}
    
            <button onClick={this.handleShowPerson}>click here</button>
          </>
        );
      }
    
    };
    export default Person;
