/** @jsx jsx */
import React, { useState, useEffect, useCallback, memo, useRef } from "react";
import { css, jsx } from "@emotion/core";

/** @function Spinner */
const Spinner = ({ loading }) => {
  return loading ? (
    <img
      src="https://i.imgur.com/01yMDgZ.gif"
      css={css`
        height: 30px;
        display: inline-block;
        margin-left: 10px;
      `}
    />
  ) : null;
};

/** @function Message */
const Message = ({ status, text }) => {
  return status && status !== "loading" ? (
    <div className={`message ${status}`}>{text}</div>
  ) : null;
};

/**
 * @function Field
 */
const Field = ({ field, onChange }) => {
  const { label, ...attributes } = field;

  return (
    <React.Fragment>
      <label>{label}</label>
      {(() => {
        switch (attributes.type) {
          case "textarea":
            return <textarea onChange={onChange} {...attributes} />;
          default:
            return <input onChange={onChange} {...attributes} />;
        }
      })()}
    </React.Fragment>
  );
};

const MemoField = memo(Field);

/**
 * @function AutoForm
 */
const SupportForm = ({ form, onSubmit, status }) => {
  const fieldsRef = useRef();

  const [fields, setFields] = useState(
    form.fields.map(field => ({
      ...field,
      name: field.name || field.label,
      value: ""
    }))
  );

  const updateFields = (name, value) => {
    const newFields = fields.map(field => {
      return field.name === name ? { ...field, value } : field;
    });
    setFields(newFields);
  };

  useEffect(() => {
    fieldsRef.current = updateFields;
  });

  useEffect(() => {
    if (status === "success") {
      setFields(fields.map(field => ({ ...field, value: "" })));
    }
  }, [status, fields]);

  const handleChange = useCallback(e => {
    const name = e.target.getAttribute("name");
    const value = e.target.value;

    const update = () => {
      fieldsRef.current(name, value);
    };

    update();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    const formData = fields.reduce((fields, field) => {
      return { ...fields, [field.name]: field.value };
    }, {});

    onSubmit(formData);
  };

  const { messages, spinner } = form.config;

  return (
    <form css={AutoFormCSS} onSubmit={handleSubmit}>
      {fields.map(field => (
        <MemoField key={field.name} field={field} onChange={handleChange} />
      ))}

      <div className="form-bottom">
        <button disabled={status === "success"} type="submit">
          {form.config.buttonText || "Submit"}
        </button>
        <Spinner loading={status === "loading" && spinner} />
      </div>

      <Message status={status} text={messages[status]} />
    </form>
  );
};

const AutoFormCSS = css`
  width: 500px;
  margin-left: 5px;
  input, textarea {
    display block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    margin-bottom: .8rem;
  }
  label {
    margin-bottom: .65rem;
    display block;
    padding-left: 2px;
    color: black;
    font-weight: 600;
    letter-spacing: 0.75px;
  }
  textarea {
    height: 125px;
  }
  button {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: .55rem 1.5rem;
    font-size: 1.2rem;
    line-height: 1.5;
    border-radius: .25rem;
    color: #fff;
    background-color: #FD6413;
    cursor: pointer;
  }
  button:disabled {
    background-color: #777;
  }
  .form-bottom {
    margin-top: 25px;
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    button {
      margin-right: 5px;
    }
  }
  .message {
    position: relative;
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: .25rem;
  }
  .message.success {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  }
  .message.error {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
  }
`;

export default SupportForm;
