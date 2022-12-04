import { Table } from "antd"
import { useEffect, useState } from "react"

export function DataEntry(props) {
  const [emissionData, setEmissionData] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/api/emission?emission_source=${props.source}`)
      .then((res) => res.json())
      .then((data) => { setEmissionData(data.data)})
      .catch((err) => { console.log(err)})
  }, [props]);

  const data = emissionData
  console.log(data)

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "key"
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "key"
    },
    {
      title: "Carbon Emission",
      dataIndex: "carbon_emission",
      key: "key",
      sorter: (a,b) => a.carbon_emission - b.carbon_emission
    },
  ]
  
  return (<div>
    <h3>Data Entry for {props.source}</h3>
    <header>
      <Table
      dataSource={data}
      columns={columns}
      >

      </Table>
    </header>
  </div>)
}
