const KEY_COUNT = 256

class KeyBoard {

  constructor () {
    this.key = [KEY_COUNT]
    this.keyPrevious = [KEY_COUNT]
    for (let i = 0; i < KEY_COUNT; i += 1) {
      this.key[i] = false
      this.keyPrevious[i] = false
    }
  }

  onkeydown (e) {
    if (e) { // Fire fox
      this.key[e.which] = true
    } else {
      this.key[event.keyCode] = true
    }
    e.preventDefault()
    return false
  }

  onkeyup (e) {
    if (e) { // Fire fox
      this.key[e.which] = false
      this.keyPrevious[e.which] = false
    } else {
      this.key[event.keyCode] = false
      this.keyPrevious[event.keyCode] = false
    }
    return false
  }

    // Key On
  isKeyOn (code) {
    return this.key[code]
  }

    // Key Triggered
  isKeyTriggered (code) {
    if (this.key[code]) {
      if (this.keyPrevious[code]) {
        return false
      } else {
        return true
      }
    }
    return false
  }

  keyInfo () {
    return {
      key: this.key,
      keyPrevious: this.keyPrevious
    }
  }
}

export default KeyBoard
