import './Landing.css';
import { Button } from '@mui/material';
import React from 'react';
import CarroG from '../../assets/car.svg';
import logoSVGneon from '../../assets/teste.svg';

function Landing() {
    return (
        <>
            <header className='header'>
                    <div className='logo'>
                        <svg width="40" height="40" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 294C0 131.628 131.628 0 294 0H706C868.372 0 1000 131.628 1000 294V706C1000 868.372 868.372 1000 706 1000H294C131.628 1000 0 868.372 0 706V294Z" fill="url(#paint0_radial_4_24)" />
                            <path d="M229.95 773.084V813.95C229.95 836.8 211.356 854.816 188.781 854.816C166.206 854.816 147.612 836.8 147.612 813.95V773.084H106V639.506C106 610.066 125.922 585.9 152.925 578.428L201.178 464.622C208.259 447.925 224.637 436.062 244.116 436.062H490.688C510.166 436.062 526.544 447.925 533.628 464.625L581.438 578.431C608.441 585.9 628.363 610.069 628.363 639.509V773.088H586.309V813.953C586.309 836.803 567.716 854.819 545.141 854.819C522.122 854.819 503.972 836.803 503.972 813.953V773.088H229.95V773.084ZM191.438 699.703C214.456 699.703 233.05 681.247 233.05 658.4C233.05 635.55 214.456 617.097 191.438 617.097C168.419 617.097 149.825 635.553 149.825 658.4C149.825 681.247 168.419 699.703 191.438 699.703ZM581.878 658.4C581.878 635.55 563.284 617.097 540.266 617.097C517.247 617.097 498.653 635.553 498.653 658.4C498.653 681.247 517.247 699.703 540.266 699.703C563.284 699.703 581.878 681.25 581.878 658.4ZM540.266 576.231L499.097 477.806C497.325 472.972 492.456 469.456 486.703 469.456H247.656C242.344 469.456 237.475 472.972 235.703 477.806L194.534 576.231H540.266ZM723.447 145C627.534 145 550.131 222.403 550.131 318.316C550.131 389.956 593.859 451.678 655.972 478.206V530.375H706.55V854.812H737.678V530.375H787.928V478.041C849.841 451.425 893.391 389.809 893.391 318.316C896.763 222.403 818.516 145 723.447 145ZM723.447 464.706C642.678 464.706 577.056 399.081 577.056 318.316C577.056 237.547 642.681 171.925 723.447 171.925C804.212 171.925 869.837 237.55 869.837 318.316C869.837 399.084 804.216 464.706 723.447 464.706Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M743.525 323.553L776.125 342.226C779.307 344.049 780.337 348.19 778.545 351.269C776.699 354.441 772.715 355.588 769.441 353.712L736.289 334.722C732.894 337.338 728.63 338.895 724 338.895C712.925 338.895 703.947 329.988 703.947 319C703.947 310.338 709.527 302.968 717.316 300.237V239.466C717.316 235.779 720.416 232.789 724 232.789C727.692 232.789 730.684 235.878 730.684 239.466V300.237C738.473 302.968 744.053 310.338 744.053 319C744.053 320.566 743.87 322.09 743.525 323.553ZM724 445C794.14 445 851 388.588 851 319C851 249.412 794.14 193 724 193C653.86 193 597 249.412 597 319C597 388.588 653.86 445 724 445Z" fill="white" />
                            <defs>
                                <radialGradient id="paint0_radial_4_24" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(500 500) rotate(90) scale(500)">
                                    <stop stop-color="#006EFF" />
                                    <stop offset="1" stop-color="#032653" />
                                </radialGradient>
                            </defs>
                        </svg>
                        <span>Park</span>
                        <span>Hub</span>
                    </div>
                    <nav>
                        <a href="">Estacionamentos</a>
                        <a href="">Vantagens</a>
                        <a href="">Sobre</a>
                        <Button variant="contained">Login</Button>
                </nav>
            </header>
            <div>
                <p>As vezes estacionar se torna uma missão impossível, não é mesmo?</p>
                    
                    <div className='centered-div'>
                    <img src={logoSVGneon} alt="LogoNeon" ></img>
                        <span className='parkhub'>ParkHub</span>
                        <h1>"Estacione com Facilidade, Reserve com Tranquilidade"</h1>
                    </div>
            </div>
            <footer> Site em Construção </footer>
        </>
    )
}
export default Landing