import React, { PropTypes } from 'react'
import styles from './EventsEditor.scss'
import SelectBox from 'components/SelectBox'

export class EventsEditor extends React.Component {
  addEvent = () => {
    const { updateEvents, events } = this.props
    updateEvents(events.addEvent())
  }

  selectEvent = e => {
    const { updateEvents, events } = this.props
    updateEvents(events.selectEvent(e.target.value))
  }

  removeEvent = () => {
    const { updateEvents, events } = this.props
    updateEvents(events.removeEvent(events.get('selectedIds')))
  }

  render () {
    const { events } = this.props
    const eventlist = events.get('list').toArray()
    const options = eventlist.map(event => ({
      name: event.get('name'),
      value: event.get('id').toString()
    }))
    return (
      <div className={styles.EventsEditor}>
        <button className='btn btn-default' onClick={this.addEvent}>
          +
        </button>
        <button className='btn btn-default' onClick={this.removeEvent}>
          -
        </button>
        <div>
          <SelectBox options={options} handleChange={this.selectEvent} />
        </div>
      </div>
    )
  }
}

EventsEditor.propTypes = {
  events: PropTypes.object.isRequired,
  updateEvents: PropTypes.func.isRequired
}

export default EventsEditor
