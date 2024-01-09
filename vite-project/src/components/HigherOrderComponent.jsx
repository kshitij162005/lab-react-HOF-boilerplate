import React from "react";
import "../App.css";

export default class HigherOrderComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: "1", name: "Joe", user_type: "Developer", age: 31, years: 11 },
        { id: "2", name: "Hill", user_type: "Designer", age: 26, years: 4 },
        { id: "3", name: "John", user_type: "Teacher", age: 24, years: 2 },
        { id: "4", name: "Sam", user_type: "Entrepreneur", age: 58, years: 25 },
        { id: "5", name: "Jack", user_type: "Designer", age: 43, years: 18 },
      ],
      filterUsingUserType: [],
      filterUsingFirstLetter: [],
      filterUsingAge: [],
      totalYears: 0,
    };

    let filterData = this.state.userData.filter(
      (el) => el.user_type === "Designer"
    );
    this.state.filterUsingUserType = filterData;

    let ChangeName = this.state.userData.filter((el) =>
      el.name.startsWith("J")
    );
    this.state.filterUsingFirstLetter = ChangeName;

    let Age = this.state.userData.filter((el) => el.age > 28 && el.age <= 50);
    this.state.filterUsingAge = Age;

    let total = this.state.userData
      .filter((el) => el.user_type === "Designer")
      .reduce((acc, el) => acc + el.years, 0);
    this.state.totalYears = total;
  }

  render() {
    return (
      <>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h1>Display All Items</h1>
          <div style={{ border: "2px solid black" }}>
            {this.state.userData.map((el) => (
              <div className="container1">
                <div
                  key={el.id}
                  style={{
                    width: "400px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "20px",
                    color: "blue",
                  }}
                >
                  Id: {el.id}
                  Name: {el.name}
                  UserType: {el.user_type}
                </div>
              </div>
            ))}
          </div>

          <h1>Display Using User Type</h1>
          <div style={{ border: "2px solid black" }}>
            {this.state.filterUsingUserType.map((el) => (
              <div
                key={el.id}
                style={{
                  width: "400px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "20px",
                  color: "blue",
                }}
              >
                Id: {el.id}
                Name: {el.name}
                UserType: {el.user_type}
              </div>
            ))}
          </div>

          <h1>LIST ALL DATA BASED ON USERTYPE</h1>
          <div style={{ border: "2px solid black" }}>
            {this.state.filterUsingFirstLetter.map((el) => (
              <div
                key={el.id}
                style={{
                  width: "400px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "20px",
                  color: "blue",
                }}
              >
                Id: {el.id}
                Name: {el.name}
                UserType: {el.user_type}
              </div>
            ))}
          </div>

          <h1>Display Filter Using Age</h1>
          <div style={{ border: "2px solid black" }}>
            {this.state.filterUsingAge.map((el) => (
              <div
                key={el.id}
                style={{
                  width: "400px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "20px",
                  color: "blue",
                }}
              >
                Id: {el.id}
                Name: {el.name}
                UserType: {el.user_type}
              </div>
            ))}
          </div>

          <h1>Total Years of Designers</h1>
          <div style={{ border: "2px solid black" }}>
            <p
              style={{
                width: "400px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "20px",
                color: "black",
              }}
            >
              {this.state.totalYears}
            </p>
          </div>
        </div>
      </>
    );
  }
}
