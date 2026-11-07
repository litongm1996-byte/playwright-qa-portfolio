# Test Case 1 — E-commerce: Filter, Sort, and Cart Math

## Test Case

**Application:** [Practice Software Testing](https://practicesoftwaretesting.com/)

**Precondition:** Open the browser and navigate to the main page.

## Steps and Expected Results

1. In the sidebar filters, find the **Brands** section and check the box for **MightyCraft Hardware**.

2. In the **Sort** dropdown (top right), select **Price - Low to High**.

3. Validate that the displayed products are correctly sorted by price.
   - **Expected result:** All prices in the current view are in strictly ascending order.

4. Click on the first product card in the sorted grid.
   - **Expected result:** The product details page for the selected item is opened.

5. Click the **Add to cart** button.
   - **Expected result:** A success toast message appears. The cart badge in the header increases.

6. Click on the Cart icon in the header.
   - **Expected result:** The Checkout page is displayed. The item is present in the list.

7. Increase the quantity (**Qty**) of the item to **3**.
   - **Expected result:** The total price for the item row updates to equal exactly: `Price per unit * 3`.

## Test Objective

Verify the product filtering and sorting workflow, open a product from the sorted results, add it to the cart, and validate the cart quantity and line-total calculation.

## Scope of Validation

- Brand filtering using **MightyCraft Hardware**.
- Sorting products by **Price - Low to High**.
- Strictly ascending order of displayed prices.
- Navigation to the selected product details page.
- Add-to-cart action and success notification.
- Cart badge update.
- Cart/Checkout page display and item presence.
- Quantity update to 3.
- Line total calculation based on unit price and quantity.

## Notes

- The supplied test case contains seven steps.
- Expected results are included only where they are specified in the supplied test case.
- No additional steps or assertions have been added.
- This is an educational test automation exercise, not commercial Automation QA experience.
