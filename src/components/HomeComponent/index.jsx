import Car from '../../images/car.svg'

import './styles.scss';

export function HomeComponent() {
  return(
    <main>
    <div className="text">
      <h2>Paulo Henrique</h2>
      <h3>Estudante e Empreendedor</h3>
    </div>
      <img src={Car} alt="lava rápido" />

    </main>
  );
}