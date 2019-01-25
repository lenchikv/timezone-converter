import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import 'moment-timezone';
import { connect } from 'react-redux';
import { setDate, updateBasisDate } from '../store/actions';
import { setDateToFormatted, setDefaultTime, getDefaultTimezone } from '../helpers/DateHelper';

class TimeSelector extends Component {
  constructor(props) {
    super(props);
    const { updateDate } = this.props;
    this.defaultTime = setDefaultTime();
    updateDate({
      basisDate: setDateToFormatted(),
      currentTimeZone: getDefaultTimezone(),
    });
  }

  addZoneToList = zone => {
    const { zoneList = [] } = this.state;
    if (!zoneList.includes(zone)) {
      this.setState(state => {
        const newList = state.zoneList.concat(zone);
        return { zoneList: newList };
      });
    }
  };

  setNewTime = e => {
    e.preventDefault();
    const newTime = e.target.value.split(':');
    if (!Array.isArray(newTime) || newTime.length !== 2) {
      return;
    }
    const { operationDate, updateBasis } = this.props;
    updateBasis({ basisDate: setDateToFormatted(operationDate, newTime) });
  };

  render() {
    return (
      <FormControl>
        <TextField
          id="time"
          label="Time"
          placeholder="Time"
          className="contact-page-name-list-field"
          style={{ width: 200 }}
          type="time"
          defaultValue={this.defaultTime}
          inputProps={{ step: 300 }}
          onChange={this.setNewTime}
        />
      </FormControl>
    );
  }
}

TimeSelector.propTypes = {
  operationDate: PropTypes.string,
  updateDate: PropTypes.func.isRequired,
  updateBasis: PropTypes.func.isRequired,
};

TimeSelector.defaultProps = {
  operationDate: '',
};

const mapDispatchToProps = dispatch => ({
  updateDate: date => dispatch(setDate(date)),
  updateBasis: date => dispatch(updateBasisDate(date)),
});

const mapStateToProps = state => ({ operationDate: state.date.basisDate });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimeSelector);
