import React from 'react'
import { AdmissionCard } from 'components'

import Engi from 'assets/svg/engi.svg'

const mockData = {
  icon: <Engi />,
  faculty: 'คณะวิศวกรรมศาสตร์',
  major: 'สาขาวิศวกรรมทั่วไป',
  university: 'จุฬาลงกรณ์มหาวิทยาลัย',
  yourScore: '23,453',
}

function App() {
  return (
    <div style={{ margin: '20px' }}>
      <AdmissionCard width="442px" data={mockData} />
    </div>
  )
}

export default App
