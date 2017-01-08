import React, { PropTypes } from 'react'
import styles from './EventsEditor.scss'

export class EventsEditor extends React.Component {
  addEvent = () => {
    const { updateEvents, events } = this.props
    updateEvents(events.addEvent({
      id: 0,
      name: 'Event'
    }))
  }

  removeEvent = () => {
    const { updateEvents, events } = this.props
    updateEvents(events.removeEvent(0))
  }

  render () {
    const { events } = this.props
    const eventlist = events.get('list').toArray()
    const eventlistElm = (
      <div>
        {eventlist.map(event => (
          <div key={event.id}>
            <p className={'lead'}>{event.id}</p>
            <p>{event.name}</p>
          </div>
        ))}
      </div>
    )
    return (
      <div className={styles.EventsEditor}>
        <button className='btn btn-default' onClick={this.addEvent}>
          Add Event
        </button>
        <button className='btn btn-default' onClick={this.removeEvent}>
          Remove Event
        </button>
        {eventlistElm}
      </div>
    )
  }
}

EventsEditor.propTypes = {
  events: PropTypes.object.isRequired,
  updateEvents: PropTypes.func.isRequired
}

export default EventsEditor
