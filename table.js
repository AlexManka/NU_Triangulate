import React from 'react';
//import ReactDOM from 'react-dom';
class Table extends React.Component {
    constructor(props) {
       super(props)
       this.state = {
          students: [
             { title: 'Pizza Party', deadline: '2/24/20',  response: 'yes/no' },
             { title: 'Chem Study Group', deadline: '2/27/20',  response: 'yes/no' },
             { title: 'Dance Club meeting', deadline: '3/4/20',  response: 'yes/no' },
             { title: 'Group Project', deadline: '3/15/20', response: 'yes/no' }
          ]
       }
    }
 
    renderTableHeader() {
       let header = Object.keys(this.state.students[0])
       return header.map((key, index) => {
          return <th key={index}>{key.toUpperCase()}</th>
       })
    }
 
    renderTableData() {
       return this.state.students.map((student, index) => {
          const { title, deadline, response } = student //destructuring
          return (
             <tr key={title}>
                <td>{title}</td>
                <td>{deadline}</td>
                <td>{response}</td>
             </tr>
          )
       })
    }
 
    render() {
       return (
          <div>
             <h1 id='title'>Open Invitations</h1>
             <table id='students'>
                <tbody>
                   <tr>{this.renderTableHeader()}</tr>
                   {this.renderTableData()}
                </tbody>
             </table>
          </div>
       )
    }
 }
 
 export default Table;

 //ReactDOM.render(<Table />, document.getElementById('root'));