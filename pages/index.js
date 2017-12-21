import React from 'react'
import Link from "next/link"
import Layout from "../components/layout";
import Banner from "../components/banner";
import GlobalStyle from "../components/globalStyle";



const Home = (props) => {

  return (
    <Layout>
      <GlobalStyle />
      <Banner />
      <div className="section light" id="whatisit" >
        <h2 >Nedir ?</h2>
        <p>

        Anlat Robotu yarışmasında hayalindeki robotu bize oyun geliştirerek anlatmanı istiyoruz. <br/>
        <br/>
        Amacımız öğrencilere bilişim bilincini aşılamak amaçlı hayal güçlerini kullanarak akıllı telefon oyunları geliştirmeleri<br/>
        <br/>

        Ön elemeyi geçen öğrencileri 3 günlük ODTÜ kampına çağırıyoruz ve ODTÜ'de bir yandan yazılım, robotik gibi teknik eğitimler verirken diğer yandan beraber lunaparka gidip eğleniyoruz

 </p>
      </div>

      <div className="section dark" id="register">
      <nav>
        <Link href="/anlatrobotunu/register"  ><a className="button page">
        
        Başvur</a>
        
        </Link>        
        </nav>
      </div>

      <div className="section light" id="purpose" >
        <h2 >Amacımız ?</h2>
        <p>
        Öğrencilere bilişim bilinci kazandırmak <br/>
        Öğrencilerin hayal güçlerini geliştirmek <br/>
        Öğrencilerin toplum önünde kendilerini ifade etmelerine yardımcı olmak<br/>
      Üniversitede eğitim görmeleri için teşvik etmek<br/>
        </p>
      </div>


      <div className="section dark" >
      <h2 > Yararlı Linkler</h2>
        <p>
          Oyun geliştirmene destek çıkmak için yaralı linklerin olduğu bir döküman hazırladık
        </p>
        <Link prefetch href="/anlatrobotunu/doc"  >
        
        <a className="button page">
        Dökümantasyon 
        </a>
       
        </Link>    
        
      </div>

      <div className="section light" >
      <h2 > Şartname</h2>
      <p>
        Yarışma Kurallarını Şartnameyi okuyarak öğrenebilirsin
      </p>
      <Link prefetch href="/anlatrobotunu/rules"  >
      
      <a className="button page dark">
       Şartname
      </a>
     
      </Link>    
      </div>

    </Layout>
  );
};

export default Home;