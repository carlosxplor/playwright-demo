import { ReactNode, useState, useEffect } from 'react';
import {
    Button as ChakraButton,
    ButtonProps,
    IconButton as ChakraIconButton,
    IconButtonProps,
} from '@chakra-ui/react';

type RenderType = {
    loaded: boolean;
};

type GenericButtonProps = {
    render: (props: RenderType) => ReactNode;
};

const ButtonWrapper = ({ render }: GenericButtonProps) => {
    const [loaded, setLoaded] = useState<boolean>(false);

    useEffect(() => {
        /**
         * Flag que indica que la interfaz es lista para interacturar con el usuario
         * Por defecto los client componentes son descargados por hidratación
         * https://playwright.dev/docs/navigations#hydration
         */
        setLoaded(true);
    }, []);

    return <>{render({ loaded })}</>;
};

export const Button = ({ children, isDisabled, ...rest }: ButtonProps) => (
    <ButtonWrapper
        render={({ loaded }) => (
            <ChakraButton isDisabled={!loaded || isDisabled} {...rest}>
                {children}
            </ChakraButton>
        )}
    />
);

export const IconButton = ({ children, isDisabled, ...rest }: IconButtonProps) => (
    <ButtonWrapper
        render={({ loaded }) => <ChakraIconButton isDisabled={!loaded || isDisabled} {...rest} />}
    />
);