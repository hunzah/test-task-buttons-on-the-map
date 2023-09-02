function toggleButtons(openButtonId, closeButtonId) {
    const openButton = document.getElementById(openButtonId);
    const closeButton = document.getElementById(closeButtonId);

    openButton.addEventListener('click', function () {
        openButton.style.display = 'none';
        closeButton.style.display = 'inline-flex';
    });

    closeButton.addEventListener('click', function () {
        closeButton.style.display = 'none';
        openButton.style.display = 'inline-flex';
    });
}


toggleButtons('shoppingMallButton', 'closeShoppingMallButton');
toggleButtons('bridgeButton', 'closeBridgeButton');
toggleButtons('stadiumButton', 'closeStadiumButton');
toggleButtons('cashRegisterButton', 'closeCashRegisterButton');
toggleButtons('apartmentBuildingButton', 'closeApartmentBuildingButton');
toggleButtons('parkingButton', 'closeParkingButton');
toggleButtons('hotelButton', 'closeHotelButton');
toggleButtons('stationButton', 'closeStationButton');
toggleButtons('frame1Button', 'closeFrame1Button');
toggleButtons('frame2Button', 'closeFrame2Button');


