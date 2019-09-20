import React from "react";
class Subscribers extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch("http://192.168.8.253:8080/allcustomers/")
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
            </tr>
            {this.state.data.map(value => (
              <tr>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.address}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    );
  }
}

export default Subscribers;
