import React, { PureComponent } from 'react'
import styled, { css } from 'styled-components'
import ReactSelect from 'react-select'

import { onlyMobile, onlyDesktop, colors, fonts } from 'utils/styles'

export default class extends PureComponent {
  static defaultProps = {
    onChange: () => {}
  }

  render() {
    const { value, options, onChange } = this.props
    return (
      <>
        <Wrapper onlyDesktop>
          <ReactSelect
            classNamePrefix="select"
            value={value}
            onChange={this._handleReactSelectChange}
            options={options}
            autoFocus={false}
            isSearchable={false}
          />
        </Wrapper>
        <Wrapper onlyMobile>
          <NativeSelect value={value.value} onChange={this._handleNativeSelectChange}>
            {options.map((item, index) => {
              return (
                <option key={index} value={item.value}>
                  {item.label}
                </option>
              )
            })}
          </NativeSelect>
        </Wrapper>
      </>
    )
  }

  _handleReactSelectChange = selectedCity => {
    this.props.onChange(selectedCity.value)
  }

  _handleNativeSelectChange = event => {
    let value = event.target.value
    if (value === 'false') {
      value = false
    }
    this.props.onChange(value)
  }
}

const selectStyles = css`
  width: 100%;
  text-transform: uppercase;
  border: 0;
  border-color: ${colors.accent}!important;
  border-radius: 0;
  border-bottom: 2px solid ${colors.accent};
  outline: none;
  cursor: pointer;
  color: ${colors.accent};
  background-color: transparent;
  font-size: 18px;
  line-height: 1;
  box-shadow: none;
`

const Wrapper = styled.div`
  .select__control {
    ${selectStyles};
    padding: 8px 0;
  }

  .select__indicator {
    color: ${colors.accent};
  }

  .select__indicator-separator {
    display: none;
  }

  .select__menu {
    border-radius: 0;
  }

  .select__menu-list {
  }

  .select__option {
    cursor: pointer;

    &--is-selected {
      color: white;
      background-color: ${colors.accent};
    }
  }

  ${props =>
    props.onlyMobile &&
    css`
      ${onlyMobile};
    `};

  ${props =>
    props.onlyDesktop &&
    css`
      ${onlyDesktop};
    `};
`

const NativeSelect = styled.select`
  ${selectStyles};
  padding: 13px 20px 14px 6px;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23000000%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;

  appearance: none;
  border-radius: 0;

  &::-ms-expand {
    display: none;
  }
`
