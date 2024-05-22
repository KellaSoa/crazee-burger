import { css } from "styled-components";
import { theme } from ".";

export const adminAnimation = css`
    .admin-appear{
        opacity: 0.1;
        transform: translateY(100%);
        &.admin-appear-active{
            opacity: 1;
            transform: translateY(0);
            transition: all ${theme.speed.slow};
        }
  }
`;

export const basketAnimation = css`
    .animation-basket-appear{
        transform:translateX(100px);
        opacity: 0%;
    }
    .animation-basket-appear-active{
        transition: ${theme.speed.quick};
        transform: translateX(0px);
        opacity: 100%;
    }

    .animation-basket-enter{
        transform:translateX(100px);
        opacity: 0%;
    }
    .animation-basket-enter-active{
        transition: ${theme.speed.quick};
        transform: translateX(0px);
        opacity: 100%;
    }
    
    .animation-basket-exit{
        transform: translateX(0px);
        opacity: 100%;
    }
    .animation-basket-exit-active{
        transform:translateX(-100px);
        opacity: 0%;
        transition: 0.5s;
    }
`;