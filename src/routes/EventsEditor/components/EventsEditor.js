import React, { PropTypes } from 'react'
import styles from './EventsEditor.scss'
import SelectBox from 'components/SelectBox'
import TextInput from 'components/TextInput'
import Table from 'components/Table'
import { EVENT_TYPE_NORMAL } from 'models/Event'
import { getNotExistMinUInt, getMinUInt } from 'utils/UIntArrayUtil'

export class EventsEditor extends React.Component {
  addEvent = () => {
    const { updateEvents, events } = this.props
    const eventIdArray = this.getEventIdArray(events)
    const newId = getNotExistMinUInt(eventIdArray)

    const newEvent = {
      id: newId,
      name: `Event ${newId}`,
      type: EVENT_TYPE_NORMAL
    }
    updateEvents(events.addEvent(newEvent).selectEvent(newId))
  }

  selectEvent = e => {
    const { updateEvents, events } = this.props
    updateEvents(events.selectEvent(e.target.value))
  }

  removeEvent = () => {
    const { updateEvents, events } = this.props
    const removeId = events.get('selectedId')
    let newEvents = events.removeEvent(removeId)
    const eventIdArray = this.getEventIdArray(newEvents)
    const selectedId = getMinUInt(eventIdArray)
    updateEvents(newEvents.selectEvent(selectedId))
  }

  setEventName = e => {
    const { updateEvents, events } = this.props
    updateEvents(events.updateEvent(e.target.value))
  }

  getEventIdArray (events) {
    const eventlist = events.get('list').toArray()
    return eventlist.map(event => event.get('id'))
  }

  render () {
    const { events } = this.props
    const eventlist = events.get('list')
    const selectedId = events.get('selectedId')
    const selectedEvent = eventlist.toObject()[selectedId]
    const options = eventlist.toArray().map(event => {
      const id = event.get('id').toString()
      return {
        name: event.get('name'),
        value: id
        // selected: id === selectedId
      }
    })
    console.log(selectedEvent, selectedId)
    const eventNameTextInput = selectedEvent && (
      <TextInput
        value={selectedEvent.get('name')}
        handleChange={this.setEventName}
      />
    )

    const headers = ['Parameter', 'Value']
    const data = selectedEvent ? [
      ['ID', selectedEvent.get('id')],
      ['Name', eventNameTextInput],
      ['Type', selectedEvent.get('type')]
    ] : []
    return (
      <div className={styles.EventsEditor}>
        <div>
          <button className='btn btn-default' onClick={this.addEvent}>
            +
          </button>
          <button className='btn btn-default' onClick={this.removeEvent}>
            -
          </button>
        </div>
        <div>
          <SelectBox options={options} handleChange={this.selectEvent} defaultValue={selectedId} />
        </div>
        <div>
          <Table headers={headers} data={data} />
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
