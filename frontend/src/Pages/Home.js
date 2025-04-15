import React, { useEffect, useState } from 'react';
import Header from '../components/HEADERS/Header';
import Footer from '../components/FOOTERS/footer';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import TransportForm from '../components/TransportForm';


function Home() {
  const [message, setMessage] = useState('');


  useEffect(() => {
    fetch('/api/hello/')
      .then(response => response.json())
      .then(data => setMessage(data.message));
    

      
  }, []);

  return (
         
    <div className="background">
       <Row>
         <Header />
       </Row >
       <Container className="body" style={{ paddingTop: '140px' }}>
       <h1 className="text-large">Компания NDELIKA основана в 2024 году командой профессионалов и единомышленников с многолетним опытом работы в сфере логистики. Базируемся в Москве. Осуществляем экспедиционное обслуживание и грузоперевозки преимущественно внутри страны, а также по всему Миру.</h1>
         <Row className = "border border-primary p-4 shadow"> 
            <TransportForm />
        </Row>
            <h1 className="text-large" style={{ paddingTop: '20px' }}>{message}</h1>
            <h1 className="text-large">- Автомобильные грузоперевозки FTL — «полностью загруженная машина», прямая поставка генерального груза любым видом транспорта от точки загрузки в точку выгрузки «под ключ», фактически арендуется вся машина вне зависимости от объема загрузки;</h1>
            <img src="/images/1.png" alt="ImagesService"  className="fixed-size-image" style={{ paddingTop: '30px' }} /> 
            <h1 className="text-large">- Автомобильные грузоперевозки LTL — «частично загруженная машина», прямая поставка генерального груза в составе сборного авто от точки загрузки в точку выгрузки, от 20 кг;</h1>
            <img src="/images/2.png" alt="ImagesService" className="fixed-size-image" style={{ paddingTop: '30px' }} />
            <h1 className="text-large">- Авиаперевозки — перевозим грузы авиатранспортом по России, работаем напрямую с ведущими авиакомпаниями, поэтому оперативно подберем для вашего груза рейс, оформление авианакладных, упаковка, страхование. </h1>
            <img src="/images/3.png" alt="ImagesService" className="fixed-size-image" style={{ paddingTop: '30px' }} />
            <h1 className="text-large">- Морские и речные перевозки — осуществляем доставку генеральных и сборных грузов морскими контейнерами 20-футовыми, 40-футовыми и 45HC (High Cube) по России в кратчайшие сроки по выгодным тарифам, оформление коноссамента; доставка в Норильск 23 календарных дня!</h1>
            <img src="/images/4.png" alt="ImagesService" className="fixed-size-image" style={{ paddingTop: '30px' }} />
            <h1 className="text-large">- Негабаритные перевозки, заказ трала — перевозки грузов у которых превышены допустимый вес или габариты транспортного средства, наша специализация: дорожно-строительная и специальная техника JCB, CAT, металлоконструкции и металлопрокат, промышленное оборудование (шламовые насосы), строительные материалы, башенные краны;</h1>
            <h1 className="text-large">ФОТО ТРАЛА</h1>
            <h1 className="text-large">- ТЭО сопровождение — консультационная поддержка в оформлении отгрузочных документов, товаросопроводительных документов, предоставление бланков, работа с электронными транспортным накладными и т.д.;</h1>
            <h1 className="text-large">ДОКИ, ДЕКЛАРАЦИИ ТНки</h1>
            <h1 className="text-large">- Работа на известных электронных торговых площадках (Atrucks, Loginet, Logist-Pro, Облачная Логистика), а также с сетевыми ритейлами, такими как Х5 Retail Group, Тандер, Агроторг, METRO, Лента, ВкусВилл, Бэст Прайс, М.Видео и маркетплейсах (OZON, WB, СберЛогистика), доставка строго в тайм-слот по всем регионам, документальное сопровождение, быстрый возврат документов; </h1>
            <h1 className="text-large">- Страхование — оформление индивидуального полиса страхования Вашего груза на всем пути следования.</h1>
            <h1 className="text-large">возможно будет фото полиса от ск</h1>
          
         </Container>
        <Row>
          <Footer />  
        </Row>
        </div>
  )
}



export default Home;