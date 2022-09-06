import React, { ChangeEvent } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap';

interface Props {
  placeholder: string;
  onSearch: (query: string) => void
}

export default function Search({
  placeholder,
  onSearch
}: Props) {
  const [query, setQuery] = React.useState('');
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  }
  const onClick = () => {
    onSearch(query);
  }
  return (
    <Form className="p-4 d-flex flex-row bg-light border-bottom">
      <FormControl
        width="100%"
        type="text"
        placeholder={placeholder}
        className="mr-sm-2"
        onChange={onChange}
        value={query}
      />
      <Button
        variant="outline-success"
        onClick={onClick}
        className="ml-1"
      >
        Search
      </Button>
    </Form>
  )
}
