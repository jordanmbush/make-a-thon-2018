import React, {Component} from 'react';
import withHeader from '../../templates/WithHeader.hoc';
import SideBar from '../../components/SideBar';
import Accordion from '../../components/Accordion';
import './DashBoardView.css';

class DashBoardView extends Component {
  constructor() {
    super();
    this.state = {
      filterValue: '',
    }
  }

  handleChange = ({target: {id, value}}) => {
    this.setState({
      [id]: value,
    })
  }

  render() {
    const {filterValue} = this.state;
    return (
      <div className="dashboard-view flex jc-space-around ai-flex-start">
        <SideBar />
        <div className="main flex-col" aria-modal="true">
          <div className="flex jc-space-between header">
            <input placeholder="Search Experiment" id="filterValue" className="flex ai-center search-input input" value={filterValue} onChange={this.handleChange} />
            <div className="flex jc-space-between action-buttons-container">
              <a href="http://www.google.com">CREATE</a>
              <button>Open Notebook</button>
              <button>Stop Notebook</button>
              <button>TRAIN</button>
            </div>
          </div>
          <Accordion title="Training" isOpen>Test Text</Accordion>
          <Accordion title="Verification Stage">Test Text</Accordion>
          <Accordion title="Deployed">Test Text</Accordion>
        </div>
      </div>
    )
  }
}

export default withHeader(true)(DashBoardView);