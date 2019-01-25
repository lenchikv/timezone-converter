import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { getTimezoneList } from '../helpers/DateHelper';
import { setTimezones } from '../store/actions';

// Additional export for testing redux by jest
export class TimezoneSelector extends Component {
  constructor(props) {
    super(props);
    const defaultTimezone = 'Etc/GMT';
    const { updateTimezones } = this.props;
    updateTimezones([defaultTimezone]);
    const timezonesMomentList = getTimezoneList();
    this.state = {
      timezone: defaultTimezone,
      timezonesMomentList,
    };
  }

  handleZoneChange = e => {
    const timezone = e.target.value;
    const { timezones, updateTimezones } = this.props;

    if (!timezones.includes(timezone)) {
      timezones.push(timezone);
      updateTimezones(timezones);
      const { timezone: oldTimezone } = this.state;
      if (!oldTimezone || oldTimezone !== timezone) {
        this.setState({ timezone });
      }
    }
  };

  render() {
    const { timezone, timezonesMomentList } = this.state;
    return (
      <FormControl className="form-styling" id="timezones-list">
        <InputLabel htmlFor="timezone">Add Timezone</InputLabel>
        <Select
          id="timezone"
          style={{ width: 200 }}
          value={timezone}
          onChange={this.handleZoneChange}
        >
          {timezonesMomentList.map(zone => (
            <MenuItem key={zone} value={zone}>
              {zone.replace('Etc/', '')}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateTimezones: list => dispatch(setTimezones(list)),
});

const mapStateToProps = state => ({
  timezones: Array.isArray(state.timezones) ? state.timezones : [],
});

TimezoneSelector.propTypes = {
  timezones: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Object)]).isRequired,
  updateTimezones: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimezoneSelector);
