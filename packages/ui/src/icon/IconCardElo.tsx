import React, { FunctionComponent } from 'react';

import withIconContainer from './withIconContainer';

const IconCardElo: FunctionComponent = () => (
    <svg
        aria-labelledby="iconCardEloTitle"
        fill="none"
        height="48"
        viewBox="0 0 70 48"
        width="70"
        xmlns="http://www.w3.org/2000/svg"
    >
        <title id="iconCardEloTitle">Elo</title>
        <rect fill="white" height="47" rx="5.5" stroke="#D9D9D9" width="69" x="0.5" y="0.5" />
        <path
            d="M23.8354 25.1111C23.2741 27.8164 20.8374 29.8507 17.917 29.8507C17.2469 29.8507 16.602 29.7433 16.0002 29.5454L14.6588 33.4814C15.6825 33.8179 16.7778 34 17.917 34C22.8811 34 27.022 30.5407 27.9762 25.9437L23.8354 25.1111Z"
            fill="#EC412A"
        />
        <path
            clipRule="evenodd"
            d="M47.9052 16.2223V27.6028L49.9475 28.4214L48.9813 30.6661L46.9617 29.8543C46.5076 29.6638 46.2003 29.3737 45.9668 29.046C45.7426 28.7108 45.5763 28.2525 45.5763 27.6341V16.2223H47.9052ZM32.4161 24.6806C32.4668 21.4261 35.2384 18.8283 38.6015 18.8781C41.4559 18.9214 43.821 20.8547 44.4422 23.4261L33.4022 27.9889C32.7609 27.0409 32.3965 25.9004 32.4161 24.6806ZM34.9421 25.1369C34.927 25.0004 34.9163 24.8604 34.9204 24.7191C34.952 22.8017 36.5837 21.2716 38.5652 21.3034C39.6437 21.3173 40.6014 21.7949 41.2487 22.5341L34.9421 25.1369ZM41.0163 27.2498C40.351 27.8757 39.4487 28.257 38.4524 28.2433C37.7696 28.2322 37.1368 28.0346 36.5989 27.7052L35.2652 29.7601C36.1786 30.3184 37.2555 30.6487 38.4166 30.6661C40.1066 30.6904 41.647 30.0484 42.7671 28.9883L41.0163 27.2498ZM56.405 21.3034C56.0072 21.3034 55.6249 21.3655 55.2677 21.4815L54.473 19.1788C55.0796 18.9829 55.7291 18.8766 56.405 18.8766C59.3547 18.8766 61.8154 20.9027 62.3797 23.5942L59.9197 24.0791C59.5882 22.4951 58.1406 21.3034 56.405 21.3034ZM52.3661 29.1871L54.0283 27.3695C53.2859 26.7339 52.8184 25.8057 52.8184 24.7711C52.8184 23.7376 53.2859 22.8098 54.0276 22.1747L52.3642 20.3571C51.1031 21.4371 50.3086 23.0151 50.3086 24.7711C50.3086 26.5293 51.1037 28.1068 52.3661 29.1871ZM56.4049 28.2401C58.1389 28.2401 59.5863 27.0494 59.9197 25.4677L62.3789 25.9547C61.8119 28.6433 59.3519 30.6667 56.4049 30.6667C55.7284 30.6667 55.0781 30.56 54.4699 30.3632L55.2665 28.0613C55.6243 28.1769 56.0068 28.2401 56.4049 28.2401Z"
            fill="black"
            fillRule="evenodd"
        />
        <path
            d="M11.0688 31.7778L13.5489 28.5755C12.4419 27.4557 11.7432 25.821 11.7432 23.9988C11.7432 22.1779 12.4412 20.5431 13.548 19.4242L11.0665 16.2223C9.18543 18.1247 8 20.9037 8 23.9988C8 27.0955 9.18716 29.8754 11.0688 31.7778Z"
            fill="#1BA7DE"
        />
        <path
            d="M15.9983 18.4506C16.6 18.2533 17.2437 18.1462 17.9135 18.1462C20.8365 18.1462 23.2747 20.1831 23.8341 22.8889L27.9762 22.0604C27.0258 17.4617 22.8822 14 17.9135 14C16.7759 14 15.6809 14.1818 14.6588 14.5167L15.9983 18.4506Z"
            fill="#FECA2F"
        />
    </svg>
);

export default withIconContainer(IconCardElo);
