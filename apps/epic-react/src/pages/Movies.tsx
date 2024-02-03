import { useBooks } from '../hooks/books.ts'
import { Table, Form, Input } from 'antd'
import { useState } from 'react'

export const Movies = () => {
  const [title, setTitle] = useState('joker')
  const { data, isLoading: booksLoading } = useBooks(title)
  const [form] = Form.useForm()

  const updateTitle = ({ title }) => setTitle(title)

  const columns = [
    {
      title: 'Title',
      dataIndex: 'Title',
      key: 'Title',
    },
    {
      title: 'Type',
      dataIndex: 'Type',
      key: 'Type',
    },
    {
      title: 'Year',
      dataIndex: 'Year',
      key: 'Year',
    },
  ]
  const initialValues = { title }

  return (
    <div>
      <h1>Movies</h1>

      <Form layout="horizontal" form={form} onValuesChange={updateTitle} initialValues={initialValues}>
        <Form.Item name="title" label="Title">
          <Input placeholder="Type the title of the movie" value={title} />
        </Form.Item>
      </Form>

      {!booksLoading && <Table dataSource={data?.Search || []} columns={columns} rowKey={'imdbID'} />}
    </div>
  )
}
