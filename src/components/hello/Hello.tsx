'use client';

import { Stack, Box, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export function Hello() {
    const [message, setMessage] = useState<string>();

    useEffect(() => {
        fetch('/api/hello')
            .then((response) => response.json())
            .then((response) => {
                setMessage(response.message as string);
            })
            .catch(() => {
                setMessage('Lo sentimos. Ha ocurrido un error');
            });
    }, []);

    return (
        <Stack>
            <Box>
                <Text>{message || 'Cargando mensaje...'}</Text>
            </Box>
        </Stack>
    );
}
