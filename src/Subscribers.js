import React from "react";
class Subscribers extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }

  render() {
    console.log(this.state.data);
    return (
      <div className="channel-subscribers">
        <div>
          <table border="1" width="100%" className="table-subscribers">
            <tr>
              <th>No</th>
              <th>Subscriber Name</th>
              <th>Subscriber Address</th>
              <th>Channel Website</th>
            </tr>
            {this.state.data.map(value => (
              <tr>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>{value.website}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    );
  }
}

export default Subscribers;
