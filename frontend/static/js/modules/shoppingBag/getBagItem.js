function getBagItem(item) {
  return `
    <div class="bag__item">
        <div class="bag__img-box">
            <img class="bag__img" src="https://${item.img}" alt="...">
        </div>
        <div class="bag__txt-box">
            <p class="bag__name">${item.name}</p>
            <p class="bag__prise">${item.prise} $</p>
            <button id="remove" class="bag__remove">remove</button>
        </div>
        <div class="bag__btns">
            <button  class="bag__btn-amount countUp">
                <img class="bag__img-amount" src="https://img.icons8.com/external-those-icons-fill-those-icons/24/000000/external-Up-interface-those-icons-fill-those-icons.png"/>
            </button>
            <p class="bag__amount">${item.count}</p>
            <button class="bag__btn-amount countDown">
                <img class="bag__img-amount" src="https://img.icons8.com/external-those-icons-fill-those-icons/24/000000/external-Down-interface-those-icons-fill-those-icons.png"/>
            </button>
        </div>
    </div>`;
}

export default getBagItem;
