import { GenericContainer } from '@/src/components/elements/Container';
import { Hello } from '@/src/components/hello/Hello';

export default function HelloPage() {
    return (
        <GenericContainer>
            <Hello />
        </GenericContainer>
    );
}
