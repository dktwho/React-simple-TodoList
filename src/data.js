const { nanoid } = require("nanoid");

const generateId = () =>  {
  return nanoid()
}

const data = [
  {
    id: generateId(),
    title: 'todo text 1',
    isComplete: false
  },
]

export { data, generateId}
