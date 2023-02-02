const Deque = require('./deque')

let deque

beforeEach(() => {
    deque = new Deque()
})

describe('appendLeft()', () => {
    test('Take the place of the first value', () => {
        expect(deque.appendLeft(1)).toBe(undefined)
        expect(deque.first.val).toEqual(1)
        expect(deque.last.val).toEqual(1)
        
        deque.appendLeft(2)
        deque.appendLeft(3)

        expect(deque.first.val).toEqual(3)
        expect(deque.first.next.val).toEqual(2)
        expect(deque.first.next.next.val).toEqual(1)
        expect(deque.last.val).toEqual(1)
        expect(deque.last.previous.val).toEqual(2)
    })
    
})

describe('appendRight()', () => {
    test('Take the place of the last value', () => {
        expect(deque.size).toEqual(0)
        expect(deque.appendRight(1)).toBe(undefined)
        expect(deque.first.val).toEqual(1)
        expect(deque.last.val).toEqual(1)
        
        deque.appendRight(2)
        deque.appendRight(3)

        expect(deque.last.val).toEqual(3)
        expect(deque.last.previous.val).toEqual(2)
        expect(deque.last.previous.previous.val).toEqual(1)
        expect(deque.first.val).toEqual(1)
        expect(deque.first.next.val).toEqual(2)
        expect(deque.size).toEqual(3)
    })
})

describe('popLeft()', () => {
    test("Remove the first value", () => {
        expect(deque.size).toEqual(0)
        deque.appendRight(1)
        deque.appendRight(2)
        deque.appendRight(3)
        expect(deque.size).toEqual(3)

        expect(deque.popLeft()).toEqual(1)
        expect(deque.popLeft()).toEqual(2)
        expect(deque.popLeft()).toEqual(3)
        expect(deque.size).toEqual(0)
    })
})

describe('popRight()', () => {
    test('Remove the last value', () => {
        expect(deque.size).toEqual(0)
        deque.appendLeft(1)
        deque.appendLeft(2)
        deque.appendLeft(3)
        expect(deque.size).toEqual(3)

        expect(deque.popRight()).toEqual(1)
        expect(deque.popRight()).toEqual(2)
        expect(deque.popRight()).toEqual(3)
        expect(deque.size).toEqual(0)
    })
})

describe('peekLeft()', () => {
    test("View value of first element", () => {
        expect(() => deque.peekLeft()).toThrow(Error)
        deque.appendLeft(1)
        expect(deque.peekLeft()).toEqual(1)
        deque.appendLeft(2)
        expect(deque.peekLeft()).toEqual(2)
    })
})

describe('peekRight()', () => {
    test("View value of first element", () => {    
        expect(() => deque.peekRight()).toThrow(Error)
        deque.appendRight(1)
        expect(deque.peekRight()).toEqual(1)
        deque.appendRight(2)
        expect(deque.peekRight()).toEqual(2)
    })
})

describe('isEmpty()', () => {
    test('Return true if deque is empty', () => {
        expect(deque.isEmpty()).toBe(true)
    })
})