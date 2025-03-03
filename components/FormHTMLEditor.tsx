import React, { Component } from 'react'

interface FormHTMLEditorProps {
  defaultValue: string
  onChange: (para: string) => void
}

interface FormHTMLEditorState {}

export default class FormHTMLEditor extends Component<
  FormHTMLEditorProps,
  FormHTMLEditorState
> {
  ReactQuill: any

  constructor(props: FormHTMLEditorProps) {
    super(props)
    if (typeof window !== 'undefined') {
      this.ReactQuill = require('react-quill')
    }
  }

  modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
    clipboard: {
      matchVisual: false,
    },
  }

  formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
  ]

  render() {
    const ReactQuill = this.ReactQuill
    if (typeof window !== 'undefined' && ReactQuill) {
      return (
        <ReactQuill
          modules={this.modules}
          formats={this.formats}
          defaultValue={this.props.defaultValue}
          onChange={this.props.onChange}
          placeholder={'Enter Comment'}
        />
      )
    } else {
      return <textarea />
    }
  }
}
