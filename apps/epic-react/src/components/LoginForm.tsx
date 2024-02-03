import { FunctionComponent } from 'react'
import { Form, Input } from 'antd'

export type LoginFormFields = {
  username: string
  password: string
}

export type LoginFormProps = {
  onChange: (fieldValues: LoginFormFields) => void
}

export const LoginForm: FunctionComponent<LoginFormProps> = ({ onChange }) => {
  const [form] = Form.useForm()

  return (
    <Form
      initialValues={{ username: '', password: '' }}
      form={form}
      onChange={() => onChange(form.getFieldsValue())}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 16 }}
    >
      <Form.Item<LoginFormFields> label="Username" name="username">
        <Input />
      </Form.Item>
      <Form.Item<LoginFormFields> label="Password" name="password">
        <Input.Password />
      </Form.Item>
    </Form>
  )
}