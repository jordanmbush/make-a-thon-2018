import React, {Component} from 'react';
import SectionHeader from './SectionHeader';
import './Accordion.css';

class Accordion extends Component {
  constructor(props) {
    const {isOpen} = props;
    super(props);
    this.state = {
      isOpen: isOpen || false,
    }
  }

  render() {
    const {isOpen} = this.state;
    const {children, title} = this.props;

    return(
      <div className="accordion flex-col" onClick={ () => this.setState({isOpen: !isOpen})}>
        <SectionHeader title={title} />
        <div className={`section-content ${isOpen && 'expanded'}`} role="button">
          {children}
        </div>
      </div>
    )
  }
}

export default Accordion;
