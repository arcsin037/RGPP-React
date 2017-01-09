import React, { PropTypes } from 'react'
import styles from './EventsEditor.scss'
import SelectBox from 'components/SelectBox'
import TextInput from 'components/TextInput'
import Table from 'components/Table'

export class EventsEditor extends React.Component {
  addEvent = () => {
    const { updateEvents, events } = this.props
    updateEvents(events.addEvent())
  }

  selectEvent = e => {
    const { updateEvents, events } = this.props
    updateEvents(events.select(e.target.value))
  }

  removeEvent = () => {
    const { updateEvents, events } = this.props
    const removeId = events.getSelectedId()
    updateEvents(events.removeEvent(removeId))
  }

  setEventName = e => {
    const { updateEvents, events } = this.props
    updateEvents(events.updateEvent(e.target.value))
  }

  render () {
    const { events } = this.props
    const eventlist = events.getItems()
    const selectedId = events.getSelectedId()
    const selectedEvent = events.getSelectedItem()
    const options = eventlist.toArray().map(event => {
      const id = event.get('id').toString()
      return {
        name: event.get('name'),
        value: id
      }
    })
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
