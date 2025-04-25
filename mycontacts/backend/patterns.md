Repository Pattern: Layer (camada) de abstração de acesso ao DataSource (banco de dados, API, etc) que permite desacoplar a lógica de acesso aos dados da lógica de negócio. O repositório é responsável por fornecer uma interface para acessar e manipular os dados, permitindo que a lógica de negócio não precise se preocupar com os detalhes de como os dados são armazenados ou recuperados.

Controller <-> Repository <-> DataSource
