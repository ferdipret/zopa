import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import color from './style-utils/colors'
import shadow from './style-utils/shadows'

export class Input extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string,
    error: PropTypes.bool,
    helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  }

  static defaultProps = {
    label: '',
    value: '',
    className: '',
    placeholder: '',
    error: false,
  }

  constructor() {
    super()
    this.state = {
      active: false,
    }
  }

  render() {
    const { className, value, onChange, label, helperText, error } = this.props

    return (
      <div className={className}>
        <input
          className="input-field"
          onChange={onChange}
          onFocus={() => this.setState({ active: true })}
          value={value}
        />
        <label
          htmlFor={label}
          className={`label ${this.state.active && 'active'} ${value &&
            'has-content'}`}>
          {label}
        </label>
        {helperText && this.renderHelperText({ helperText, error })}
      </div>
    )
  }

  renderHelperText = ({ helperText, error }) => {
    return typeof helperText === 'string' ? (
      <div className={`helper ${error && 'error-text'}`}>{helperText}</div>
    ) : (
      helperText.map((text, i) => (
        <div key={i} className={`helper ${error && 'error-text'}`}>
          {text}
        </div>
      ))
    )
  }
}

// prettier-ignore
const StyledInput = styled(Input)`
  position: relative;
  width: 100%;

  input:-webkit-autofill {
    background-color: white !important;
    animation-name: onAutoFillStart;
    transition: background-color 50000s ease-in-out 0s;
    -webkit-box-shadow: 0 0 0 30px white inset;
  }

  .input-field {
    background-color: transparent;
    box-shadow: none;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid ${color.greyInputBorder()};
    border-radius: 0;
    font-size: 1rem;
    height: 1.5rem;
    margin: 1.5rem 0 8px 0;
    outline: none;
    padding: 0;
    transition: all 0.3s;
    width: 100%;

    &.icon-padding {
      padding-right: 1.5rem;
    }

    ${props => props.error && css`
      border-color: ${color.danger()};
    `};

    &:focus {
      border-bottom: 1px solid ${color.primary()};
      box-shadow: ${shadow.input.default};
      -webkit-box-shadow: 0 0 0 30px white inset;

      ${props => props.error && css`
        border-color: ${color.danger()};
        box-shadow: ${shadow.input.danger};
        -webkit-box-shadow: 0 0 0 30px white inset;
      `};
    }
  }

  .label {
    color: ${color.lightGreyText()};
    cursor: text;
    font-size: 1rem;
    height: 100%;
    left: 0;
    pointer-events: none;
    position: absolute;
    transition: all 0.2s ease-out;
    transform-origin: 0% 100%;
    text-align: initial;
    top: 0;
    transform: translateY(1.5rem);

    &.has-content {
      font-size: 0.8rem;
      transform: translateY(0);
      ${props => props.error && css`
        color: ${color.danger()};
      `};
    }

    &.active {
      color: ${color.primary()};
      font-size: 0.8rem;
      transform: translateY(0);
      ${props => props.error && css`
        color: ${color.danger()};
      `};
    }
  }

  .helper {
    color: ${color.lightGreyText()};
    font-size: 0.75rem;
    font-style: italic;
  }

  .error-text {
    color: ${color.danger()};
    font-size: 0.75rem;
  }
`

export default StyledInput
