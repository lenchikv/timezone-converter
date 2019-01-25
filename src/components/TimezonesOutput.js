import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'moment-timezone';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import HighlightOff from '@material-ui/icons/HighlightOff';
import Schedule from '@material-ui/icons/Schedule';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import { connect } from 'react-redux';
import { setTimezones } from '../store/actions';
import { getMomentDate, getTimezonedDate } from '../helpers/DateHelper';

// Additional export for testing
export class TimezonesOutput extends Component {
  removeTimezoneFromList = timezone => {
    const { updateTimezones, timezones } = this.props;
    const newTimezones = timezones.filter(item => item !== timezone);
    updateTimezones(newTimezones);
  };

  render() {
    const { operationDate, timezones } = this.props;
    const momentDate = getMomentDate(operationDate);
    return (
      <List style={{ width: 250, margin: 'auto' }}>
        {timezones.map((timezone, index) => (
          <ListItem key={timezone}>
            <ListItemAvatar>
              <Avatar>
                <Schedule />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={getTimezonedDate(momentDate, timezone)}
              secondary={timezone.replace('Etc/', '')}
            />
            {index !== 0 && (
              <ListItemSecondaryAction onClick={e => this.removeTimezoneFromList(timezone)}>
                <IconButton aria-label="Delete">
                  <HighlightOff />
                </IconButton>
              </ListItemSecondaryAction>
            )}
          </ListItem>
        ))}
      </List>
    );
  }
}

TimezonesOutput.propTypes = {
  timezones: PropTypes.arrayOf(PropTypes.string).isRequired,
  operationDate: PropTypes.string.isRequired,
  updateTimezones: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  updateTimezones: list => dispatch(setTimezones(list)),
});

const mapStateToProps = state => ({
  operationDate: state.date.basisDate,
  timezones: state.timezones,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimezonesOutput);
