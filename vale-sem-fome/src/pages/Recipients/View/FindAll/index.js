import React from 'react';
import { 
    CityHeader,
    TableMobile,
    TableDesktop,
    SearchForm,
    Pagination,
    Footer
} from './../../../../components';


function RecipientsFindAll() {
    let screenWidth = window.screen.width;

    if(screenWidth < 768){
        return (
            <div>
                <CityHeader cityName="São José dos Campos"/>
                <SearchForm totalEntries="23.023 registros"/>
                <TableMobile 
                    fullName="José Luiz Vasco" 
                    cpf="000.001.010-01"
                    regionCity="Zona Norte"
                    neighbourhood="Novo Horizonte"
                    currentFinancialStatus="Extremamente Séria"
                />
                <Pagination currentPage="2"
                    totalPages="204"
                />
                <Footer />
            </div>
        )
    } else{
        return (
            <div>
                <CityHeader cityName="São José dos Campos"/>
                <SearchForm totalEntries="23.023 registros"/>
                <TableDesktop 
                    fullName="José Luiz Vasco" 
                    cpf="000.001.010-01"
                    regionCity="Zona Norte"
                    neighbourhood="Novo Horizonte"
                    currentFinancialStatus="Extremamente Séria"
                />
                <Pagination currentPage="2"
                    totalPages="204"
                />
                <Footer />
            </div>
        )
    }

}

export default RecipientsFindAll;