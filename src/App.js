import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import './assets/styles/style.scss';
import GlobalStyle from './components/GlobalStyle'
import { TipsProvider } from './components/contexts/TipsContext';
import { RealisationsProvider } from './components/contexts/RealisationsContext';
import {AnimatePresence} from 'framer-motion'
import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Tips from './pages/Tips';
import MentionsLegales from './pages/MentionsLegales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import Realisations from './pages/Realisations';
import About from './pages/About';
import ScrollTop from './ScrollTop';

function App() {
    const location = useLocation();
    return (
        <TipsProvider>
            <RealisationsProvider>
                <GlobalStyle />
                <ScrollTop />
                <Header />
                <main>
                    <AnimatePresence exitBeforeEnter>
                        <Switch location={location} key={location.pathname}>
                            <Route path='/' exact>
                                <Home />
                            </Route>
                            <Route path='/contact' exact>
                                <Contact />
                            </Route>
                            <Route path='/realisations' exact>
                                <Realisations />
                            </Route>
                            <Route path='/about' exact>
                                <About />
                            </Route>
                            <Route path='/tips' exact>
                                <Tips />
                            </Route>
                            <Route path='/mentions-legales' exact>
                                <MentionsLegales />
                            </Route>
                            <Route path='/politique-confidentialite' exact>
                                <PolitiqueConfidentialite />
                            </Route>
                        </Switch>
                    {/* <Tips /> */}
                    </AnimatePresence>
                </main>
                <Footer />
                </RealisationsProvider>
        </TipsProvider>
    );
}

export default App;
