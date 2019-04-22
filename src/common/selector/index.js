import { createSelector } from 'reselect'

const userNameSelector = state => state.userName

export const filterNameSelector = createSelector(
    [userNameSelector],
    name => `${name}(filter by selecotor already)`
)

// 参数传参方式：1-如下，2-数组，将多个selector整成一个数组，即改装后的taxSelector为createSelector([subtotalSelector, taxPercentSelector], (subtotal, taxPercent) => subtotal * (taxPercent / 100))
// const shopItemsSelector = state => state.shop.items
// const taxPercentSelector = state => state.shop.taxPercent

// const subtotalSelector = createSelector(
//   shopItemsSelector,
//   items => items.reduce((acc, item) => acc + item.value, 0)
// )

// const taxSelector = createSelector(
//   subtotalSelector,
//   taxPercentSelector,
//   (subtotal, taxPercent) => subtotal * (taxPercent / 100)
// )

// export const totalSelector = createSelector(
//   subtotalSelector,
//   taxSelector,
//   (subtotal, tax) => ({ total: subtotal + tax })
// )

// let exampleState = {
//   shop: {
//     taxPercent: 8,
//     items: [
//       { name: 'apple', value: 1.20 },
//       { name: 'orange', value: 0.95 },
//     ]
//   }
// }
