import ky from 'ky'

// Перемістисти в іншу місце!!
const getCovidData = async () => {
  const { Countries, Global } = await ky.get('https://api.covid19api.com/summary').json()

  if (Countries !== undefined) {
    const [{ NewConfirmed: newConfirmed, TotalConfirmed: allConfirmed, TotalDeaths: allDeaths }] =
      Countries.filter(elem => elem.Country === 'Ukraine')

    const {
      NewConfirmed: newConfirmedWorld,
      TotalConfirmed: allWorldConfirmed,
      TotalDeaths: allWorldDeaths,
    } = Global

    const drobNumUaAllConf = allConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    const drobNumUaAllDeaths = allDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')

    const drobNumWorldTodayConf = newConfirmedWorld.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    const drobNumWorldAllConf = allWorldConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    const drobNumWorldAllDeaths = allWorldDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
// TODO: change naming for this section adn create single function for this logic const readyStr = greateFinishStr(allConfirmed)
    return {
      UAnewConfirmed: newConfirmed,
      UAallConfirmed: drobNumUaAllConf,
      UAallDeaths: drobNumUaAllDeaths,

      worldNewConfirmed: drobNumWorldTodayConf,
      worldAllConfirmed: drobNumWorldAllConf,
      worldAllDeaths: drobNumWorldAllDeaths,
    }
  } else {
    return {
      UAnewConfirmed: '132',
      UAallConfirmed: '212.321',
      UAallDeaths: '332.131.212',

      worldNewConfirmed: '433.21',
      worldAllConfirmed: '432.435',
      worldAllDeaths: '643.214.2',
    }
  }
}

export const covidData = await getCovidData()
