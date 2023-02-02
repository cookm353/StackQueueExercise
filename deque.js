class Node {
    constructor(val) {
        this.val = val
        this.prev = null
        this.next =null
    }
}

class Deque {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    appendLeft(val) {
        const newFirst = new Node(val)

        if (this.isEmpty()) {
            this.last = newFirst
        } else {
            this.first.previous = newFirst
            newFirst.next = this.first
        }

        this.first = newFirst
        
        this.size++
    }

    appendRight(val) {
        const newLast = new Node(val)

        if (this.isEmpty()) {
            this.first = newLast
        } else {
            this.last.next = newLast
            newLast.previous = this.last
        }

        this.last = newLast
        this.size++
    }

    popLeft() {
        if (this.isEmpty()) {
            throw new Error
        }

        const oldLeft = this.first

        if (this.size === 1) {
            this.last = null
            this.first = null
        } else {
            this.first = oldLeft.next
            this.first.previous = null
        }

        oldLeft.next = null

        this.size--
        return oldLeft.val
    }

    popRight() {
        if (this.isEmpty()) {
            throw new Error
        }

        const oldRight = this.last

        if (this.size === 1) {
            this.first = null
            this.last = null
        } else {
            this.last = oldRight.previous
            this.last.next = null
        }

        oldRight.previous = null
        
        this.size--
        return oldRight.val
    }

    peekLeft() {
        if (this.isEmpty()) {
            throw new Error
        }

        return this.first.val
    }

    peekRight() {
        if (this.isEmpty()) {
            throw new Error
        }

        return this.last.val
    }

    isEmpty() {
        return this.size === 0
    }
}

module.exports = Deque