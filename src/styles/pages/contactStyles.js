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

    export const PhoneWrapper = styled(Icons.Phone)`
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

    export const GitWrapper = styled(Icons.Github)`
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
    