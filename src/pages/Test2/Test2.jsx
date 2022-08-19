import React from 'react'
import Button from '../../components/Button/Button'
import Layout from '../../hoc/Layout'

const Test2 = () => {
  return (
    <Layout withoutHeader>
      <div>Test2</div>
      <Button variant="blue">Синяя кнопка</Button>
    </Layout>
  )
}

export default Test2