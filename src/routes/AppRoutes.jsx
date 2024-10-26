import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";
import Imovel from "../pages/Imovel";
import Avaliacao from "../pages/Avaliacao";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
    return (
        <Routes>
            {/* Cada rota aponta para a sua página */}
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/imovel" element={<Imovel />} />
            <Route path="/avaliacao" element={<Avaliacao />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
