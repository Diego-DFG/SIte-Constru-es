(function templateNavRender() {
    let templateNav = document.querySelector('.navegacao__container');
    templateNav.innerHTML = `
        <div class="navegacao__logo">
            <h1 class="logo">VE</h1>
            <div class="logo__descricao">
                <span>Vital</span>
                <span>Engenharia</span>
            </div>    
        </div>
        <ul class="navegacao__lista">
            <li><a class="navegacao__links" href="">Home</a></li>
            <li><a class="navegacao__links" href="">Portfolio</a></li>
            <li><a class="navegacao__links" href="">Serviços</a></li>
            <li><a class="navegacao__links" href="">Contato</a></li>
        </ul>
    `;
    return templateNav;

})();

(function templateConteudoRender() {
    let templateConteudo = document.querySelector('.conteudo');
    templateConteudo.innerHTML = `
    <div class="destaque__carousel">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner carousel__container">
            <div class="carousel-item active">
                <img class="d-block w-100 carousel__img" src="./src/img/worker__00.jpg" alt="First slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100 carousel__img" src="./src/img/eletricista__00.jpg" alt="Second slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100 carousel__img" src="./src/img/visao.jpeg" alt="Third slide">
            </div>
            </div>
            <a class="carousel-control-prev carousel__btn" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <i style="font-size: 60px" class="btn__seta fas fa-angle-left"></i>
                <span class="sr-only btn__icon">Previous</span>
            </a>
            <a class="carousel-control-next carousel__btn" href="#carouselExampleIndicators" role="button" data-slide="next">
                <i style="font-size: 60px" class="btn__seta fas fa-angle-right"></i>
                <span class="sr-only btn__icon">Next</span>
            </a>
        </div>
    </div>
    <div class="conteudo__servicos">
        <h1 class="categorias__titulo">Nossos Produtos</h1>
        <div class="categorias__container">
            <div class="categorias__conteudo">
                <img class="categorias__img" src="./src/img/eletricista__02.jpg" alt="">
                <h4>Reparos elétricos</h4>
            </div>
            <div class="categorias__conteudo">
                <img class="categorias__img" src="./src/img/reformas__00.jpg" alt="">
                <h4>Reformas</h4>
            </div>
            <div class="categorias__conteudo">
                <img class="categorias__img" src="./src/img/engenharia__00.jpg" alt="">
                <h4>Engenharia e projetos</h4>
            </div>
        </div>
    </div>
    <div class="conteudo__sobre">
        <h1 class="categorias__titulo sobre-titulo">Sobre nós</h1>
        <div class="conteudo__sobre-container">
            <div class="conteudo__sobre-img">
            <img class="sobre-img" src="./src/img/sobre.jpg" alt="">
            </div>
            <div class="conteudo__sobre-descricao">
                <h2 class="sobre-descricao_titulo">CONHEÇA A VITAL ENGENHARIA</h2>
                <p class="sobre-descricao_p">Nossa história foi construída em mais de 30 anos ao lado 
                de pessoas como você, que buscam realizar o sonho da casa própria. 
                Nossos imóveis oferecem conforto em preços acessíveis às mais diferentes 
                realidades brasileiras, promovendo qualidade de vida nos lares de milhares
                de famílias.   Na busca constante para aperfeiçoar nossos processos e 
                empreendimentos, a Você Construtora é atestada por importantes 
                certificações, como o Programa Brasileiro de Qualidade e Produtividade 
                no Habitat e a ISO 9001, mostrando nosso comprometimento com o seu 
                bem-estar.
                </p>
            </div>
        </div>
    </div>
    `;
    return templateConteudo;

})();

