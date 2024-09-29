import { useMemo, useState } from 'react'
import { Button, Input } from './components'
import { Container, Content, OldValue, Result, Row } from './styles'

const calc = (dataList) => {
  return dataList.reduce(
    (acc, data) => {
      const type = data.type
      const value = Number(data.value)

      if (type === 'number') {
        if (acc.operation === undefined) return { ...acc, total: value, operation: type }
        if (acc.operation === 'addition') return { ...acc, total: acc.total + value }
        if (acc.operation === 'subtraction') return { ...acc, total: acc.total - value }
        if (acc.operation === 'multiplication') return { ...acc, total: acc.total * value }
        if (acc.operation === 'division') return { ...acc, total: acc.total / value }
      }

      if (type === 'addition') return { ...acc, operation: type }
      if (type === 'subtraction') return { ...acc, operation: type }
      if (type === 'multiplication') return { ...acc, operation: type }
      if (type === 'division') return { ...acc, operation: type }

      return acc
    },
    { total: 0, operation: undefined }
  )
}

const updateOperations = ({ currentNumber, operations, type }) => {
  if (currentNumber !== '') return [...operations, { type: 'number', value: currentNumber }, { type }]

  const lastOperation = operations[operations.length - 1]?.type
  if (lastOperation !== type && lastOperation !== 'number') return [...operations.toSpliced(-1), { type }]
  if (lastOperation === 'number') return [...operations, { type }]

  const numbers = operations.filter((p) => p.type === 'number')
  const lastNumber = numbers[numbers.length - 1].value
  return [...operations, { type: 'number', value: lastNumber }, { type }]
}

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('')
  const [dataList, setDataList] = useState([])

  const handleAddNumber = (number) => setCurrentNumber((prev) => prev + number)

  const addition = () => {
    const type = 'addition'
    setDataList((operations) => updateOperations({ currentNumber, operations, type }))
    setCurrentNumber('')
  }

  const subtraction = () => {
    const type = 'subtraction'
    setDataList((operations) => updateOperations({ currentNumber, operations, type }))
    setCurrentNumber('')
  }

  const multiplication = () => {
    const type = 'multiplication'
    setDataList((operations) => updateOperations({ currentNumber, operations, type }))
    setCurrentNumber('')
  }

  const division = () => {
    const type = 'division'
    setDataList((operations) => updateOperations({ currentNumber, operations, type }))
    setCurrentNumber('')
  }

  const total = () => {
    setDataList((prev) => [...prev, { type: 'number', value: currentNumber }])
    setCurrentNumber('')
  }

  const handleOnClear = () => {
    setDataList([])
    setCurrentNumber('')
  }

  const result = useMemo(() => calc(dataList), [dataList])
  const showTotal = currentNumber === ''

  return (
    <Container>
      <Content>
        <Result>
          <OldValue>{result.operation !== undefined ? result.total : ''}</OldValue>
          <Input value={showTotal ? result.total : currentNumber} />
        </Result>

        <Row>
          <Button label="7" onClick={() => handleAddNumber(7)} />
          <Button label="8" onClick={() => handleAddNumber(8)} />
          <Button label="9" onClick={() => handleAddNumber(9)} />
          <Button label="/" onClick={division} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber(4)} />
          <Button label="5" onClick={() => handleAddNumber(5)} />
          <Button label="6" onClick={() => handleAddNumber(6)} />
          <Button label="x" onClick={multiplication} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber(1)} />
          <Button label="2" onClick={() => handleAddNumber(2)} />
          <Button label="3" onClick={() => handleAddNumber(3)} />
          <Button label="-" onClick={subtraction} />
        </Row>
        <Row>
          <Button label="C" onClick={handleOnClear} />
          <Button label="0" onClick={() => handleAddNumber(0)} />
          <Button label="=" onClick={total} />
          <Button label="+" onClick={addition} />
        </Row>
      </Content>
    </Container>
  )
}

export default App
