import { currencySymbol } from '../db/currency'
export default {
  methods: {
    priceInWords(price) {
      const sglDigit = [
        'Zero',
        'One',
        'Two',
        'Three',
        'Four',
        'Five',
        'Six',
        'Seven',
        'Eight',
        'Nine',
      ]
      const dblDigit = [
        'Ten',
        'Eleven',
        'Twelve',
        'Thirteen',
        'Fourteen',
        'Fifteen',
        'Sixteen',
        'Seventeen',
        'Eighteen',
        'Nineteen',
      ]
      const tensPlace = [
        '',
        'Ten',
        'Twenty',
        'Thirty',
        'Forty',
        'Fifty',
        'Sixty',
        'Seventy',
        'Eighty',
        'Ninety',
      ]
      // eslint-disable-next-line camelcase
      const handle_tens = function (dgt, prevDgt) {
        // eslint-disable-next-line eqeqeq
        return dgt == 0
          ? ''
          : // eslint-disable-next-line eqeqeq
            ' ' + (dgt == 1 ? dblDigit[prevDgt] : tensPlace[dgt])
      }
      // eslint-disable-next-line camelcase
      const handle_utlc = function (dgt, nxtDgt, denom) {
        // eslint-disable-next-line eqeqeq
        return (
          // eslint-disable-next-line eqeqeq
          (dgt != 0 && nxtDgt != 1 ? ' ' + sglDigit[dgt] : '') +
          // eslint-disable-next-line eqeqeq
          (nxtDgt != 0 || dgt > 0 ? ' ' + denom : '')
        )
      }

      let str = ''
      let digitIdx = 0
      let digit = 0
      let nxtDigit = 0
      const words = []
      // eslint-disable-next-line no-sequences
      if (((price += ''), isNaN(parseInt(price)))) str = ''
      else if (parseInt(price) > 0 && price.length <= 10) {
        for (digitIdx = price.length - 1; digitIdx >= 0; digitIdx--) {
          // eslint-disable-next-line no-sequences
          switch (
            ((digit = price[digitIdx] - 0),
            (nxtDigit = digitIdx > 0 ? price[digitIdx - 1] - 0 : 0),
            price.length - digitIdx - 1)
          ) {
            case 0:
              words.push(handle_utlc(digit, nxtDigit, ''))
              break
            case 1:
              words.push(handle_tens(digit, price[digitIdx + 1]))
              break
            case 2:
              // eslint-disable-next-line eqeqeq
              words.push(
                digit !== 0
                  ? ' ' +
                      sglDigit[digit] +
                      ' Hundred' +
                      // eslint-disable-next-line eqeqeq
                      (price[digitIdx + 1] != 0 && price[digitIdx + 2] != 0
                        ? ' and'
                        : '')
                  : ''
              )
              break
            case 3:
              words.push(handle_utlc(digit, nxtDigit, 'Thousand'))
              break
            case 4:
              words.push(handle_tens(digit, price[digitIdx + 1]))
              break
            case 5:
              words.push(handle_utlc(digit, nxtDigit, 'Lakh'))
              break
            case 6:
              words.push(handle_tens(digit, price[digitIdx + 1]))
              break
            case 7:
              words.push(handle_utlc(digit, nxtDigit, 'Crore'))
              break
            case 8:
              words.push(handle_tens(digit, price[digitIdx + 1]))
              break
            case 9:
              words.push(
                // eslint-disable-next-line eqeqeq
                digit != 0
                  ? ' ' +
                      sglDigit[digit] +
                      ' Hundred' +
                      // eslint-disable-next-line eqeqeq
                      (price[digitIdx + 1] != 0 || price[digitIdx + 2] != 0
                        ? ' and'
                        : ' Crore')
                  : ''
              )
          }
        }
        str = words.reverse().join('')
      } else str = ''
      return str
    },
    currency(money, currency) {
      // return (Number(money)).toLocaleString('en', { style: 'currency', currency: currency || 'INR', minimumFractionDigits: 0 })
      const c = currencySymbol[currency]
        ? currencySymbol[currency]
        : currencySymbol.INR
      return c + ' ' + Number(money)
    },
    IsJsonString(str) {
      try {
        JSON.parse(str)
      } catch {
        return false
      }
      return true
    },
    yrFeeLogic(amount) {
      const yrFeeArr = [
        { per: 5, price: 1000000000 },
        { per: 6, price: 100000 },
        { per: 7, price: 10000 },
        { per: 5, price: 2000 },
        { per: 3, price: 300 },
        { per: 3, price: 0 },
      ]
      const percentage = yrFeeArr.find((i) => i.price <= Number(amount))
      if (percentage && percentage.per) {
        return Number(
          Number(
            Number(Number(percentage.per / 100) * Number(amount)).toFixed(2)
          )
        )
      } else {
        return Number(
          Number(Number(Number(5 / 100) * Number(amount)).toFixed(2))
        )
      }
    },
    financial(x) {
      return Number.parseFloat(x).toFixed(2)
    },
    tboAgentCommissionCharges(x) {
      return Number(Number((18 / 100) * Number(x)).toFixed(2))
    },
  },
}
