import {Header} from '../components/Header';
import {Footer} from '../components/Footer';
import { WorksList } from '../components/WorksList';
import { Title } from '../components/Title';

export const Works: React.FC = () => {
    return (
        <>
            <Header />
            <Title title="Works" />
            <WorksList />
            <Footer />
        </>
    );
}