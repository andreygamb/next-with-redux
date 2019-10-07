import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import Modal from 'react-responsive-modal'

import { media, zIndex } from 'utils/styles'

export default ({ children, modalName, onClose, open }) => (
  <Modal
    open={open}
    onClose={onClose}
    styles={{
      modal: { padding: '0' },
      closeButton: { cursor: 'pointer', outline: 'none' }
    }}
    center>
    <Content modalName={modalName}>{children}</Content>
  </Modal>
)

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-width: 280px;
  padding: 50px 20px;
  text-align: center;
  color: black;
  background-color: white;
  font-size: 19px;
  line-height: 30px;

  ${media.tablet`
    padding: 56px 44px;
    font-size: 25px;
    line-height: 36px;
  `};
`
