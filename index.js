import Freecurrencyapi from "@everapi/freecurrencyapi-js";

const freecurrencyapi = new Freecurrencyapi(
  "fca_live_6C93sqMiCvcON6uyYa0DLACS2o1FgATkMlFCBBLL"
);

export default async function ConvertMyCurrency(
  fromCurrency,
  toCurrency,
  units
) {
  const result = await freecurrencyapi.latest({
    base_currency: fromCurrency,
    currencies: toCurrency,
  });

  return result.data[toCurrency] * units;
}
