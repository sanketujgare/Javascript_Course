import { cart, removeFromCart, updateDeliveryOption } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "../scripts/utils/money.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { deliveryOptions } from "../data/deliveryoptions.js";

// const today = dayjs();
// const deliverydate = today.add(7, "days");
// console.log(deliverydate.format("dddd, MMMM , D"));

let cartSummaryHTML = "";
cart.forEach((cartItem) => {
  const productId = cartItem.productId;
  let matchingProduct;
  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  const deliveryoptionId = cartItem.deliveryoptionId;
  let deliveryOption;
  deliveryOptions.forEach((option) => {
    if (option.id === deliveryoptionId) {
      deliveryOption = option;
    }
  });
  const today = dayjs();
  // console.log(today);
  const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
  // console.log(deliveryDate);
  const dateString = deliveryDate.format("dddd, MMMM D");

  cartSummaryHTML += `
    <div class="cart-item-container
      js-cart-item-container-${matchingProduct.id}">
      <div class="delivery-date">
        Delivery date: ${dateString}
      </div>

      <div class="cart-item-details-grid">
        <img class="product-image"
          src="${matchingProduct.image}">

        <div class="cart-item-details">
          <div class="product-name">
            ${matchingProduct.name}
          </div>
          <div class="product-price">
            $${formatCurrency(matchingProduct.priceCents)}
          </div>
          <div class="product-quantity">
            <span>
              Quantity: <span class="quantity-label">${cartItem.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary">
              Update
            </span>
            <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${
              matchingProduct.id
            }">
              Delete
            </span>
          </div>
        </div>

        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>
            ${deliveryoptionsHTMl(matchingProduct, cartItem)}
          </div>
        </div>
      </div>
    </div>
  `;
});

function deliveryoptionsHTMl(matchingProduct, cartItem) {
  let html = "";
  deliveryOptions.forEach((deliveryOption) => {
    const today = dayjs();
    // console.log(today);
    const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
    // console.log(deliveryDate);
    const dateString = deliveryDate.format("dddd, MMMM D");
    // console.log(dateString);
    const priceString =
      deliveryOption.priceCents === 0
        ? "FREE"
        : `$${formatCurrency(deliveryOption.priceCents)} -`;

    const isChecked = deliveryOption.id === cartItem.deliveryoptionId;
    console.log(cartItem);
    console.log(deliveryOption.id);
    console.log(cartItem.deliveryoptionId);
    console.log(isChecked);
    html += `
    <div class="delivery-option js-delivery-option"
    data-product-id="${matchingProduct.id}
    data-delivery-option-id="${deliveryOption.id}>

    <input type="radio"
      ${isChecked ? "checked" : ""}
      class="delivery-option-input"
      name="delivery-option-${matchingProduct.id}">
    <div>
      <div class="delivery-option-date">
        ${dateString}
      </div>
      <div class="delivery-option-price">
        ${priceString} - Shipping
      </div>
    </div>
  </div>
    `;
  });
  return html;
}

document.querySelector(".js-order-summary").innerHTML = cartSummaryHTML;

document.querySelectorAll(".js-delete-link").forEach((link) => {
  link.addEventListener("click", () => {
    const productId = link.dataset.productId;
    removeFromCart(productId);

    const container = document.querySelector(
      `.js-cart-item-container-${productId}`
    );
    container.remove();
  });
});

document.querySelectorAll(".js-delivery-option").forEach((element) => {
  element.addEventListener("click", () => {
    const { productId, deliveryOptionId } = element.dataset;
    updateDeliveryOption(productId, deliveryOptionId);
  });
});
