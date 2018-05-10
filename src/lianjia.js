export async function lianjia(city) {
  return (await fetch(
    'https://bj.lianjia.com/fangjia/priceTrend/?region=city&region_id=110000',
  )).json()
}
