import Icons from '../../components/Icons'
import  styled, { css } from 'styled-components'

export const EmailWrapper = styled(Icons.Email)`
color: ${props => props.color ? props.background : 'red'};
width: ${props => props.width ? props.background : '100px'};






${props =>
    props.danger &&
    css`
       color: orange;
       width: 35px;
    `
    };

    `