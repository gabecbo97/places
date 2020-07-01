import styled, { css }from 'styled-components'

export const CardV2Wrapper = styled.div`
background: ${props => props.background ? props.background : 'blue'};
h5{
    color: #fff2a8;
}
p{
    color: #fff2a8;
}
.card{
    border-radiums: 3mm;
}

${props =>
props.primary &&
css`
    background: #8a4baf;

h5{
    color: #f1defa;
}
p{
    color: #f1defa;
}
`
};
`